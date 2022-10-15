import { AsyncMaybe } from "../../../../core/shared/logic/maybe";

import { UserEntity } from "../entities/user-entity";

import { CreateUserDTO } from "../dtos/create-user-dto";
import { UpdateUserDTO } from "../dtos/update-user-dto";


export interface IUserRepository {
  createUser(data: CreateUserDTO): Promise<UserEntity>;
  updateUser(data: UpdateUserDTO): Promise<UserEntity>;
  findByEmail(email: string): AsyncMaybe<UserEntity>;
}