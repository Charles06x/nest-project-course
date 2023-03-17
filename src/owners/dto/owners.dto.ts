import { ApiProperty } from "@nestjs/swagger";
import { DogDto } from "src/dog/dto/dog.dto";

export class OwnersDto {
  @ApiProperty({
    type: Number, 
    description: 'Owner register ID'})
  id: number;

  @ApiProperty({
    type: String, 
    description: ''})
  firstName: string;

  @ApiProperty({
    type: String, 
    description: ''})
  lastName: string;

  @ApiProperty({
    type: String, 
    description: ''})
  address: string;

  @ApiProperty({
    type: String, 
    description: ''})
  phone: string;

  @ApiProperty({
    type: DogDto,
    description: 'Array of dogs that belong to the owner',
    isArray: true,
  })
  dog: DogDto[]
}