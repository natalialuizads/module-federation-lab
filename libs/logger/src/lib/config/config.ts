import { MicroFront } from '../microfront/microfront';

export class Config {

  #microfront = MicroFront.getInstance();

  init(name: string) {
    console.log(`Config initialized with name: ${name}`);
  }

  initMicrofrontend(name: string) {
    this.#microfront.name = name;
  }
}

export const config = new Config();
