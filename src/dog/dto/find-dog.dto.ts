import { IsNumber, IsString, ValidateIf } from 'class-validator';

export class FindDogDto {
  @ValidateIf(dog => dog.value)
  @IsNumber()
  age: number | null;

  @ValidateIf(dog => dog.breed)
  @IsString()
  breed: string | null;
}