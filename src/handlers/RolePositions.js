const {
    Guild,
    Role,
} = require('discord.js');

/**
 * Move a role higher in the role hierarchy.
 * @param {Guild} guild - The Discord.js Guild where the role exists.
 * @param {Role} role - The role to move higher.
 * @returns {Promise<Role>} - A promise that resolves to the moved role.
 */

async function setRoleHigh(guild, role) {

    try {
        // Checking and setting the positions.
        const rolePosition = guild.roles.cache.map((r) => r.position);
        const currentPosition = role.position;
        const targetPosition = Math.max(...rolePosition.filter((p) => p < currentPosition));

        await role.setPosition(targetPosition);
        return role;

    } catch (err) {
        console.log('Error moving role higher: ', err);
        throw err;
    }

}

/**
 * Move a role lower in the role hierarchy.
 * @param {Guild} guild - The Discord.js Guild where the role exists.
 * @param {Role} role - The role to move lower.
 * @returns {Promise<Role>} - A promise that resolves to the moved role.
 */

async function setRoleLow(guild, role) {

    try {
        // Checking and setting the positions.
        const rolePosition = guild.roles.cache.map((r) => r.position);
        const currentPosition = role.position;
        const targetPosition = Math.min(...rolePosition.filter((p) => p > currentPosition));
    
        await role.setPosition(targetPosition);
        return role;

    } catch (error) {
        console.error('Error moving role lower:', error);
        throw error;
    }

}

// Export the functions.
module.exports = {
    setRoleHigh,
    setRoleLow,
};