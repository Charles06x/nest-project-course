import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './dog/dog.module';
import { OwnersModule } from './owners/owners.module';
import { OwnersController } from './owners/controllers/owners/owners.controller';
import entities from './entities';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true} ),
    TypeOrmModule.forRootAsync({
      imports: [ ConfigModule ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    DogModule,
    OwnersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
