import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDTO } from 'src/dtos/create-user-dto';
import { UsersRepository } from 'src/users/repository/users.repository';

@Injectable()
export class AuthService {

    //classes que o NestJS injeta na nossa classe
    // precisamos delas aqui
    constructor(
        private jwt: JwtService,
        private repository: UsersRepository) 
    { }

    async login(email: string, password: string) {
        //chama a validação que tá logo abaixo
        const user = await this.validate(email, password);
        //retorna uma exception "Não autorizado"
        if (!user) throw new UnauthorizedException('Credenciais inválidas');

        //constroi o retorno JWT Token!
        const payload = { sub: user.id, email: user.email, name: user.name };
        return {
            access_token: await this.jwt.signAsync(payload),
            user: payload,
        };
    }
    async validate(email: string, password: string) {
        //buscar no banco o usuário pelo email
        const user = await this.repository.findByEmail(email);
        //user vai ter todos os campos da tabela
        if (!user) return null;

        //gera uma hash com o password aberto (string)
        //compara com a hash do banco
        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;

        const { passwordHash, ...safe } = user;
        //vou ter um objeto sem passwordHash
        return safe;
    }
    async register(dto: CreateUserDTO) {
        //chama a criação do usuário no banco de dados
        const user = await this.repository.createUser(dto);
        const payload = { sub: user.id, email: user.email, name: user.name };
        return {
            access_token: await this.jwt.signAsync(payload),
            user: payload,
        };
    }
}
