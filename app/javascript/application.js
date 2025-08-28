import { Application } from "@hotwired/stimulus";

window.Stimulus = Application.start();

import StrikethroughController from "./controllers/strikethrough_controller.js";
Stimulus.register("strikethrough", StrikethroughController);
