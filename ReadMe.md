# Linxjs

A versatile Node.js package for simplifying Discord bot development. This package provides comprehensive handling for Discord Roles and Permisisons.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Linxjs.

```bash
npm install linxjs-handler
```

## Usage

```javascript
const { 
    CreateRole,
    setPermissions,
    setRoleHigh,
    setRoleLow,
    DeleteRole,
    AssignRole,
    RemoveRole
} = require('linxjs-handler');

// Create a new role:
const NewRole = await CreateRole(message.guild, 'My Role Name', 'My Role Color' /* Optional */);
// Note: The role color must be a hex code, e.g. #ff0000 or an valid Discord color name, e.g. Red. 
// Note: By not mentioning a name or color, the role will be created with the default values e.g. 'LinxJS' and 'White'.


// Set permissions for a role:
const permissions = {
    Administrator: true, // Example: Give administrator permissions
    KickMembers: true,
};
// Note: The permissions object must be in the format of a Discord Permissions object.
// Note: You can find a list of permissions here: https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
// Note: You can choose any permissions you want, but you must use the correct format. e.g. 'Administrator'.

// Assuming you have a 'NewRole' and 'permissions' defined.
await setPermissions(NewRole, permissions, message.guild.channels.cache);
await new Promise((resolve) => setTimeout(resolve, 3000));
// Note: The third parameter is optional, but if you want to set permissions for a specific channel, you must provide the guild's channel cache.

// Note: You can also set permissions for a specific channel:
const channel = message.guild.channels.cache.get('Channel ID');
await setPermissions(NewRole, permissions, channel);

/**
 * The following functions are still in development and may not work as expected.
 */

// Set a role's position:
await setRoleHigh(NewRole, message.guild.roles.cache);
await setRoleLow(NewRole, message.guild.roles.cache);

// Delete a role:
await DeleteRole(NewRole);

// Assign a role to a user:
await AssignRole(message.guild, message.member, NewRole);

// Remove a role from a user:
await RemoveRole(message.guild, message.member, NewRole);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Notes

This package is still in development and may not work as expected. If you find any bugs, please open an issue.
The documentation is also still in development and may not be accurate.