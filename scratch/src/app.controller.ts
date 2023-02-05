import { Get } from "@nestjs/common";
import { Controller } from "@nestjs/common";

@Controller("/app")
export class AppController {
	@Get("/test")
	getRootRoute() {
		return "hi there!";
	}
}
