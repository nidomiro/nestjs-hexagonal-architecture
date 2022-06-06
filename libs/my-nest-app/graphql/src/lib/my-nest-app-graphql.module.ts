import { Module } from '@nestjs/common'
import {DummyResolver} from "./dummy.resolver";
import {MyNestAppCoreModule} from "@nestjs-hexagonal-architecture/my-nest-app-core";

@Module({
	imports: [MyNestAppCoreModule.externallyConfigured(MyNestAppCoreModule, 0)],
	providers: [DummyResolver],
	exports: [],
})
export class MyNestAppGraphqlModule {}
