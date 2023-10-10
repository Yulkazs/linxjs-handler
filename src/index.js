const { CreateRole } = require('./handlers/CreateRole');
const { DeleteRole } = require('./handlers/DeleteRole');
const { setPermissions } = require('./handlers/Permissions');
const { setRoleHigh, setRoleLow } = require('./handlers/RolePositions');
const { AssignRole, RemoveRole } = require('./handlers/RoleAssignment');


module.exports = {
    CreateRole,
    setPermissions,
    setRoleHigh,
    setRoleLow,
    DeleteRole,
    AssignRole,
    RemoveRole,
};