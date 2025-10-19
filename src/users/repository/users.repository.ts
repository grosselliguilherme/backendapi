import { CreateUserDTO } from "src/dtos/create-user-dto";
import { GetUserDTO } from "src/dtos/get-user-dto";
export abstract class UsersRepository {
    abstract createUser(dto: CreateUserDTO): Promise<any>;
    abstract getAllUsers(): Promise<GetUserDTO[]>;
    abstract updateUser(id: number, dto: CreateUserDTO): Promise<void>;
    abstract deleteUser(id: number): Promise<void>;
    abstract findByEmail(email: string);
}
