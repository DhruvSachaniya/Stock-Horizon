import { Controller, Get, Post } from "@nestjs/common";
import { authservice } from "./auth.service";

@Controller() 
export class authcontroller {
    constructor(private authservice: authservice) {}

    @Get("hi")
    hello() {
        return this.authservice.hello();
    }
}