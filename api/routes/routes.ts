import { Application, Request, Response } from 'express';

import UserRoutes from '../modules/user/userRoutes';
class Routes {

    private router: UserRoutes;

    constructor(app: Application) {
        this.router = new UserRoutes();
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {
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

    }
}

export default Routes;