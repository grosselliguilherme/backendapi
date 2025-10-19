import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDTO } from 'src/dtos/create-user-dto';
import { UsersRepository } from 'src/users/repository/users.repository';

@Injectable()
export class AuthService {

    constructor(private jwt: JwtService,
        private repository: UsersRepository) { }

    async login(email: string, password: string) {

        const user = await this.validate(email, password);
        if (!user) throw new UnauthorizedException('Credenciais inválidas');

        const payload = { sub: user.id, email: user.email, name: user.name };
        return {
            access_token: await this.jwt.signAsync(payload),
            user: payload,
        };
    }

    async validate(email: string, password: string) {
        const user = await this.repository.findByEmail(email);
        if (!user) return null;

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;

        const { passwordHash, ...safe } = user;
        return safe;
    }

    async register(dto: CreateUserDTO) {
        const user = await this.repository.createUser(dto);
        const payload = { sub: user.id, email: user.email, name: user.name };
        return {
            access_token: await this.jwt.signAsync(payload),
            user: payload,
        };
    }
}