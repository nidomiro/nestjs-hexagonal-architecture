import { Module } from '@nestjs/common';
import {MyNestAppMonodbRepositoryModule} from "@nestjs-hexagonal-architecture/my-nest-app-monodb-repository";
import {MyNestAppCoreModule} from "@nestjs-hexagonal-architecture/my-nest-app-core";
import {MonodbRepositoryImpl} from "@nestjs-hexagonal-architecture/my-nest-app-monodb-repository";


@Module({
  imports: [
	  MyNestAppMonodbRepositoryModule,
	  MyNestAppCoreModule.forRoot({
		  imports: [MyNestAppMonodbRepositoryModule],
		  repositoryProvider: {
			  useExisting: MonodbRepositoryImpl
		  }
	  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
