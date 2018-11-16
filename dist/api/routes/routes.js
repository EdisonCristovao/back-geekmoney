"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userRoutes_1 = require("../modules/user/userRoutes");
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.router = new userRoutes_1.default();
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        // app.route('/')
        //     .get(( req: Request, res: Response) => 
        //         res.send("HELLO WORLD!"))
        // app.route('/ola/:nome')
        //     .get(( req: Request, res: Response) => 
        //         res.send(`Ola ---> ${req.params.nome}`))
        app.route('/api/users/').get(this.router.index);
        app.route('/api/users/').post(this.router.create);
        app.route('/api/users/:id').get(this.router.findOne);
        app.route('/api/users/:id').put(this.router.update);
        app.route('/api/users/:id').delete(this.router.delete);
    };
    return Routes;
}());
exports.default = Routes;
