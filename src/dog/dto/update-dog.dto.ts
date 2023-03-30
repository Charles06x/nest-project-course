import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateDogDto {
  @IsNotEmpty()
  @IsNumber()
  age: number;
}