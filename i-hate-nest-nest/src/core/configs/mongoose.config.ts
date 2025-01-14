import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongooseConfig = (configService: ConfigService): MongooseModuleOptions => {
  const uri = configService
    .get<string>('DATABASE_URI')
    .replace('<USERNAME>', configService.get<string>('DATABASE_USERNAME'))
    .replace('<PASSWORD>', configService.get<string>('DATABASE_PASSWORD'));
  return { uri };
};
