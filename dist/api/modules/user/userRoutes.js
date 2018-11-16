"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userController_1 = require("./userController");
var UserCtrl;
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        UserCtrl = new userController_1.default();
    }
    UserRoutes.prototype.index = function (req, res) {
        return UserCtrl.getAll(req, res);
    };
    UserRoutes.prototype.create = function (req, res) {
        return UserCtrl.create(req, res);
    };
    UserRoutes.prototype.findOne = function (req, res) {
        return UserCtrl.getById(req, res);
    };
    UserRoutes.prototype.update = function (req, res) {
        return UserCtrl.update(req, res);
    };
    UserRoutes.prototype.delete = function (req, res) {
        return UserCtrl.delete(req, res);
    };
    return UserRoutes;
}());
exports.default = UserRoutes;
