import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ProfilesRepository } from './repository/profiles.repository';
import { ProfilesRepositoryImplements } from './repository/profiles.repository.implements';

@Module({
  controllers: [ProfilesController],
  providers: [
    PrismaService,
    {
      provide: ProfilesRepository,
      useClass: ProfilesRepositoryImplements
    }
  ],
})
export class ProfilesModule {}
