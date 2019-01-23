// module.exports = {
//     User: require("./userInfo")
// };

//collect and export all of your models together here

module.exports = {
    UserInfo: require("./userInfo"),
    User: require("./User"),
    Note: require("./Note")
};
