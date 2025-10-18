import { CreateUserDTO } from "src/dtos/create-user-dto";
import { UsersRepository } from "./users.repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
@Injectable()
export class UsersRepositoryImplements implements UsersRepository {
 constructor(private prisma: PrismaService) { }
    getAllUsers(): Promise<CreateUserDTO[]> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: number, dto: CreateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
 async createUser(dto: CreateUserDTO): Promise<void> {
 await this.prisma.user.create({
 data: {
 name: dto.name,
 email: dto.email
 }
 })
 }
//continuação do arquivo...outros métodos veremos próximo material
}