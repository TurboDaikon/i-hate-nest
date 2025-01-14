import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Document & User;

@Schema({ timestamps: { createdAt: true } })
export class User {
  @Prop()
  login: string;

  @Prop()
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.methods.toJSON = function () {
  const object = this.toObject();
  //delete object.password;
  delete object.__v;
  delete object.updatedAt;
  return object;
};
