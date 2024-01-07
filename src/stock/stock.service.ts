import { HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { Stockdto } from "./stock-dto/stock.dto";
import { ConfigService } from "@nestjs/config";
import axios from "axios";

@Injectable()
export class stockservice {
    constructor (private config: ConfigService) {}

    serchchart(dto: Stockdto): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${dto.stockname}&apikey=${this.config.get("AlphaAPIkey")}`
                
                axios.get(url, { headers: {'User-Agent': 'axios'} })
                    .then(response => {
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(new HttpException("Error while fetching data", HttpStatus.INTERNAL_SERVER_ERROR));
                    })
                    
            } catch(erorr) {
                throw new HttpException("something went wrong!", HttpStatus.BAD_REQUEST);
            }

        })
    }
}