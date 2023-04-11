import { Transform } from 'class-transformer';
import { IsString, IsUUID, MaxLength, MinLength, Validate } from 'class-validator';
import { IsNotBlank } from 'src/shared/validations/not-blank.validation';

export class CreateCategoryDto {

  @IsUUID()
  id: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @Validate(IsNotBlank)
  @Transform(({ value }) => value?.trim())
  name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @Validate(IsNotBlank)
  @Transform(({ value }) => value?.trim())
  description: string;
}
