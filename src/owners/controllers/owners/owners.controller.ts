import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateOwnerDto } from 'src/owners/dto/create-owner.dto';
import { FindOwnerDto } from 'src/owners/dto/find-owner.dto';
import { UpdateOwnerDto } from 'src/owners/dto/update-owner.dto';
import { OwnersService } from 'src/owners/services/owners/owners.service';

@Controller('owners')
export class OwnersController {
  constructor(private ownersServiceConstructor: OwnersService) {}

  @Get()
  find(@Query() qParams: FindOwnerDto) {
    const {firstName, lastName} = qParams;

    return this.ownersServiceConstructor.find(firstName, lastName)
  }

  @Get('/:id')
  findOne(@Param('id') id) {
    return this.ownersServiceConstructor.findOne(id)
  }

  @Post()
  create(@Body() createOwner: CreateOwnerDto) {
    return this.ownersServiceConstructor.create(createOwner);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() newInfo: UpdateOwnerDto) {
    return this.ownersServiceConstructor.update(id, newInfo);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.ownersServiceConstructor.delete(id);
  }
}
