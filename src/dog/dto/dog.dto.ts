import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DogDto {
  @ApiProperty({
    type: Number,
    description: 'Id of the Dog'
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'Breed of the dog'
  })
  breed: string;

  @ApiProperty({
    type: Number,
    description: 'Age of the dog'
  })
  @IsNumber()
  age: number;

  @ApiProperty({
    type: String,
    description: 'Color of the dog'
  })
  color: string;
}
