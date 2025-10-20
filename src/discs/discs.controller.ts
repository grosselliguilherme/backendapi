import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  Request,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DiscsService } from 'src/discs/discs.service';
import { CreateDiscDto } from 'src/dtos/create-discs-dto';
import { UpdateDiscDto } from 'src/dtos/update-discs-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('discs')
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class DiscsController {
  constructor(private discsService: DiscsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: CreateDiscDto, @Request() req) {
    return this.discsService.create(data, req.user.id);
  }

  @Get()
  findAll() {
    return this.discsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.discsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateDiscDto) {
    return this.discsService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.discsService.delete(id);
  }
}
