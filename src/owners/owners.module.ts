import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owners } from 'src/entities';
import { OwnersController } from './controllers/owners/owners.controller';
import { OwnersService } from './services/owners/owners.service';

@Module({
  imports: [TypeOrmModule.forFeature([ Owners ])],
  controllers: [OwnersController],
  providers: [OwnersService],
  exports: [OwnersService]
})
export class OwnersModule {}
