import { User } from "../../../../core/infra/mongo/schemas/user";
import { UserEntity, UserEntityProps } from "../../domain/entities/user-entity";

export class UserEntityMapper {
  static toDomain(object: User): UserEntity {
    const props: UserEntityProps = {
      id: object._id,
      name: object.name,
      email: object.email,
      socket_id: object.socket_id,
      avatar: object.avatar,
    }

    return UserEntity.create(props);
  }
}