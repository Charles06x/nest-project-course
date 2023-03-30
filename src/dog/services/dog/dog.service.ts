import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  find(breed: string, age: number): string {
    return `find function with params breed: ${breed} & age: ${age}`
  }

  findOne(dogId: number): string {
    return `findOne is working, and the dogId parameter is ${dogId}`;
  }

  create(breed: string, age: number, color: string) {
    return `create function with properties, breed: ${breed}, age: ${age} & color: ${color}`;
  }

  update(id: number, breed: string, age: number, color: string) {
    let properties = '';
    properties = breed ? properties + `breed: ${breed}` : properties;
    properties = age ? properties + `age: ${age}` : properties;
    properties = color ? properties + `color: ${color}` : properties;
    return `update function dog with id: ${id} & property, ${properties}`;
  }

  delete(id) {
    return `delete function dog with id: ${id}`;
  }
}
