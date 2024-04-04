import { IService } from "../../core/interfaces/IService";
import { FindResponseDTO } from "../../types/FindResponseDTO";
import { FindWeatherResponseDTO } from "../../types/FindWeatherResponseDTO";

export interface IOpenWeatherMapService extends IService {
    find(query: string): Promise<FindResponseDTO[]>;

    findWeather(lat: number, lon: number): Promise<FindWeatherResponseDTO>;
}