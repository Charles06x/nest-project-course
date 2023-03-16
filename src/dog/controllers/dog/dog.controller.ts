import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { DogService } from 'src/dog/services/dog/dog.service';
import { CreateDogDto } from 'src/dog/dto/create-dog.dto';
import { UpdateDogDto } from 'src/dog/dto/update-dog.dto';
import { FindDogDto } from 'src/dog/dto/find-dog.dto';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DogDto } from 'src/dog/dto/dog.dto';

@ApiTags('Dog')
@Controller('dog')
export class DogController {
  constructor(private dogServiceConstructor: DogService) {}

  @Get()
    @ApiQuery({
      name: 'breed',
      type: String,
      description: 'The breed of the dog',
      required: false,
    })
    @ApiQuery({
      name: 'age',
      type: Number,
      description: 'The age of the dog',
      required: false,
    })
    @ApiOkResponse({
      description: 'The Dogs records',
      type: DogDto,
      isArray: true,
    })
    @UsePipes(ValidationPipe)
  find(@Query() qParams: FindDogDto) {
    const {breed, age} = qParams;
    if(breed || age) {
      return this.dogServiceConstructor.find(breed, age)
    } else {
      return this.dogServiceConstructor.findAll();
    }
  }

  @Get(':id')
  findSingleDog(@Param('id') id: number) {
    return this.dogServiceConstructor.findOne(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createDog: CreateDogDto) {
    return this.dogServiceConstructor.create(createDog);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: number, @Body() updateDog: UpdateDogDto) {
    return this.dogServiceConstructor.update(updateDog, id)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.dogServiceConstructor.delete(id);
  }
}
