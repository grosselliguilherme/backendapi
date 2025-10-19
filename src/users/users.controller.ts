import {
    Body, Controller, Delete, Get, Post, Put, Param,
    ParseIntPipe
} from '@nestjs/common';

import { CreateUserDTO } from 'src/dtos/create-user-dto';
import { UsersRepository } from './repository/users.repository';

@Controller('users')
export class UsersController {
    constructor(
        private repository: UsersRepository
    ) { }

    @Get()
    async getAllUsers() {
        return await 
        this.repository.getAllUsers()
    }

    @Post()
    async createUser(@Body() body: CreateUserDTO) {
        await this.repository.createUser(body);
    }

    @Put(':id')
    async updateUser(@Param('id', ParseIntPipe) id: number,
        @Body() body: CreateUserDTO) {
            await this.repository.updateUser(id, body)
    }
    
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        await this.repository.deleteUser(id);
    }
}