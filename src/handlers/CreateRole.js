const {
    Guild,
    Role,
    ColorResolvable,
} = require('discord.js');

/**
 * Create a new role in a guild.
 * @param {Guild} guild - The Discord.js Guild where the role will be created.
 * @param { string } name - The name of the role.
 * @param { ColorResolvable } color - The color of the role.
 * @returns {Promise<Role>} - A promise that resolves to the created role.
 */
async function CreateRole(guild, roleName = 'LinxJS', roleColor = 'White') {

  try {
    //Check validity of guild object.

    if (!(guild instanceof Guild)) {
      throw new Error('Invalid guild object.');
    }

    /**
     * Check validity of role name and color.
     * If no name or color is provided, use default values.
     * If a name or color is provided, but is not a string or ColorResolvable, throw an error.
     * If a name or color is provided, but is an empty string, throw an error.
     * If a name or color is provided, but is longer than 100 characters, throw an error.
     * If a name or color is provided, but is not a valid color, throw an error.
     */
    
    if(!roleName) {
      throw new Error('Role name is required.');
    }

    if(!roleColor) {
      throw new Error('Role color is required.');
    }

    if(typeof roleName !== 'string') {
      throw new Error('Role name must be a string.');
    }

    if(typeof roleColor !== 'string') {
      throw new Error('Role color must be a string.');
    }

    if(roleName.length > 100) {
      throw new Error('Role name must be 100 characters or less.');
    }

    if(roleColor.length > 100) {
      throw new Error('Role color must be 100 characters or less.');
    }

    if(roleName === '') {
      throw new Error('Role name must not be empty.');
    }

    if(roleColor === '') {
      throw new Error('Role color must not be empty.');
    }

    if(roleColor !== 'Default' && !roleColor.startsWith('#') && !roleColor.startsWith('0x')) {
      throw new Error('Role color must be a valid color.');
    }

    //Create the role.
    
    try {
      const role = await guild.roles.create({
          name: roleName,
          color: roleColor,
      });

      return role;
      
    } catch(err) {
      console.error('Error creating role:', err);
      throw err;
    }

  } catch(err) {
    console.error('Error creating role:', err);
    throw err;
  }

}

// Export the function.
module.exports = { CreateRole };