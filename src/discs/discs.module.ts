import { Module } from '@nestjs/common';
import { DiscsController } from './discs.controller';
import { DiscsService } from './discs.service';
import { PrismaService } from 'src/database/prisma.service';
import { DiscsRepository } from './repository/discs.repository';
import { DiscsRepositoryImplements } from './repository/discs.repository.implements';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [AuthModule],
  controllers: [DiscsController],
  providers: [
    DiscsService,
    PrismaService,
    { provide: DiscsRepository, useClass: DiscsRepositoryImplements },
  ],
})
export class DiscsModule {}
