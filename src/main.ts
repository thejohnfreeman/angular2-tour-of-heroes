// Import the Angular JIT compiler.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Compile and mount the root component.
platformBrowserDynamic().bootstrapModule(AppModule);
