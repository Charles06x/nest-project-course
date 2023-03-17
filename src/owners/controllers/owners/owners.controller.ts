import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateOwnerDto } from 'src/owners/dto/create-owner.dto';
import { FindOwnerDto } from 'src/owners/dto/find-owner.dto';
import { OwnersDto } from 'src/owners/dto/owners.dto';
import { UpdateOwnerDto, UpdateOwnerResponseDto } from 'src/owners/dto/update-owner.dto';
import { OwnersService } from 'src/owners/services/owners/owners.service';

@Controller('owners')
@ApiTags('Owners')
export class OwnersController {
  constructor(private ownersServiceConstructor: OwnersService) {}

  @Get()
    @ApiOkResponse({
      description: 'Found owners',
      type: OwnersDto,
      isArray: true,
    })
  find(@Query() qParams: FindOwnerDto) {
    const {firstName, lastName} = qParams;

    return this.ownersServiceConstructor.find(firstName, lastName)
  }

  @Get('/:id')
    @ApiOkResponse({
      type: OwnersDto,
      description: 'Found Owner',
    })
  findOne(@Param('id') id: number) {
    return this.ownersServiceConstructor.findOne(id)
  }

  @Post()
    @ApiOkResponse({
      type: OwnersDto,
      description: 'Created owner'
    })
  create(@Body() createOwner: CreateOwnerDto) {
    return this.ownersServiceConstructor.create(createOwner);
  }

  @Patch('/:id')
  @ApiOkResponse({
    type: UpdateOwnerResponseDto,
    description: 'Info uupdated'
  })
  update(@Param('id') id: number, @Body() newInfo: UpdateOwnerDto) {
    return this.ownersServiceConstructor.update(id, newInfo);
  }

  @Delete('/:id')
  @ApiOkResponse({
    type: String,
    description: 'Message about result of request.'
  })
  delete(@Param('id') id: number) {
    return this.ownersServiceConstructor.delete(id);
  }
}
