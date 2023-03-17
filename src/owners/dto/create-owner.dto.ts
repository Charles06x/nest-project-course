import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateOwnerDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'First Name of the owner',
  })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Last Name of the owner',
  })
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Address of the owner',
  })
  address: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Phone of the owner',
  })
  phone: string;
}