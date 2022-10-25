import 'dotenv/config';
import fs from 'fs';
import { REST, Routes } from 'discord.js';

// Will contain JSON for each command
const commands = [];

// Create an instance of the REST module
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

/**
 * Will go through each command file in commands/ and convert eaches data to JSON to send to Discord
 */
async function gatherCommands() {
    try {
        const commandFiles = fs.readdirSync('commands/').filter(file => file.endsWith('.js'));
    
        for (const file of commandFiles) {
            const { data } = await import(`./commands/${file}`);
            commands.push(data.toJSON());
        }
    } catch (error) {
        throw error;
    }
}

// Deploy commands
async function deployCommands() {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // Refresh all commands with the current set
        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.APP_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log(`Sucessfully reloaded ${data.length} application (/) commands.`)
    } catch (error) {
        throw error;
    }
}

(async function () {
    try {
        await gatherCommands();
        await deployCommands();
    } catch (error) {
        console.log(error);
    }
})();