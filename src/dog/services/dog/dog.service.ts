import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from 'src/entities';
import { Repository } from 'typeorm';
import { CreateDogDto, CreateDogPayloadDto } from 'src/dog/dto/create-dog.dto';
import { UpdateDogDto } from 'src/dog/dto/update-dog.dto';
import { OwnersService } from 'src/owners/services/owners/owners.service';

@Injectable()
export class DogService {

  constructor(
    @InjectRepository(Dog) private readonly dogRepository: Repository<Dog>,
    @Inject(OwnersService) private readonly ownersService: OwnersService,
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


  async create(createDogDto: CreateDogPayloadDto) {
    const { owner } = createDogDto;

    const foundOwner = await this.ownersService.findOne(owner);

    const dogInfo: CreateDogDto = {
      ...createDogDto,
      owner: foundOwner
    }

    if(!foundOwner) {
      return {
        msg: 'A valid owner should be provided, to create a dog.'
      }
    }

    const newDog = this.dogRepository.create(dogInfo);
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
