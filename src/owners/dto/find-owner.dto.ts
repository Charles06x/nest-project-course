import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, ValidateIf } from "class-validator";
import { Owners } from "src/entities";

export class FindOwnerDto {
  @ApiProperty({
    type: String,
    description: 'First name of the owner to search',
    required: false,
  })
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'Last name of the owner to search',
    required: false,
  })
  lastName: string;
}