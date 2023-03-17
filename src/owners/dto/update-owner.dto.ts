import { IsNotEmpty, IsString } from "class-validator";

export class UpdateOwnerDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsString()
  @IsNotEmpty()
  phone: string
}