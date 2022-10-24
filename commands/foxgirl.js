import { SlashCommandBuilder } from 'discord.js';
import akaneko from 'akaneko';

export const data = new SlashCommandBuilder()
                    .setName('foxgirl')
                    .setDescription('SFW - Fox Girls');
export async function execute(interaction) {
    await interaction.reply(akaneko.foxgirl());
};