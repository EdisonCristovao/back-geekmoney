import { Request, Response } from 'express';
import UserController from './userController'
let UserCtrl;

class UserRoutes {
    
    constructor(){
        UserCtrl = new UserController();
    }

    index(req: Request, res: Response){
        return UserCtrl.getAll(req, res);
    }
    create(req: Request, res: Response){
        return UserCtrl.create(req, res);
    }
    findOne(req: Request, res: Response){
        return UserCtrl.getById(req, res);
    }
    update(req: Request, res: Response){
        return UserCtrl.update(req, res);
    }
    delete(req: Request, res: Response){
        return UserCtrl.delete(req, res);
    }
}

export default UserRoutes;