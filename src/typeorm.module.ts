import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: '127.0.0.1',
      host: 'localhost',
      port: 3307,
      username: 'user',
      password: 'user',
      database: 'nestjs_2026',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class TypeormModule {}
