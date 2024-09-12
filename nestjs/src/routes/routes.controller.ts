import { Controller, Get, Query } from '@nestjs/common';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  findAll(
    @Query('price') price: number,
    @Query('category') category: string,
    @Query('float') float: string,
    @Query('search') search: string
  ) {
    return this.routesService.findAll({ price, category, float, search });
  }
}
