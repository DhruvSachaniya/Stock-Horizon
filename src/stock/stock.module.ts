import { Module } from "@nestjs/common";
import { stockcontroller } from "./stock.controller";
import { stockservice } from "./stock.service";

@Module({
    controllers: [stockcontroller],
    providers: [stockservice]
})

export class stockmodule {}