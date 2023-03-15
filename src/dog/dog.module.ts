import { Module } from '@nestjs/common';
import { DogController } from './controllers/dog/dog.controller';
import { DogService } from './services/dog/dog.service';

@Module({
  controllers: [DogController],
  providers: [DogService]
})
export class DogModule {}
