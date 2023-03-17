import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owners } from 'src/entities';
import { CreateOwnerDto } from 'src/owners/dto/create-owner.dto';
import { UpdateOwnerDto } from 'src/owners/dto/update-owner.dto';
import { Repository } from 'typeorm';

@Injectable()
export class OwnersService {

  constructor(
    @InjectRepository(Owners) private readonly ownersRepository: Repository<Owners>,
  ) {}

  find(firstName: string, lastName: string) {
    if(firstName || lastName){
      return this.ownersRepository.find({
        where: {
          firstName, 
          lastName,
        },
        relations: {
          dog: true
        }
      },);
    }else {
      return this.ownersRepository.find({
        relations: {
          dog: true,
        },
      });
    }
  }

  async findOne(id: number) {

    const [ owner ] = await this.ownersRepository.find({
      where: {id: +id},
      relations: {
        dog: true
      }
    });

    return owner;
  }

  create(createOwner: CreateOwnerDto) {
    const newOwner = this.ownersRepository.create(createOwner);
    return this.ownersRepository.save(newOwner);
  }

  update(id: number, newInfo: UpdateOwnerDto) {
    return this.ownersRepository.save({
      id,
      ...newInfo,
    })
  }

  delete(id: number) {
    return this.ownersRepository.delete({id})
  }
}
