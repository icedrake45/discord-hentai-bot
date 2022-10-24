import { Events } from 'discord.js';

/**
 * Emitted when the client becomes ready to start working.
 */
export const name = Events.ClientReady;
export const once = true;
export function execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`)
};