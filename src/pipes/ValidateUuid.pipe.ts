import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { validate } from 'class-validator';

@Injectable()
export class ValidateUuidPipe extends ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[8|9|aA|bB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    if (metadata.type === 'param' && metadata.data === 'id') {
      if (!value || !uuidPattern.test(value)) {
        throw new BadRequestException('UUID invalido');
      }
    }
    return super.transform(value, metadata);
  }
}
