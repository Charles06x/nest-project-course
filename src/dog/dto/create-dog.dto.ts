import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';
import { Owners } from 'src/entities';

export class CreateDogPayloadDto {
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

  @IsNumber()
  @IsNotEmpty()
  owner: Owners['id'];
}

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

  @IsNumber()
  @IsNotEmpty()
  owner: Owners;
}