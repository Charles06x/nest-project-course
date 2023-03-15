import { Injectable } from '@nestjs/common';
import { DOGS } from 'datasource/dogs';

@Injectable()
export class DogService {

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


  create(breed: string, age: number, color: string) {

    const newDog = {
      id: DOGS.length,
      breed,
      age,
      color,
    }

    DOGS.push(newDog);

    return DOGS[DOGS.length - 1];
  }

  update(id: number, breed: string, age: number, color: string) {
    
    const dogToUpdateIndex = DOGS.findIndex(dog => Number(dog.id === Number(id)))

    const currentDogInfo = DOGS[dogToUpdateIndex]
    DOGS[dogToUpdateIndex] = {
      ...DOGS[dogToUpdateIndex],
      breed: breed ?? currentDogInfo.breed ,
      age: age ?? currentDogInfo.age,
      color: color ?? currentDogInfo.color,
    }

    return DOGS[dogToUpdateIndex]
  }

  delete(id: number) {
    const dogToDeleteIndex = DOGS.findIndex(dog => Number(dog.id === Number(id)))
    DOGS.splice(dogToDeleteIndex, 1);

    return 'Dog deleted successfully';
  }
}
