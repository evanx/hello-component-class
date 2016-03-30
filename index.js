
export default class HelloComponent {

   constructor() {
   }

   async init(state, props, logger, service) {
      Object.assign(this, state);
      logger.info('hello', props);
   }

   async start() {
      this.logger.info('state ready', this.name);
   }

   async end() {
      this.logger.info('goodbye');
   }
}
