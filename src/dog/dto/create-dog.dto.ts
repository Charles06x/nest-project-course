import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateDogDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The breed of the dog.'
  })
  breed: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'The age of the dog.'
  })
  age: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The color of the dog.'
  })
  color: string;
}