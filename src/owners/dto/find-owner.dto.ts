import { IsNotEmpty, ValidateIf } from "class-validator";
import { Owners } from "src/entities";

export class FindOwnerDto {
  firstName: string;

  lastName: string;
}