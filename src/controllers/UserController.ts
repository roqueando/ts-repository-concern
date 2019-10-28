import BaseController from './BaseController';
import UserRepository from '../repositories/UserRepository';
import User from '../models/User';

export default class UserController extends BaseController {
    constructor() {
        super(new UserRepository(User));
    }
}
