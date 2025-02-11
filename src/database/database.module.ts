import { databaseProviders } from '@/database/database.provider';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
	providers: [...databaseProviders],
	exports: [...databaseProviders],
})
export class DatabaseModule {}
