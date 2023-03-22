import { Module } from '@nestjs/common';
import { RoleUserService } from './role-user.service';
import { RoleUserController } from './role-user.controller';

@Module({
  controllers: [RoleUserController],
  providers: [RoleUserService]
})
export class RoleUserModule {}
