import { UserRepositoryImpl } from "../../../modules/user/data/repositories/user-repository-impl";
import { CreateUserUsecase } from "../../../modules/user/domain/usecases/create-user-usecase";
import { io } from "../http/http";

io.on('connect', (socket) => {

  socket.on('start', async (data) => {
    const { name, email, avatar } = data;

    const userRepository = new UserRepositoryImpl();
    const createUserUsecase = new CreateUserUsecase(userRepository);

    const user = await createUserUsecase.execute({ name, email, avatar, socket_id: socket.id });

    if (user.isRight()) {
      console.log(user);
    }
  });
});