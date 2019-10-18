import _ from 'lodash';

export default class Resource {
    public name: String;
    public controller: any;
    public app: any;
    public actions: Array<string>;

    public base: string;
    public param: string;
    public id: string;
    public objActions: any;

    constructor(name, controller, app) {
        this.name = name;
        this.controller = controller;
        this.app = app;
        this.base = '/';
        this.actions = [
            'index', // GET /
            'store', // POST / 
            'show', // GET /:id
            'update', // PUT /:id
            'delete' // DELETE /:id
        ];
        if(this.base[this.base.length - 1] !== '/') this.base += '/';
        this.param = ':' + this.id;
        this.actions.forEach(action => {
            if(this.prototype[action]) this.mapFunctions(action, this.prototype[action]);
        });
    }

    private get prototype(): any {
        return Object.getPrototypeOf(this.controller);
    }

    private mapFunctions(key, fn): void {
        switch (key) {
            case 'index':
              this.app.get('/', fn);
              break;
            case 'store':
              this.app.post('/', fn);
              break;
            case 'show':
              this.app.get('/:id', fn);
              break;
            case 'update':
              this.app.put('/:id', fn);
              break;
            case 'delete':
              this.app.delete('/:id', fn);
              break;
          }
    }
}