"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }Object.defineProperty(exports, "__esModule", {value: true});// lib/repositories/BaseRepository.ts

var _lodash = require('lodash'); var _ = _interopRequireWildcard(_lodash);

 class BaseRepository {
    
    

    constructor (model) {
        this.model = model;
        this.noRecordFound = `No records found for ${this.model} model`;
    }

     notFound(response) {
        return response.status(404).json({ msg: this.noRecordFound });
    }

    async index(response) {
        const result = await this.model.findAll();
        if(!result) {
            return this.notFound(response);
        }
        return response.json({ data: result });
    } 

    async store(request, response) {
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

    async show(params, response) {
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

    async delete(params, response) {
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
} exports.default = BaseRepository;