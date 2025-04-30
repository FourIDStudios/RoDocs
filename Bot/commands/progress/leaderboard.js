const embed = new EmbedBuilder()
  .setTitle('Course Leaderboard')
  .addFields(
    topStudents.map((user, index) => ({
      name: `${index+1}. ${user.username}`,
      value: `Level ${user.level} | ${user.xp} XP`
    }))
  );