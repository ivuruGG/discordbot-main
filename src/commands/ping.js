const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('ボットの応答速度を確認します！'),
    async execute(interaction, args, pool) {
        const startTime = Date.now();
        await interaction.reply('🏓 Pong!');
        const endTime = Date.now();
        await interaction.editReply(`🏓 Pong! 応答速度: ${endTime - startTime}ms`);
    },
};
