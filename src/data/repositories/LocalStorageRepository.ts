import { FindResponseDTO } from "../../types/FindResponseDTO";
import { Environment } from "../../utils/Environment";
import { ILocalStorageRepository } from "./ILocalStorageRepository";

export class LocalStorageRepository implements ILocalStorageRepository {
    create(data: FindResponseDTO): void {
        localStorage.setItem(Environment.dataKey, JSON.stringify(data));
    }

    getData(): FindResponseDTO | null {
        let data = localStorage.getItem(Environment.dataKey);
        if (data !== null) { return JSON.parse(data) }
        else { return null }
    }


}