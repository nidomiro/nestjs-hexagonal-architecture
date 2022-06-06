import {Query, Resolver} from "@nestjs/graphql";
import {MyService} from "@nestjs-hexagonal-architecture/my-nest-app-core";


@Resolver()
export class DummyResolver {
	constructor(private readonly myService: MyService) {
	}

	@Query(() => String)
	public testQuery() {
		this.myService.callRepoMethod()
		return "Method called"
	}
}
