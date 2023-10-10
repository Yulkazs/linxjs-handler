const {
    Guild,
    Role,
    Permissions,
} = require('discord.js');

/**
 * Assign a role to a user.
 * @param {Guild} guild - The Discord.js Guild where the user and role exist.
 * @param {Role} role - The role to assign to the user.
 * @param {User} user - The user to whom the role will be assigned.
 * @returns {Promise<Role>} - A promise that resolves to the assigned role.
 */

async function AssignRole(guild, role, user) {
    try {
        // Check if the role exists.
        if (!role) {
            console.log('Role does not exist.');
        }

        // Check if the user has permission to assign the role.
        if (!role.permissions.has('MANAGE_ROLES')) {
            console.log('You do not have permission to assign this role.');
        }

        // Check if the user already has the role.
        if (user.roles.cache.has(role.id)) {
            console.log('User already has this role.');
        }

        // Assign the role to the user.
        await user.roles.add(role);
        return role;

    } catch (err) {
        console.log('Error assigning role: ', err);
        throw err;
    }
}

async function RemoveRole(guild, role, user) {
    try {
        // Check if the role exists.
        if (!role) {
            console.log('Role does not exist.');
        }

        // Check if the user has permission to remove the role.
        if (!role.permissions.has('MANAGE_ROLES')) {
            console.log('You do not have permission to remove this role.');
        }

        // Check if the user already has the role.
        if (!user.roles.cache.has(role.id)) {
            console.log('User does not have this role.');
        }

        // Remove the role from the user.
        await user.roles.remove(role);
        return role;

    } catch (err) {
        console.log('Error removing role: ', err);
        throw err;
    }
}

// Export the functions.
module.exports = {
    AssignRole,
    RemoveRole,
};