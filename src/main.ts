// Import the Angular JIT compiler.
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

// Will not be bundled. Imported just to trigger rebuild on change.
import "./index.html";

// Compile and mount the root component.
platformBrowserDynamic().bootstrapModule(AppModule);
