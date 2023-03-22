import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  
  @ValidatorConstraint({ name: 'isNotBlank', async: false })
  export class IsNotBlank implements ValidatorConstraintInterface {
    validate(parameter: string) {
      return parameter?.trim().length > 0;
    }
  
    defaultMessage(_args: ValidationArguments) {
      return 'Must not leave empty spaces';
    }
  }
  