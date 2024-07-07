import { Injectable } from "@nestjs/common";
import { UserCityDto } from "../weather/UserCityDto";

@Injectable()
export class WeatherService {
  constructor() {}
  async ScheduleWeatherUpdate(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SetUserCity(args: UserCityDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
