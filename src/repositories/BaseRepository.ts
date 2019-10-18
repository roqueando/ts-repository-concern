// lib/repositories/BaseRepository.ts

import * as _ from 'lodash';

export default abstract class BaseRepository {
    public model: any;
    public noRecordFound: String;

    constructor (model) {
        this.model = model;
        this.noRecordFound = `No records found for ${this.model.name} model`;
    }

    private notFound(response): any {
        return response.status(404).json({ msg: this.noRecordFound });
    }

    async index(response) {
        const result = await this.model.findAll();
        if(!result) {
            return this.notFound(response);
        }
        return response.json({ data: result });
    } 

    async store(request, response){
        const obj = new this.model();
        _.forEach(request.body, (value, field) => {
            obj[field] = value;
        });

        await obj.save();

        return response.status(201).json({
            msg: `Resource was created successfuly`,
            data: obj
        });
    }

    async show(params, response){
        const obj = await this.model.findByPk(params.id);
        if(!obj) {
            return this.notFound(response);
        }

        return response.json({ data: obj });
    }

    async update(params, request, response) {
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
    }

    async delete(params, response){
        const obj = await this.model.findByPk(params.id);
        if(!obj) {
            return this.notFound(response);
        }

        await obj.delete();

        return response.status(201).json({
            msg: "Resource was deleted succsessfully",
            data: obj
        });
    }
}