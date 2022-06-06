import { Module } from '@nestjs/common'
import { MyNestAppMonodbRepositoryModule } from '@nestjs-hexagonal-architecture/my-nest-app-adapters-monodb-repository'
import {MyNestAppCoreModule, Repository} from '@nestjs-hexagonal-architecture/my-nest-app-core'
import { MonodbRepositoryImpl } from '@nestjs-hexagonal-architecture/my-nest-app-adapters-monodb-repository'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { MyNestAppGraphqlModule } from '@nestjs-hexagonal-architecture/my-nest-app-adapters-graphql'

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(__dirname, 'schema.gql'),
			sortSchema: true,
		}),
		MyNestAppMonodbRepositoryModule,
		MyNestAppCoreModule.forRootAsync(MyNestAppCoreModule, {
			imports: [MyNestAppMonodbRepositoryModule],
			inject: [MonodbRepositoryImpl],
			useFactory: (repositoryImpl: Repository) => ({
				repository: repositoryImpl
			})
		}),
		MyNestAppGraphqlModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
