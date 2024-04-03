import { IRepository } from "../../core/interfaces/IRepository";
import { FindResponseDTO } from "../../types/FindResponseDTO";

export interface ILocalStorageRepository extends IRepository {
    create(data: FindResponseDTO): void;

    getData(): FindResponseDTO | null;
}