import { PartialType } from '@nestjs/mapped-types';
import { CreateRecoverDto } from './create-recover.dto';

export class UpdateRecoverDto extends PartialType(CreateRecoverDto) {}
