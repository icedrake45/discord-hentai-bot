# discord-hentai-bot

Utilizes the WAIFU.IM api to send images/gifs using slash commands in discord.

### Project Layout

    .
    ├── commands                        # Commands that the bot uses
    ├── events                          # Registered event listeners
    ├── deploy-commands.js              # Standalone script that should be used when adding, removing, or updating commands
    ├── index.js                        # Entry point for the application
    ├── package.json                    # Application metadata including dependencies
    └── README.md

# Getting Started

Navigate to the project directory and use `npm install` to install project dependencies.

Create and edit a `.env` file and add the following variables: `APP_ID, GUILD_ID, DISCORD_TOKEN, and PUBLIC_KEY`. 
    
Follow the Discord 'Getting Started' guide for finding these values and getting the app running: https://discord.com/developers/docs/getting-started

# Permissions

If you want to restrict usage to certain channels/roles once the app is running, follow these steps in the discord interface:

    1. Right click your server.
    2. Go to Server Settings -> Integrations.
    3. Click on your bot.
    4. Click Add Roles or Members, or Channels depending on the restrictions intended. You can also restrict usage on a commands basis by clicking on the command.
    5. Once added, click X to restrict their access to the command.

**Important:** Make sure to the view the server as a non-admin role by either switching accounts or acting as a different role in order to test these new permissions - otherwise it won't work. To view as another role, go to Server Settings -> Roles, then select a non-admin role and select View Server As Role.