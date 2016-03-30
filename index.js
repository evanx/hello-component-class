
export default class {

   constructor() {
   }

   async init(state) {
      Object.assign(this, state);
      this.logger.info('hello', this.name, Object.keys(this.props));
   }

   async start() {
      this.logger.info('state ready', this.name);
   }

   async end() {
      this.logger.info('goodbye');
   }
}
