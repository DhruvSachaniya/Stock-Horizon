import { Injectable } from "@nestjs/common";

@Injectable()
export class authservice {
    constructor() {}

    hello() {
        return "hello world"
    }
}