import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  find(breed: string, age: number): string {
    return `find function with params breed: ${breed} & age: ${age}`
  }

  findOne(dogId: number): string {
    return `findOne() is working and the dogID is ${dogId}`;
  }

  create(breed: string, age: number, color: string) {
    return `Create function with properties breed: ${breed}, age: ${age} &  color: ${color}`;
  }

  update(id: number, breed: string, age: number, color: string) {
    return `Update function with properties id: ${id}, breed: ${breed}, age: ${age} &  color: ${color}`;
  }

  delete(id) {
    return `Delete function working with id: ${id}`;
  }
}
