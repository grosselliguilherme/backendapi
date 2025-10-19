import { CreateUserDTO } from "src/dtos/create-user-dto";
import { GetUserDTO } from "src/dtos/get-user-dto";

export abstract class UsersRepository {
  abstract createUser(dto: CreateUserDTO);
  abstract getAllUsers(): Promise<GetUserDTO[]>;
  abstract updateUser(id: number, dto: CreateUserDTO);
  abstract deleteUser(id:number);
  abstract findByEmail(email: string); //novo metodo
}
