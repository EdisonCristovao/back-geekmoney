import { Request, Response } from 'express';

class UserController {

    constructor() {}

    getAll(req: Request, res: Response){
        res.status(200).json({
            message: 'ok'
        });
    };

    create(req: Request, res: Response){
        res.status(200).json({
            message: 'ok'
        });
    };

    getById(req: Request, res: Response){
        res.status(200).json({
            message: 'ok'
        });
    };

    update(req: Request, res: Response){
        res.status(200).json({
            message: 'ok'
        });
    };

    delete(req: Request, res: Response){
        res.status(200).json({
            message: 'ok'
        });
    };
}

export default UserController;