import { FindResponseDTO } from "../../types/FindResponseDTO";
import { FindWeatherResponseDTO } from "../../types/FindWeatherResponseDTO";
import { Environment } from "../../utils/Environment";
import { IOpenWeatherMapService } from "./IOpenWeatherMapService";
import axios, { AxiosResponse } from 'axios';

export class OpenWeatherMapService implements IOpenWeatherMapService {
    async findWeather(lat: number, lon: number): Promise<FindWeatherResponseDTO> {
        const response: AxiosResponse = await axios.get(Environment.baseUrl + `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Environment.apiKey}`);
        const data = response.data;

        let rainPer = response.data.rain ? response.data.rain["3h"] : 0;
        let rain = rainPer * 100;

        return {
            country: data.sys.country,
            name: data.name,
            temp: Math.round(data.main.temp - 272.15),
            feelsTemp: Math.round(data.main.feels_like - 272.15),
            humidity: data.main.humidity,
            main: data.weather[0]?.main,
            windSpeed: data.wind?.speed,
            rain: rain
        };
    }

    async find(query: string): Promise<FindResponseDTO[]> {
        const response: AxiosResponse = await axios.get(Environment.baseUrl + `/data/2.5/find?q=${query}&appid=${Environment.apiKey}`);
        const data = response.data;

        let result: FindResponseDTO[] = [];

        for (let item of data.list) {
            result.push({
                name: item.name,
                lat: item.coord.lat,
                lon: item.coord.lon
            })
        }

        return result
    }
}