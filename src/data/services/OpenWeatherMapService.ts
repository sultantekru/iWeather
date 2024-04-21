import { FindResponseDTO } from "../../types/FindResponseDTO";
import { FindWeatherResponseDTO } from "../../types/FindWeatherResponseDTO";
import { FindWeeklyWeatherResponseDTO } from "../../types/FindWeeklyWeatherResponseDTO";
import { Environment } from "../../utils/Environment";
import { IOpenWeatherMapService } from "./IOpenWeatherMapService";
import axios, { AxiosResponse } from 'axios';

export class OpenWeatherMapService implements IOpenWeatherMapService {
    async findWeather(lat: number, lon: number): Promise<FindWeatherResponseDTO> {
        const response: AxiosResponse = await axios.get(Environment.openWeatherBaseUrl + `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Environment.openWeatherApiKey}`);
        const data = response.data;

        let rainPer = response.data.rain ? response.data.rain["3h"] : 0;
        let rain = rainPer * 100;

        return {
            country: data.sys.country,
            name: data.name,
            temp: Math.round(data.main.temp - 273.15),
            feelsTemp: Math.round(data.main.feels_like - 273.15),
            humidity: data.main.humidity,
            main: data.weather[0]?.main,
            windSpeed: data.wind?.speed,
            rain: rain
        };
    }

    async find(query: string): Promise<FindResponseDTO[]> {
        const response: AxiosResponse = await axios.get(Environment.openWeatherBaseUrl + `/data/2.5/find?q=${query}&appid=${Environment.openWeatherApiKey}`);
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

    async findWeeklyWeather(name: string): Promise<FindWeeklyWeatherResponseDTO[]> {
        const response: AxiosResponse = await axios.get(Environment.collectApiBaseUrl + `/weather/getWeather?data.lang=en&data.city=${name}`, {
            headers: {
                'Authorization': Environment.collectApiApiKey
            }
        });
        const data = response.data;

        let resultList: FindWeeklyWeatherResponseDTO[] = [];

        if (data.result) {
            data.result.forEach((element:any) => {
                if(resultList.length < 5) resultList.push({
                    day: element.day,
                    status: element.status,
                    temp: Math.round(element.degree),
                    night: Math.round(element.night)
                })
            });
        }
        return resultList
    }
}