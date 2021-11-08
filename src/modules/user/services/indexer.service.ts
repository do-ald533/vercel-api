import { Injectable } from '@nestjs/common';
import { PaginateResult } from '../../../shared/contracts/custom.repository';
import { SortOrderEnum } from '../../../shared/enums/sort-order.enum';
import { SortTypeEnum } from '../../../shared/enums/sort-type.enum';
import { ListAllUsersDto } from '../dtos/list-all-users.dto';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../schemas/user.schema';

@Injectable()
export class IndexerService {
  constructor(private readonly userRepository: UserRepository) {}

  index(query: ListAllUsersDto = {}): Promise<PaginateResult<User>> {
    const {
      page = 1,
      limit = 10,
      rating,
      sortType,
      sortOrder = SortOrderEnum.ASC,
    } = query;
    const select = '_id rating';
    const criteria: { [key: string]: unknown } = {};
    let sortBy = '';

    if (rating) {
      criteria.rating = rating;
    }

    if (sortType === SortTypeEnum.ALPHABETICAL) {
      sortBy = sortOrder === SortOrderEnum.ASC ? 'name' : '-name';
    }

    return this.userRepository.paginate({
      page,
      limit,
      where: criteria,
      select,
      sortBy,
    });
  }
}
