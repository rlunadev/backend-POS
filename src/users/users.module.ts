import { Module } from '@nestjs/common';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { AddressController } from './address/address.controller';
import { RolesController } from './roles/roles.controller';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { AddressService } from './address/address.service';
import { PersonaService } from './persona/persona.service';
import { RoleUserService } from './role-user/role-user.service';
import { UsersService } from './users/users.service';
import { RolesService } from './roles/roles.service';
import { RoleUserController } from './role-user/role-user.controller';
import { PersonaController } from './persona/persona.controller';
import { UsersController } from './users/users.controller';
import { RolesController } from './roles/roles.controller';

@Module({
  controllers: [ProfileController, AddressController, RolesController, UsersController, PersonaController, RoleUserController, CustomersController],
  providers: [ProfileService, RolesService, UsersService, RoleUserService, PersonaService, AddressService, CustomersService]
})
export class UsersModule {}
