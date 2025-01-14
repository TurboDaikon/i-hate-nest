import * as Joi from 'joi';
import { ObjectSchema } from 'joi';

enum Environment {
  Development = 'development',
  Production = 'production',
}
export const getValidationShema = (): ObjectSchema => {
  return Joi.object({
    NODE_ENV: Joi.string()
      .valid(...Object.values(Environment))
      .default(Environment.Development),
    PORT: Joi.number().port().default(3000),
    DATABASE_URI: Joi.string().required(),
    DATABASE_USERNAME: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    PASSWORD_HASH_ROUNDS: Joi.number().default(4),
  });
};
