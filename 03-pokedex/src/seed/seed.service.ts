import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/adapters/axios.adapter.js';
import { Pokemon } from '../pokemon/entities/pokemon.entity.js';
import { PokeResponse } from './interfaces/poke-response.interface.js';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany();

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: { no: number; name: string }[] = [];

    // const insertPromisesArray: any[] = [];

    data.results.forEach(async ({ name, url }) => {
      const no = url.split('/').at(-2);
      if (!no) {
        return;
      }

      // await this.pokemonModel.create({ no: +no, name });
      // insertPromisesArray.push(this.pokemonModel.create({ no: +no, name }));
      pokemonToInsert.push({ name, no: +no });
    });

    // await Promise.all(insertPromisesArray);
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'seed executed';
  }
}
