import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { CommonModule } from './common/common.module.js';
import { PokemonModule } from './pokemon/pokemon.module.js';
import { SeedModule } from './seed/seed.module.js';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(import.meta.dirname, '..', 'public'),
    }),

    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),

    CommonModule,

    SeedModule,

    PokemonModule,
  ],
})
export class AppModule {}
