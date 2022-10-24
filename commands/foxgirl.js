import { SlashCommandBuilder } from 'discord.js';
import hmfull from 'hmfull';

/**
 * https://www.npmjs.com/package/hmfull
 */
export const data = new SlashCommandBuilder()
                    .setName('foxgirl')
                    .setDescription('SFW - Fox Girls');
export async function execute(interaction) {
    const foxgirl = await hmfull.Nekos.sfw.foxgirl();
    await interaction.reply(foxgirl.url);
};