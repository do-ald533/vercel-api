import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import { UserModule } from './modules/user/user.module';
import { MikroOrmConfigService } from './shared/services/mikro-orm-config.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: MikroOrmConfigService,
    }),
    HealthModule,
    UserModule,
  ],
  providers: [Logger],
})
export class AppModule {}
