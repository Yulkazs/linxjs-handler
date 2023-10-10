const {
    Role,
} = require('discord.js');

/**
 * Set permissions for a role in all channels.
 * @param {Role} role - The Discord.js Role to set permissions for.
 * @param {object} permissions - The permissions to set.
 * @param {Collection<Snowflake, Channel>} channels - A collection of channels to set permissions in.
 * @returns {Promise<void>} - A promise that resolves when all permissions are set.
 */

async function setPermissions(role, permissions, channels) {

  // Overwrite permissions with the given perms by the User.
  try {

    const overwritePromises = channels.map(async (channel) => {
      await channel.permissionOverwrites.edit(role, permissions);
    });

    await Promise.all(overwritePromises);

  } catch (error) {
    console.error('Error setting permissions:', error);
    throw error;
  }

}

// Export the function.
module.exports = { setPermissions };