import { FindResponseDTO } from "./FindResponseDTO";

export interface ISearchItemProps {
    data: FindResponseDTO;
    position: "first-one" | "first" | "middle" | "end";
}