import { Injectable } from '@nestjs/common';
import { CreateRecoverDto } from './dto/create-recover.dto';
import { UpdateRecoverDto } from './dto/update-recover.dto';

@Injectable()
export class RecoverService {
  create(createRecoverDto: CreateRecoverDto) {
    return 'This action adds a new recover';
  }

  findAll() {
    return `This action returns all recover`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recover`;
  }

  update(id: number, updateRecoverDto: UpdateRecoverDto) {
    return `This action updates a #${id} recover`;
  }

  remove(id: number) {
    return `This action removes a #${id} recover`;
  }
}
