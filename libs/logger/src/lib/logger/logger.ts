import { MicroFront } from '../microfront/microfront';

export class Logger {

  #microfront = MicroFront.getInstance();

  info(message: string){
    if(this.#microfront.name){
      console.info(`${this.#microfront.name} - ${message}`);
      return
    }

    console.info(message);
  }

  error(message: string){
    if(this.#microfront.name){
      console.error(`${this.#microfront.name} - ${message}`);
      return
    }
    console.error(message);
  }

  warn(message: string){
    if(this.#microfront.name){
      console.warn(`${this.#microfront.name} - ${message}`);
      return
    }
    console.warn(message);
  }

  debug(message: string){
    if(this.#microfront.name){
      console.debug(`${this.#microfront.name} - ${message}`);
      return
    }
    console.debug(message);
  }

  log(message: string){
    if(this.#microfront.name){
      console.log(`${this.#microfront.name} - ${message}`);
      return
    }
    console.log(message);
  }

}

export const logger = new Logger();
