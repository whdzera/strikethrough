import { Application } from "@hotwired/stimulus";

window.Stimulus = Application.start();

import StrikethroughController from "./controllers/strikethrough_controller.js";
Stimulus.register("strikethrough", StrikethroughController);
import ThemeController from "./controllers/theme_controller.js"
Stimulus.register("theme", ThemeController);
