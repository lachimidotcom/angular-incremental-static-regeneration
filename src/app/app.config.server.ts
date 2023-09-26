import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideISR } from '@rx-angular/isr/server'; // 👈 Import the provider function

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideISR() // 👈 Register the provider
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);