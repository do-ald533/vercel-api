import { Repository } from '@mikro-orm/core';
import { CustomRepository } from '../../../shared/contracts/custom.repository';
import { User } from '../schemas/user.schema';

@Repository(User)
export class UserRepository extends CustomRepository<User> {}
