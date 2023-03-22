import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './signup/signup.service';
import { RecoverService } from './recover/recover.service';
import { RecoverController } from './recover/recover.controller';
import { VerificationController } from './verification/verification.controller';
import { VerificationService } from './verification/verification.service';
import { LoginModule } from './login/login.module';
import { RecoverModule } from './recover/recover.module';
import { SignupModule } from './signup/signup.module';
import { VerificationModule } from './verification/verification.module';

@Module({
  controllers: [LoginController, SignupController, RecoverController, VerificationController],
  providers: [LoginService, SignupService, RecoverService, VerificationService],
  imports: [LoginModule, RecoverModule, SignupModule, VerificationModule]
})
export class AuthModule {}
