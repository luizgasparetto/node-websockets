import { UserRepositoryImpl } from "../../../modules/user/data/repositories/user-repository-impl";
import { CreateUserUsecase } from "../../../modules/user/domain/usecases/create-user-usecase";
import { GetUsersUsecase } from "../../../modules/user/domain/usecases/get-users-usecase";

import { io } from "../http/http";

io.on('connect', (socket) => {
  const userRepository = new UserRepositoryImpl();

  const createUserUsecase = new CreateUserUsecase(userRepository);
  const getUsersUsecase = new GetUsersUsecase(userRepository);

  socket.on('start', async (data) => {
    const { name, email, avatar } = data;

    const user = await createUserUsecase.execute({ name, email, avatar, socket_id: socket.id });

    socket.broadcast.emit('new_users', user.value);
  });

  socket.on('get_users', async (callback) => {
    const users = await getUsersUsecase.execute();

    callback(users.value);
  });
});