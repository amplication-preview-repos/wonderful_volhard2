import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WeatherService } from "./weather.service";
import { UserCityDto } from "../weather/UserCityDto";

@swagger.ApiTags("weathers")
@common.Controller("weathers")
export class WeatherController {
  constructor(protected readonly service: WeatherService) {}

  @common.Post("/scheduleWeatherUpdate")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScheduleWeatherUpdate(
    @common.Body()
    body: UserCityDto
  ): Promise<string> {
        return this.service.ScheduleWeatherUpdate(body);
      }

  @common.Post("/setUserCity")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SetUserCity(
    @common.Body()
    body: UserCityDto
  ): Promise<string> {
        return this.service.SetUserCity(body);
      }
}
