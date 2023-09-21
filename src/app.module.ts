import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { PodcastsModule } from './podcast/podcasts.module';
import { Podcast } from './podcast/entities/podcast.entity';
import { Episode } from './podcast/entities/episode.entity';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite3',
      synchronize: true,
      logging: true,
      entities: [Podcast, Episode],
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true, driver: ApolloDriver }),
    PodcastsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
