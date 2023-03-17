import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateOwnerDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Owner\' address'
  })
  address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Owner\' phone'
  })
  phone: string
}

export class UpdateOwnerResponseDto {

  @ApiProperty({
    type: Number,
    description: 'ID of modified Owner',
  })
  id: number

  @ApiProperty({
    type: String,
    required: true,
    description: 'Owner\' address'
  })
  address: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Owner\' phone'
  })
  phone: string
}