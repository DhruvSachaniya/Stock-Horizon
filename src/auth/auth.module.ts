import { Module } from "@nestjs/common";
import { authservice } from "./auth.service";
import { authcontroller } from "./auth.controller";

@Module({
    providers: [authservice],
    controllers: [authcontroller]
})

export class authmodule {}