import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './core/configs/swagger.config';
import { initValidationPipe } from './core/configs/validationPipe.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  initValidationPipe(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().then(() => {
  console.log(`Server started on PORT:${process.env.PORT ?? 3000}`);
});
