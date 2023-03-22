import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SellsModule } from './sells/sells.module';
import { SharedModule } from './shared/shared.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [AuthModule, UsersModule, SellsModule, SharedModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
