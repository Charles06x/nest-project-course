import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DogService } from 'src/dog/services/dog/dog.service';

@Controller('dog')
export class DogController {
  constructor(private dogServiceConstructor: DogService) {}

  @Get()
  find(@Query() qParams: any) {
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
  create(@Body() createDog: any) {
    return this.dogServiceConstructor.create(createDog.breed, createDog.age, createDog.color)
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateDog: any) {
    return this.dogServiceConstructor.update(id, updateDog.breed, updateDog.age, updateDog.color)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.dogServiceConstructor.delete(id);
  }
}
