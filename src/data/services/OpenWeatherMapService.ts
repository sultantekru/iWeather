import { FindResponseDTO } from "../../types/open-weather-map-service/FindResponseDTO";
import { Environment } from "../../utils/Environment";
import { IOpenWeatherMapService } from "./IOpenWeatherMapService";
import axios, { AxiosResponse } from 'axios';

export class OpenWeatherMapService implements IOpenWeatherMapService {
    async find(query: string): Promise<FindResponseDTO[]> {
        const response: AxiosResponse = await axios.get(Environment.baseUrl + `/data/2.5/find?q=${query}&appid=${Environment.apiKey}`);
        const data = response.data;

        let result: FindResponseDTO[] = [];
        
        for(let item of data.list){
            result.push({
                name: item.name,
                lat: item.coord.lat,
                lon: item.coord.lon
            })
        }

        return result
    }
}