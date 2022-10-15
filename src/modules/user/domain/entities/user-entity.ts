import { Entity } from "../../../../core/shared/contracts/entity";

export type UserEntityProps = {
  id: string;
  name: string;
  email: string;
  socket_id: string;
  avatar: string;
}

export class UserEntity extends Entity<UserEntityProps> {
  private constructor(props: UserEntityProps, id?: string) {
    super(props, id);
  }

  public static create(props: UserEntityProps, id?: string) {
    const user = new UserEntity(props, id);

    return user;
  }
}