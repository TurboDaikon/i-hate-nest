import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseConfig } from './core/configs/mongoose.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getValidationShema } from './core/environment/env.validation';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true, validationSchema: getValidationShema() }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => getMongooseConfig(configService),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
