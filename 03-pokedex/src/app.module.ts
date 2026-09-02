import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { CommonModule } from './common/common.module.js';
import { EnvConfiguration } from './config/app.config.js';
import { JoiValidationSchema } from './config/joi.validation.js';
import { PokemonModule } from './pokemon/pokemon.module.js';
import { SeedModule } from './seed/seed.module.js';
@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: JoiValidationSchema,
      load: [EnvConfiguration],
    }),

    ServeStaticModule.forRoot({
      rootPath: join(import.meta.dirname, '..', 'public'),
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('mongodb'),
        dbName: 'pokemonsdb',
      }),
    }),

    CommonModule,

    SeedModule,

    PokemonModule,
  ],
})
export class AppModule {}
