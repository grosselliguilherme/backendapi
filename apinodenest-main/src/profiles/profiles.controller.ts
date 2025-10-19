import { Controller, Post, Get, Param, Body, ParseIntPipe, Put } from '@nestjs/common';
import { CreateProfileDto } from 'src/dtos/create-profile-dto';
import { UpdateProfileDto } from 'src/dtos/update-profile-dto';
import { ProfilesRepository } from './repository/profiles.repository';
import { GetProfileDto } from 'src/dtos/get-profile-dto';

@Controller('profiles')
export class ProfilesController {
    constructor( //aqui injeção de dependência
        private readonly repository: ProfilesRepository
    ) { }

    @Post()
    create(@Body() dto: CreateProfileDto) {
        return this.repository.create(dto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<GetProfileDto> {
        return this.repository.findOne(id);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProfileDto) {
        return this.repository.update(id, dto);
    }
}

