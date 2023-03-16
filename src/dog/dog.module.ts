import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from 'src/entities';
import { DogController } from './controllers/dog/dog.controller';
import { DogService } from './services/dog/dog.service';

@Module({
  imports: [TypeOrmModule.forFeature([ Dog])],
  controllers: [DogController],
  providers: [DogService]
})
export class DogModule {}
