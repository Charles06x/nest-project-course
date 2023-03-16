import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateDogDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
    description: 'New age of the dog'
  })
  age: number;
}

export class UpdateDogResponseDto {
  @ApiProperty({
    type: Number
  })
  id: number;

  @ApiProperty({
    type: Number,
  })
  age: number
}