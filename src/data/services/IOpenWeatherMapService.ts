import { IService } from "../../core/interfaces/IService";
import { FindResponseDTO } from "../../types/FindResponseDTO";

export interface IOpenWeatherMapService extends IService{
    find(query: string): Promise<FindResponseDTO[]>;
}