import {Inject, Injectable} from '@nestjs/common';
import {Repository, RepositoryInjectToken} from "./repository";

@Injectable()
export class MyService {

  constructor(@Inject(RepositoryInjectToken) private readonly repository: Repository) {
    repository.someRepoMethod()
  }

  public callRepoMethod() {
	  this.repository.someRepoMethod()
  }
}
