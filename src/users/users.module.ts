import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repository/users.repository';
import { UsersRepositoryImplements } from './repository/users.repository.implements';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersRepositoryImplements
    }
  ],
  exports: [UsersRepository]
})
export class UsersModule { }
