import 'dotenv/config';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { Client, Collection, GatewayIntentBits } from 'discord.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a new client and a new 'commands' property
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

/**
 * Add all the commands from commands/ into the Collection
 */
async function collectCommands() {
	try {
		const commandsPath = path.join(__dirname, 'commands');
		const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const filePath = path.join(commandsPath, file);
			const command = await import(filePath);

			// Set a new item in the Collection with the key as the command name and the value as the exported module
			if ('data' in command && 'execute' in command) {
				client.commands.set(command.data.name, command);
			} else {
				console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
			}
		}
	} catch (error) {
		throw error;
	}
}

/**
 * Register event listeners for each event in events/
 */
async function registerClientEventListeners() {
	try {
		const eventsPath = path.join(__dirname, 'events');
		const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

		for (const file of eventFiles) {
			const filePath = path.join(eventsPath, file);
			const event = await import(filePath);
			if (event.once) {
				client.once(event.name, (...args) => event.execute(...args));
			} else {
				client.on(event.name, (...args) => event.execute(...args));
			}
		}
	} catch (error) {
		throw error;
	}
}

async function clientLogin() {
	try {
		await collectCommands();
		await registerClientEventListeners();
		client.login(process.env.DISCORD_TOKEN);
	} catch (error) {
		console.log(error);
	}
}

clientLogin();