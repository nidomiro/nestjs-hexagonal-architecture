import { Module } from '@nestjs/common'
import { MyService } from './my.service'
import { Repository, RepositoryInjectToken } from './repository'
import {createConfigurableDynamicRootModule} from "@golevelup/nestjs-modules";


export interface MyNestAppCoreModuleConfig {
	repository: Repository
}

export const MY_NEST_APP_CORE_MODULE_CONFIG = Symbol('MY_NEST_APP_CORE_MODULE_CONFIG')

@Module({})
export class MyNestAppCoreModule extends createConfigurableDynamicRootModule<MyNestAppCoreModule, MyNestAppCoreModuleConfig>(MY_NEST_APP_CORE_MODULE_CONFIG, {
	providers: [
		MyService,
		{
			provide: RepositoryInjectToken,
			inject: [MY_NEST_APP_CORE_MODULE_CONFIG],
			useFactory: (config: MyNestAppCoreModuleConfig) => config.repository
		}
	],
	exports: [MyService]
}){

}
