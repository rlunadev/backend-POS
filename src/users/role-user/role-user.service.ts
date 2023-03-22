import { Injectable } from '@nestjs/common';
import { CreateRoleUserDto } from './dto/create-role-user.dto';
import { UpdateRoleUserDto } from './dto/update-role-user.dto';

@Injectable()
export class RoleUserService {
  create(createRoleUserDto: CreateRoleUserDto) {
    return 'This action adds a new roleUser';
  }

  findAll() {
    return `This action returns all roleUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleUser`;
  }

  update(id: number, updateRoleUserDto: UpdateRoleUserDto) {
    return `This action updates a #${id} roleUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleUser`;
  }
}
