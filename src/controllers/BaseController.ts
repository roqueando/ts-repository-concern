import { Request, Response } from 'express';

export default abstract class BaseController {
    public repository: any;

    constructor(repository) {
        this.repository = repository;
    }

    public index = async (request: Request, response: Response): Promise<any> => {
        return this.repository.index(response);
    }

    public store = async (request: Request, response: Response): Promise<any> => {
        return this.repository.store(request, response);
    }

    public show = async (request: Request, response: Response): Promise<any> => {
        return this.repository.show(request.params, response);
    }

    public update = async (request: Request, response: Response): Promise<any> => {
        return this.repository.update(request.params, request, response);
    }
    
    public delete = async (request: Request, response: Response): Promise<any> => {
        return this.repository.delete(request.params, response);
    }

  }
