import { AnyKeys, Document, FilterQuery, Model, QueryOptions } from 'mongoose';

export abstract class BaseRepository<T extends Document> {
  protected constructor(protected readonly model: Model<T>) {}

  public async getById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async create(documentCreateData: object): Promise<T> {
    return this.model.create(documentCreateData);
  }

  public async findOneAndUpdate(filter: FilterQuery<T>, update: AnyKeys<T>, options?: QueryOptions): Promise<T> {
    return this.model.findOneAndUpdate(filter, update, { new: true, ...options });
  }
}
