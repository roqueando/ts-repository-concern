// lib/config/routes.ts

import { Request, Response } from 'express';
import Resource from './Resource';
import UserController from '../controllers/UserController';

export default class Routes {

    public userController: UserController = new UserController();
    public userResource: any;

    public routes(app): void {
        this.userResource = new Resource('users', this.userController, app);
          
    }
}