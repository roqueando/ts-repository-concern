"use strict";Object.defineProperty(exports, "__esModule", {value: true});
 class Resource {
    
    
    

    constructor(name, controller, app) {
        this.name = name;
        this.controller = controller;
        this.app = app;
    }

     handle() {
        console.log(this.mapFunctions(this.controller));
    }

     mapFunctions(controller) {
        return Object.getOwnPropertyNames(controller.prototype);
    }
} exports.default = Resource;