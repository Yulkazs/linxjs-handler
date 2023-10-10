const {
    Guild,
    Role,
} = require('discord.js');

/**
 * Delete a role from a guild.
 * @param {Guild} guild - The Discord.js Guild where the role exists.
 * @param {Role} role - The role to delete.
 * @returns {Promise<void>} - A promise that resolves once the role is deleted.
 */
async function DeleteRole(guild, role) {
    try {
        // Check the role if it exists or not.
        
        if (!role) {
            console.log('Role does not exist.');
        }

        // Check if the user has permission to delete the role.
        if (!role.permissions.has('MANAGE_ROLES')) {
            console.log('You do not have permission to delete this role.');
        }

        // Delete the role.
        await role.delete();

    } catch (error) {
        console.error('Error deleting role:', error);
        throw error;
    }
}


// Export the function.
module.exports = { DeleteRole };