import BaseRepository from './BaseRepository';
import { Request, Response } from 'express';

export default class UserRepository extends BaseRepository {
    constructor(model) {
        super(model);
    }

    async indexLatest(response: Response): Promise<Response> {
    	try {
    		const result = await this.model.findAll({
    			orderBy: [['createdAt', 'DESC']],
    			limit: 1
    		});
            if(!result) {
                return this.notFound(response);
            }
            return response.json({ data: result });

    	} catch (error) {
    		return this.handleError(400, error, response);
    	}
    }
}
