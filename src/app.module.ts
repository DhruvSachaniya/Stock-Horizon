import { Module } from '@nestjs/common';
import { authmodule } from './auth/auth.module';
import { stockmodule } from './stock/stock.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),authmodule, stockmodule],
  controllers: [],
  providers: [],
})
export class AppModule {}
