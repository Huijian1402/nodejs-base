const User = require('../../models/user.model');
const Permission = require('../../models/permission.model')
const bcrypt = require('bcrypt');


exports.showUserManager = (req, res) => {
    User.showAll((err, users) => {
        users.forEach(item => {
            if (item.role == "1") {



            }
            console.log(item)
        });
        res.render('admin/manageUser', {
            users: users,
        });
    })
}

exports.viewUser = (req, res) => {
    User.findByEmail(req.params.email, (err, user) => {
        res.render('admin/viewUser', {
            targetUser: user,
        });
    })
}

exports.editUser = (req, res) => {
    User.findByEmail(req.params.email, (err, user) => {
        res.render('admin/editUser', {
            targetUser: user,
        });
    })
}
exports.deleteUser = (req, res) => {
    User.deleteUser(req.params.email, (err, user) => {
        res.render('admin/deleteUser', {
            targetUser: user,
        });
    })
}

