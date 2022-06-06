import {Injectable} from "@nestjs/common";
import {Repository} from "@nestjs-hexagonal-architecture/my-nest-app-core";

@Injectable()
export class MonodbRepositoryImpl implements Repository {
	someRepoMethod(): void {
		console.log(`someRepoMethod on MonodbRepositoryImpl was called`)
	}

}
