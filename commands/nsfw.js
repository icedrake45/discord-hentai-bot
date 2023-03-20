import { SlashCommandBuilder } from 'discord.js';
import fetch from 'node-fetch'

export const data = new SlashCommandBuilder()
                    .setName('nsfw')
                    .setDescription('NSFW - Not safe for work content')
                    .addStringOption(option =>
                        option.setName('content')
                            .setDescription('Select content to view')
                            .setRequired(true)
                            .addChoices(
                                { name: 'Ass', value: 'ass' },
                                { name: 'Hentai', value: 'hentai' },
                                { name: 'Milf', value: 'milf' },
                                { name: 'Oral', value: 'oral' },
                                { name: 'Paizuri', value: 'paizuri' },
                                { name: 'Ecchi', value: 'ecchi' },
                                { name: 'Ero', value: 'ero' }
                            ));

export async function execute (interaction) {
    try {
        //Retrieve the user's choice and fetch the associated url from 'choiceActions'
        const choice = interaction.options.getString('content');
        const response = await fetch(choiceActions[choice]);
        const content = await response.json();

        await interaction.reply(content.images[0].url);
    } catch (error) {
        throw error;
    }
};

const choiceActions = {
    ass: 'https://api.waifu.im/search/?included_tags=ass',
    hentai: 'https://api.waifu.im/search/?included_tags=hentai',
    milf: 'https://api.waifu.im/search/?included_tags=milf',
    oral: 'https://api.waifu.im/search/?included_tags=oral',
    paizuri: 'https://api.waifu.im/search/?included_tags=paizuri',
    ecchi: 'https://api.waifu.im/search/?included_tags=ecchi',
    ero: 'https://api.waifu.im/search/?included_tags=ero'
};