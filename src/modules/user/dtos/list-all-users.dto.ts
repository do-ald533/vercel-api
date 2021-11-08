import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { SortTypeEnum } from '../../../shared/enums/sort-type.enum';
import { SortOrderEnum } from '../../../shared/enums/sort-order.enum';

export class ListAllUsersDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  @Type(() => Number)
  rating?: number;

  @IsOptional()
  @IsEnum(SortTypeEnum)
  sortType?: SortTypeEnum;

  @IsOptional()
  @IsEnum(SortOrderEnum)
  sortOrder?: SortOrderEnum;
}
