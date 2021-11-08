import { Embeddable, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';

@Embeddable()
export class Address {
  @ApiProperty()
  @Property()
  country: string;

  @ApiProperty()
  @Property()
  city: string;

  @ApiProperty()
  @Property()
  state: string;
}
