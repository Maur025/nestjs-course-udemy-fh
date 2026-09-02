import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module.js';
import { PokemonModule } from '../pokemon/pokemon.module.js';
import { SeedController } from './seed.controller.js';
import { SeedService } from './seed.service.js';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonModule, CommonModule],
})
export class SeedModule {}
