export interface FindWeatherResponseDTO {
    name: string;
    country: string;
    temp: number;
    feelsTemp: number;
    main: string;
    rain: number;
    windSpeed: number;
    humidity: number
}