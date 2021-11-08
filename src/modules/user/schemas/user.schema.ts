import { Embedded, Entity, Filter, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseSchema } from '../../../shared/schemas/base.schema';
import { Address } from './address.schema';

@Filter({
  name: 'active',
  cond: () => ({ deleted: { $ne: true } }),
  args: false,
  default: true,
})
@Entity({ collection: 'user' })
export class User extends BaseSchema {
  @ApiProperty()
  @Property()
  name!: string;

  @ApiProperty()
  @Property()
  lastName!: string;

  @ApiProperty()
  @Property()
  email!: string;

  @ApiProperty()
  @Property()
  age?: number;

  @ApiProperty({ type: Address })
  @Embedded({ entity: () => Address })
  address!: Address;
}
