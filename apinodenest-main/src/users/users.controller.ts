import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user-dto';
import { UsersRepository } from './repository/users.repository';
import express from 'express';

@Controller('users')
export class UsersController {
    constructor(
        private repository: UsersRepository
    ) { }

    @Post()
    async create(@Body() body: CreateUserDTO) {
        await this.repository.createUser(body);
    }

    @Get()
    async findAll() {
        return await this.repository.getAllUsers();
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() body: CreateUserDTO) {
        await this.repository.updateUser(id, body);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number, @Res() response: express.Response) {
        try {
            await this.repository.deleteUser(id);
        } catch (error) {
            return response.status(HttpStatus.NOT_FOUND).json({
                'success': false,
                'message': error.message
            })

        }
    }
}
