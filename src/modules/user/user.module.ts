import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { CreatorService } from './services/creator.service';
import { UserController } from './user.controller';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [CreatorService],
})
export class UserModule {}
