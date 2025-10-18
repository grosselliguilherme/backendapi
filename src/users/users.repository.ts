import { CreateUserDTO } from "src/dtos/create-user-dto";
export abstract class UsersRepository {
abstract createUser(dto: CreateUserDTO): Promise<void>;
abstract getAllUsers(): Promise<CreateUserDTO[]>;
abstract updateUser(id:number, dto: CreateUserDTO): Promise<void>;
abstract deleteUser(id:number): Promise<void>;
}