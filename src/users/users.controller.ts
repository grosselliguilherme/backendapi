import {
    Body, Controller, Delete, Get, Post, Put, Param,
    ParseIntPipe
} from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user-dto';
import { UsersRepository } from './users.repository';
@Controller('users')
export class UsersController {
    constructor(
 private repository: UsersRepository
 ) { }
    @Get()
    async getAllUsers() {
        return {}
    }
    @Post()
    async create(@Body() body: CreateUserDTO) {
    await this.repository.createUser(body)
 }
    @Put(':id')
    async updateUser(@Param('id', ParseIntPipe) id: number,
        @Body() body: CreateUserDTO) {
    }
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
    }
}