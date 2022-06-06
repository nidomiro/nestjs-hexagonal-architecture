import { DynamicModule, Module } from '@nestjs/common'
import { MyService } from './my.service'
import { Repository, RepositoryInjectToken } from './repository'
import {
	ClassProvider,
	ExistingProvider,
	FactoryProvider,
	ValueProvider,
} from '@nestjs/common/interfaces/modules/provider.interface'

export type PredefinedProvider<T> =
	| Omit<ClassProvider<T>, 'provide'>
	| Omit<ValueProvider<T>, 'provide'>
	| Omit<FactoryProvider<T>, 'provide'>
	| Omit<ExistingProvider<T>, 'provide'>

export interface MyNestAppCoreModuleConfig extends Pick<DynamicModule, 'imports'> {
	repositoryProvider: PredefinedProvider<Repository>
}

@Module({
	providers: [MyService],
	exports: [MyService],
})
export class MyNestAppCoreModule {
	public static forRoot(config: MyNestAppCoreModuleConfig): DynamicModule {
		return {
			module: MyNestAppCoreModule,
			imports: [...(config.imports ?? [])],
			providers: [
				{
					...config.repositoryProvider,
					provide: RepositoryInjectToken,
				},
			],
		}
	}
}
