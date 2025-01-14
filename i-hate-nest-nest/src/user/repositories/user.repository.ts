import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/dal/mongodb/base.Repository';
import { User, UserDocument } from 'src/dal/mongodb/schemas/user.schema';

@Injectable()
export class UserRepository extends BaseRepository<UserDocument> {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    super(userModel);
  }

  public async create(documentCreateData: User): Promise<UserDocument> {
    return this.model.create(documentCreateData);
  }
}
