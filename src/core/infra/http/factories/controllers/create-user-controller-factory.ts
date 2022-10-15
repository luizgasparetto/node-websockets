import { UserRepositoryImpl } from "../../../../../modules/user/data/repositories/user-repository-impl";
import { CreateUserUsecase } from "../../../../../modules/user/domain/usecases/create-user-usecase";
import { CreateUserController } from "../../../../../modules/user/presentation/controllers/create-user-controller";

export class CreateUserControllerFactory {
  static instance(): CreateUserController {
    const userRepository = new UserRepositoryImpl();

    const createUserUsecase = new CreateUserUsecase(userRepository);

    const createUserControler = new CreateUserController(createUserUsecase);

    return createUserControler;
  }
}