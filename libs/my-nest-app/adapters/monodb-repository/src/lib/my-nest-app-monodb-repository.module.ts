import { Module } from '@nestjs/common';
import {MonodbRepositoryImpl} from "./monodb-repository.impl";

@Module({
  controllers: [],
  providers: [MonodbRepositoryImpl],
  exports: [MonodbRepositoryImpl],
})
export class MyNestAppMonodbRepositoryModule {}
