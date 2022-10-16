import { DomainError } from "../../../../core/shared/errors/errors";
import { Either, right } from "../../../../core/shared/logic/either";

import { UserEntity } from "../entities/user-entity";
import { IUserRepository } from "../repositories/i-user-repository";

export class GetUsersUsecase {
  constructor(
    private userRepository: IUserRepository,
  ) { }

  async execute(): Promise<Either<DomainError, UserEntity[]>> {
    const users = await this.userRepository.getUsers();

    return right(users);
  }
}