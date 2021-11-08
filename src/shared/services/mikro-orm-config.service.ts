import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MikroOrmModuleOptions,
  MikroOrmOptionsFactory,
} from '@mikro-orm/nestjs';
import { User, Address } from '../../modules/user/schemas/';

@Injectable()
export class MikroOrmConfigService implements MikroOrmOptionsFactory {
  private logger = new Logger('MikroORM');

  constructor(private readonly configService: ConfigService) {}

  createMikroOrmOptions(): MikroOrmModuleOptions {
    return {
      type: 'mongo',
      clientUrl: this.configService.get<string>('MONGO_URI'),
      entities: [User, Address],
      debug: this.configService.get<string>('LOG_LEVEL') === 'debug',
      logger: (message) => this.logger.debug(message),
    };
  }
}
