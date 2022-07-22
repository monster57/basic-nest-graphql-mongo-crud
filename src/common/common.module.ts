

import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql.module';
import { ConfigModule } from './config.module';
import { MongoModule } from './mongo.module';

@Module({
    exports: [ConfigModule, GraphqlModule , MongoModule],
    imports: [ConfigModule, GraphqlModule, MongoModule],
})
export class CommonModule {}