import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecoverService } from './recover.service';
import { CreateRecoverDto } from './dto/create-recover.dto';
import { UpdateRecoverDto } from './dto/update-recover.dto';

@Controller('recover')
export class RecoverController {
  constructor(private readonly recoverService: RecoverService) {}

  @Post()
  create(@Body() createRecoverDto: CreateRecoverDto) {
    return this.recoverService.create(createRecoverDto);
  }

  @Get()
  findAll() {
    return this.recoverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recoverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecoverDto: UpdateRecoverDto) {
    return this.recoverService.update(+id, updateRecoverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recoverService.remove(+id);
  }
}
