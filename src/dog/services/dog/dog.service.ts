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
    return this.dogRepository.find();
  }

  find(breed: string, age: number): any {

    if(breed && age) {
      return this.dogRepository.findBy({
        breed,
        age
      });
    } 

    const results = breed ?
                      this.dogRepository.findBy({breed})
                      : this.dogRepository.findBy({age});
    return results;
  }

  findOne(dogId: number): any {

    try {
      return this.dogRepository.findOneBy({id: dogId})
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
