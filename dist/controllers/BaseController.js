"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

 class BaseController {
    

     constructor(repository) {
        this.repository = repository;
    }

    async index(response) {
        return this.repository.index(_express.Response);
    }

    async store(request, response) {
        return this.repository.store(request, response);
    }

    async show(params, response) {
        return this.repository.show(params, response);
    }

    async update(params, request, response) {
        return this.repository.update(params, request, response);
    }
    
    async delete(params, response) {
        return this.repository.delete(params, response);
    }

  } exports.default = BaseController;
