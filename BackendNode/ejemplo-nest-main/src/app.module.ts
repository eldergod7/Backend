import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { ClientController } from './client/client.controller';


@Module({
  imports: [ClientModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
