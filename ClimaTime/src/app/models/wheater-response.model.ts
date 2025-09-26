export interface WeatherResponse {
    weather: Weather[];
    main: Main;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main{
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    
}