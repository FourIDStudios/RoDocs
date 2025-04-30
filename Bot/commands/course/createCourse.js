const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('create-course')
    .setDescription('Create a new course')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Course name')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('description')
        .setDescription('Course description')),
  async execute(interaction) {
    const courseName = interaction.options.getString('name');
    const description = interaction.options.getString('description') || 'No description';

    try {
      //Current BackEnd URl, Should be updated if/when changed in the future
      const response = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guildId: interaction.guildId,
          name: courseName,
          description
        })
      });

      if (!response.ok) throw new Error('Failed to create course');
      
      await interaction.reply(`Course "${courseName}" created successfully!`);
    } catch (error) {
      console.error(error);
      await interaction.reply('Error creating course: ' + error.message);
    }
  }
};
