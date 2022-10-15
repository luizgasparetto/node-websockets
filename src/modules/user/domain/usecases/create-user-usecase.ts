import { DomainError } from "../../../../core/shared/errors/errors";
import { Either, right } from "../../../../core/shared/logic/either";

import { CreateUserDTO } from "../dtos/create-user-dto";
import { UserEntity } from "../entities/user-entity";
import { IUserRepository } from "../repositories/i-user-repository";

export class CreateUserUsecase {
  constructor(private userRepository: IUserRepository) { }

  async execute(data: CreateUserDTO): Promise<Either<DomainError, UserEntity>> {
    const { name, email, socket_id, avatar } = data;

    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      const userUpdated = await this.userRepository.updateUser({ id: userExists.props.id, name, socket_id, avatar });

      return right(userUpdated);
    }

    const userCreated = await this.userRepository.createUser(data);

    return right(userCreated);
  }
}