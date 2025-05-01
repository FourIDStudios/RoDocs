
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


//Setup DotEnv
require('dotenv').config()

// Utility Functions
const FetchCommands = () => {
    const foldersPath = path.join(__dirname, 'commands');
    const commandFolders = fs.readdirSync(foldersPath);

    for (const folder of commandFolders) {
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            // Set a new item in the Collection with the key as the command name and the value as the exported module
            if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command);
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }
    }
}

const RegisterEvents = () => {
    const eventsPath = path.join(__dirname, 'events');
    const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const filePath = path.join(eventsPath, file);
        const event = require(filePath);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
}

//Collections
client.commands = new Collection();
client.cooldowns = new Collection();

 // Dynamically Fetch Commands & Register Events
FetchCommands()
RegisterEvents()


// Log in to Discord with your client's token
client.login(process.env.BOT_TOKEN);

// Setup Event Listener
client.on(Events.InteractionCreate, async interaction => {
    //Ensure we're listening just to slash commands
	if (!interaction.isChatInputCommand()) return;

    //Fetch command from client
	const command = interaction.client.commands.get(interaction.commandName);

    //Ensure a valid command is found
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

    //Check For Cooldowns
    const { cooldowns } = interaction.client;
    const now = Date.now();
    const defaultCooldownDuration = 3;
    const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1_000;

    //Check Cooldowns for timestamps table related to this specific command, if it doens't exist create one
    let timestamps = cooldowns.get(command.data.name);
    if (!timestamps) {
        timestamps = new Collection();
        cooldowns.set(command.data.name, timestamps);
    }
    if (timestamps.has(interaction.user.id)) {
        const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

        if (now < expirationTime) {
            const expiredTimestamp = Math.round(expirationTime / 1_000);
            return interaction.reply({ content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, flags: MessageFlags.Ephemeral });
        }
    }
    
    //Attempt to execute command, handle errors
	try {
		await command.execute(interaction);
        timestamps.set(interaction.user.id, now);
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		}
	}
});

