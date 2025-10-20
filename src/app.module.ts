import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DiscsModule } from './discs/discs.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule, 
    ProfilesModule,
    DiscsModule, 
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
