import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run module-federation-lab:serve:development',
        production: 'nx run module-federation-lab:serve:production',
      },
      ciWebServerCommand: 'nx run module-federation-lab:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
