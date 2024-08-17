import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VaultService } from './vault/vault.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, VaultService],
})
export class AppModule {}
