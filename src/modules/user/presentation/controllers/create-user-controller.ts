import { HttpResponse } from "../../../../core/infra/protocols/http-response";
import { Controller } from "../../../../core/shared/contracts/controller";
import { CreateUserDTO } from "../../domain/dtos/create-user-dto";

export class CreateUserController implements Controller<CreateUserDTO> {
  constructor(private createUserUsecase: CreateUs) { }

  async handle(request: CreateUserDTO): Promise<HttpResponse> {

  }

}