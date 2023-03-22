import { Transform } from 'class-transformer';
import { IsString, MaxLength, MinLength, Validate } from 'class-validator';
import { IsNotBlank } from 'src/shared/validations/not-blank.validation';

export class CreateCategoryDto {

  id: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @Validate(IsNotBlank)
  @Transform(({ value }) => value?.trim())
  name: number;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @Validate(IsNotBlank)
  @Transform(({ value }) => value?.trim())
  description: string;
}
