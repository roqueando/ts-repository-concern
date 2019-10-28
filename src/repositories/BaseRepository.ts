// lib/repositories/BaseRepository.ts

import * as _ from 'lodash';
import { Request, Response } from 'express';

export default abstract class BaseRepository {
    public model: any;
    public noRecordFound: String;

    constructor (model) {
        this.model = model;
        this.noRecordFound = `No records found for ${this.model.name} model`;
    }

    protected notFound(response): any {
        return response.status(404).json({ msg: this.noRecordFound });
    }

    /**
     * Error handler to return some type, 
     * message and the correctly validator
     * @param  {Number} statusCode HTTP status code
     * @param  {Error} error       Object error
     * @param  {Object} response   HTTP response JSON object
     * @return {Object}
     */
    protected handleError(statusCode, error, response): any {
        const errorName: String = error.name;
        const messages = error.errors.map(err => {
            return {
                message: err.message,
                type: err.type,
                field: err.path,
                value: err.value
            }
        });

        return response.status(statusCode).send({
            Error: errorName,
            messages
        });
    }

    /**
     * Return all registers of that resource
     * @param {Object} response HTTP response object
     * @returns {Object} response HTTP response object
     */
    async index(response: Response): Promise<Response> {
        try {
            const result = await this.model.findAll();
            if(!result) {
                return this.notFound(response);
            }
            return response.json({ data: result });
        } catch (error) {
            return this.handleError(400, error, response);
        }
       
    } 

    /**
     * Store the resource in the database
     * @param {Object} request  HTTP request object
     * @param {Object} response HTTP response object
     */
    async store(request: Request, response: Response): Promise<Response>{
        try {
            const obj = new this.model();
            _.forEach(request.body, (value, field) => {
                obj[field] = value;
            });

            await obj.save();

            return response.status(201).json({
                msg: `Resource was created successfuly`,
                data: obj
            });
        }catch(error) {
            return this.handleError(400, error, response);
        }
        
    }

    /**
     * Show a detailed resource
     * @param {Object} params   HTTP GET params object
     * @param {Object} response HTTP response object
     */
    async show(params: any, response: Response): Promise<Response>{
        try {
            const obj = await this.model.findByPk(params.id);
            if(!obj) {
                return this.notFound(response);
            }

            return response.json({ data: obj });
        }catch (error) {
            return this.handleError(400, error, response);
        }
        
    }

    /**
     * Update a resource on database
     * @param {Object} params   HTTP GET params object
     * @param {Object} request  HTTP request object
     * @param {Object} response HTTP response object
     */
    async update(params: any, request: Request, response: Response): Promise<Response> {
        try {
            const obj = await this.model.findByPk(params.id);

            if(!obj) {
                return this.notFound(response);
            }

            _.forEach(request.body, (value, field) => {
                obj[field] = value;
            });

            await obj.save();

            return response.status(201).json({
                msg: "Resource was updated successfully",
                data: obj
            });
        } catch(error) {
            return this.handleError(400, error, response);
        }
       
    }

    /**
     * Delete a resource from database
     * @param {Object} params   HTTP GET params object
     * @param {Object} response HTTP response object
     */
    async delete(params: any, response: Response): Promise<Response>{
        try {
            const obj = await this.model.findByPk(params.id);
            if(!obj) {
                return this.notFound(response);
            }

            await obj.delete();

            return response.status(201).json({
                msg: "Resource was deleted succsessfully",
                data: obj
            });
        } catch(error) {
            return this.handleError(400, error, response);
        }
       
    }
}