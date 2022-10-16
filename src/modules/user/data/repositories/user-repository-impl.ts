import { User } from "../../../../core/infra/mongo/schemas/user";
import { AsyncMaybe } from "../../../../core/shared/logic/maybe";

import { CreateUserDTO } from "../../domain/dtos/create-user-dto";
import { UpdateUserDTO } from "../../domain/dtos/update-user-dto";

import { UserEntity } from "../../domain/entities/user-entity";
import { IUserRepository } from "../../domain/repositories/i-user-repository";
import { UserEntityMapper } from "../mappers/user-entity-mapper";

export class UserRepositoryImpl implements IUserRepository {

  async createUser(data: CreateUserDTO): Promise<UserEntity> {
    const { name, email, avatar, socket_id } = data;

    const user = await User.create({ name, email, avatar, socket_id });

    return UserEntityMapper.toDomain(user);
  }

  async updateUser(data: UpdateUserDTO): Promise<UserEntity> {
    const { id, name, socket_id, avatar } = data;

    const user = await User.findOneAndUpdate({ _id: id }, { $set: { name, avatar, socket_id } }, { new: true });

    return UserEntityMapper.toDomain(user);
  }

  async getUsers(): Promise<UserEntity[]> {
    const users = await User.find();

    return users.map(e => UserEntityMapper.toDomain(e));
  }

  async findByEmail(email: string): AsyncMaybe<UserEntity> {
    const user = await User.findOne({ email }).exec();

    if (!user) return null;

    return UserEntityMapper.toDomain(user);
  }
}