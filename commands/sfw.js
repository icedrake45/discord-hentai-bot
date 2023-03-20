import { SlashCommandBuilder } from 'discord.js';
import fetch from 'node-fetch';

export const data = new SlashCommandBuilder()
                    .setName('sfw')
                    .setDescription('SFW - Safe for work content')
                    .addStringOption(option => 
                        option.setName('content')
                            .setDescription('Select content to view')
                            .setRequired(true)
                            .addChoices(
                                { name: 'Maid', value: 'maid' },
                                { name: 'Waifu', value: 'waifu' },
                                { name: 'Marin-Kitagawa', value: 'marin_kitagawa' },
                                { name: 'Mori-Calliope', value: 'mori_calliope' },
                                { name: 'Raiden-Shogun', value: 'raiden_shogun' },
                                { name: 'Oppai', value: 'oppai' },
                                { name: 'Selfies', value: 'selfies' },
                                { name: 'Uniform', value: 'uniform' }
                            ));

export async function execute (interaction) {
    try {
        //Retrieve the user's choice and run the associated function from 'choiceActions'
        const choice = interaction.options.getString('content');
        const response = await fetch(choiceActions[choice]);
        const content = await response.json();

        await interaction.reply(content.images[0].url);
    } catch (error) {
        throw error;
    }
};

const choiceActions = {
    maid: 'https://api.waifu.im/search/?included_tags=maid',
    waifu: 'https://api.waifu.im/search/?included_tags=waifu',
    marin_kitagawa: 'https://api.waifu.im/search/?included_tags=marin-kitagawa',
    mori_calliope: 'https://api.waifu.im/search/?included_tags=mori-calliope',
    raiden_shogun: 'https://api.waifu.im/search/?included_tags=raiden-shogun',
    oppai: 'https://api.waifu.im/search/?included_tags=oppai',
    selfies: 'https://api.waifu.im/search/?included_tags=selfies',
    uniform: 'https://api.waifu.im/search/?included_tags=uniform'
};