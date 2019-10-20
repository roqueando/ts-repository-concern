export default class Resource {
    public name: String;
    public controller: any;
    public app: any;
    public actions: object;

    public base: string;
    public param: string;
    public id: string;
    public objActions: any;
    public pathname: string;

    constructor(name, controller, app) {
        this.name = name;
        this.controller = controller;
        this.app = app;
        this.base = '/';
        if(this.base[this.base.length - 1] !== '/') this.base += '/';
        this.pathname = `${this.base}${this.name}`;
        this.param = ':' + this.id;

      // index -> get
      // store -> post
      // show -> get
      // update -> put
      // delete -> delete

        this.actions = {
          index: {
            path: this.pathname,
            method: 'get',
          },
          store: {
            path: this.pathname,
            method: 'post',
          },
          show: {
            path: `${this.pathname}/:id`,
            method: 'get',
          },
          update: {
            path: `${this.pathname}/:id`,
            method: 'put',
          },
          delete: {
            path: `${this.pathname}/:id`,
            method: 'delete',
          }
         };

       for (const action in this.actions) {
         const actionMethod = this.actions[action].method;
         const actionPath = this.actions[action].path;

         this.app[actionMethod](actionPath, 
            (request, response) => this.controller[action](request, response));
       }
    }

    private get prototype(): any {
        return Object.getPrototypeOf(this.controller);
    }
}