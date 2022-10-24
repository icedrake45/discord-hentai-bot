import { Events } from 'discord.js';

/**
 * Emitted when an interaction is created.
 * https://discord.com/developers/docs/interactions/receiving-and-responding
 */
export const name = Events.InteractionCreate;
export async function execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

        // Check to see if valid command
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
};