## graphQL install

```
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql
```

## typeORM install

```
npm i --save @nestjs/typeorm typeorm
```

## database install

```
npm i --save (mysql2 or sqlite3 or p)
```

## validator install

```
npm i class-validator joi
```

## auth install

```
npm i bcrypt jsonwebtoken
```

## app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { PodcastsModule } from './podcast/podcasts.module';
import { Podcast } from './podcast/entities/podcast.entity';
import { Episode } from './podcast/entities/episode.entity';
import { ApolloDriver } from '@nestjs/apollo';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
