import { HttpResponse } from "../../../../core/infra/protocols/http-response";
import { Controller } from "../../../../core/shared/contracts/controller";

import { CreateUserDTO } from "../../domain/dtos/create-user-dto";
import { CreateUserUsecase } from "../../domain/usecases/create-user-usecase";

export class CreateUserController implements Controller<CreateUserDTO> {
  constructor(private createUserUsecase: CreateUserUsecase) { }

  async handle(request: CreateUserDTO): Promise<HttpResponse> {
    const response = await this.createUserUsecase.execute(request);

    if (response.isLeft()) {
      return HttpResponse.badRequest(response.value.message);
    }

    return HttpResponse.created("User created successfully");
  }
}