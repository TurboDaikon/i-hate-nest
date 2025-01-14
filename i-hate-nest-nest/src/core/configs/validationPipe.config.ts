import { INestApplication, ValidationPipe } from '@nestjs/common';

export const initValidationPipe = (app: INestApplication): void => {
  const validationPipe = new ValidationPipe({ whitelist: true });
  app.useGlobalPipes(validationPipe);
};
