import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './signup/signup.service';
import { RecoverService } from './recover/recover.service';
import { RecoverController } from './recover/recover.controller';
import { VerificationController } from './verification/verification.controller';
import { VerificationService } from './verification/verification.service';

@Module({
  controllers: [LoginController, SignupController, RecoverController, VerificationController],
  providers: [LoginService, SignupService, RecoverService, VerificationService]
})
export class AuthModule {}
