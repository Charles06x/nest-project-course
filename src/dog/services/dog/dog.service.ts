import { Injectable } from '@nestjs/common';
import { DOGS } from 'datasource/dogs';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from 'src/entities';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { CreateDogDto } from 'src/dog/dto/create-dog.dto';
import { UpdateDogDto } from 'src/dog/dto/update-dog.dto';

@Injectable()
export class DogService {

  constructor(
    @InjectRepository(Dog) private readonly dogRepository: Repository<Dog>,
  ) {}

  findAll() {
    return DOGS;
  }

  find(breed: string, age: number): any[] {
    let filteredDogs = [];

    if(breed && age) {
      return DOGS.filter((dog) => dog.breed == breed && dog.age >= age);
    } 

    breed
      ? (filteredDogs = DOGS.filter((dog) => dog.breed == breed))
      : (filteredDogs = DOGS.filter((dog) => dog.age >= age));

    return filteredDogs;
  }

  findOne(dogId: number): any {

    try {
      const [dog] = DOGS.filter((dog) => Number(dog.id) === Number(dogId));
  
      return dog;
    } catch (error) {
      return {
        msg: 'Something went wrong. Try later.'
      }
    }
  }


  create(createDogDto: CreateDogDto) {
    const newDog = this.dogRepository.create(createDogDto);
    return this.dogRepository.save(newDog);
  }

  update(updateDog: UpdateDogDto, idDog: number) {
    return this.dogRepository.save({
      id: idDog,
      ...updateDog,
    })
  }

  delete(id: number) {
    return this.dogRepository.delete({id})
  }
}
