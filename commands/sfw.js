import { SlashCommandBuilder } from 'discord.js';
import hmfull from 'hmfull';

export const data = new SlashCommandBuilder()
                    .setName('sfw')
                    .setDescription('SFW - Safe for work content')
                    .addStringOption(option => 
                        option.setName('content')
                            .setDescription('Select content to view')
                            .setRequired(true)
                            .addChoices(
                                { name: 'Wink! 😉', value: 'wink' },
                                { name: 'I want some tea! ☕', value: 'tea' },
                                { name: 'ONE PUUUUNNNNCHHH', value: 'punch' },
                                { name: 'Poke...', value: 'poke' },
                                { name: 'Head Pats!', value: 'pat' },
                                { name: 'Kisses', value: 'kiss' },
                                { name: 'Blushing Girls', value: 'blush' },
                                { name: 'Smug Girls', value: 'smug' },
                                { name: 'Fox Girls', value: 'foxgirl' }
                            ));

export async function execute (interaction) {
    try {
        //Retrieve the user's choice and run the associated function from 'choiceActions'
        const choice = interaction.options.getString('content');
        const content = await choiceActions[choice]();

        await interaction.reply(content.url);
    } catch (error) {
        throw error;
    }
};

const choiceActions = {
    wink: hmfull.HMtai.sfw.wink,
    tea: hmfull.HMtai.sfw.tea,
    punch: hmfull.HMtai.sfw.punch,
    poke: hmfull.HMtai.sfw.poke,
    pat: hmfull.HMtai.sfw.pat,
    kiss: hmfull.HMtai.sfw.kiss,
    blush: hmfull.HMtai.sfw.blush,
    smug: hmfull.HMtai.sfw.smug,
    foxgirl: hmfull.Nekos.sfw.foxgirl
};