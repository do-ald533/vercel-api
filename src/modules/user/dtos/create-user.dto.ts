import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsObject,
  IsString,
  Matches,
} from 'class-validator';

class CreateAddressDto {
  @IsString()
  city: string;

  @Matches(/[A-Z]{2}/)
  state: string;

  @IsString()
  country: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsInt()
  @IsNotEmpty()
  age!: number;

  @IsObject()
  @Type(() => CreateAddressDto)
  address!: CreateAddressDto;
}
