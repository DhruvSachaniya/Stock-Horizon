import { Body, Controller, Get, Param, Req } from "@nestjs/common";
import { stockservice } from "./stock.service";
import { Stockdto } from "./stock-dto/stock.dto";

@Controller("stock")
export class stockcontroller {
    constructor(private stockservice: stockservice) {}

    @Get("/stockname")
    async serchchart(@Body() dto: Stockdto) {
        try{
            const data = this.stockservice.serchchart(dto);
            return data;
        } catch(erorr) {
            console.error(erorr);
            throw erorr;
        }
    }

    @Get("intraday/:stockname")
    stockchart(@Param() stockname: string) {
        return "stockname chart"
    }
}