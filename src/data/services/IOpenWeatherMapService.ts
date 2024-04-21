import { IService } from "../../core/interfaces/IService";
import { FindResponseDTO } from "../../types/FindResponseDTO";
import { FindWeatherResponseDTO } from "../../types/FindWeatherResponseDTO";
import { FindWeeklyWeatherResponseDTO } from "../../types/FindWeeklyWeatherResponseDTO";

export interface IOpenWeatherMapService extends IService {
    find(query: string): Promise<FindResponseDTO[]>;

    findWeather(lat: number, lon: number): Promise<FindWeatherResponseDTO>;

    findWeeklyWeather(name: string): Promise<FindWeeklyWeatherResponseDTO[]>;
}