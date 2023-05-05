import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const dbConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',
  autoLoadEntities: true,
  synchronize: true,
};

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
