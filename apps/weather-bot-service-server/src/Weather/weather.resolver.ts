import * as graphql from "@nestjs/graphql";
import { UserCityDto } from "../weather/UserCityDto";
import { WeatherService } from "./weather.service";

export class WeatherResolver {
  constructor(protected readonly service: WeatherService) {}

  @graphql.Mutation(() => String)
  async ScheduleWeatherUpdate(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ScheduleWeatherUpdate(args);
  }

  @graphql.Mutation(() => String)
  async SetUserCity(
    @graphql.Args()
    args: UserCityDto
  ): Promise<string> {
    return this.service.SetUserCity(args);
  }
}
