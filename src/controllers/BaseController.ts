import { Request, Response, RequestParamHandler } from 'express';

export default abstract class BaseController {
    public repository: any;

    constructor(repository) {
        this.repository = repository;
    }

    public index = async (response: Response): Promise<any> => {
        try {
            return this.repository.index(response);
        }catch(error) {
            throw new Error(error.message);
        }
    }

    public store = async (request: Request, response: Response): Promise<any> => {
        return this.repository.store(request, response);
    }

    public show = async (params: RequestParamHandler, response: Response): Promise<any> => {
        return this.repository.show(params, response);
    }

    public update = async (params: RequestParamHandler, request: Request, response: Response): Promise<any> => {
        return this.repository.update(params, request, response);
    }
    
    public delete = async (params: RequestParamHandler, response: Response): Promise<any> => {
        return this.repository.delete(params, response);
    }

  }
