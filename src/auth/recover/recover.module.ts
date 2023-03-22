import { Module } from '@nestjs/common';
import { RecoverService } from './recover.service';
import { RecoverController } from './recover.controller';

@Module({
  controllers: [RecoverController],
  providers: [RecoverService]
})
export class RecoverModule {}
