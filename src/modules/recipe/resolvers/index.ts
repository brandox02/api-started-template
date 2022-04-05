import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Recipe from "../schemas/types";
import { SaveRecipeInput } from "../schemas/inputs";
import { getAll, getOne, save } from "../services";

@Resolver()
export default class Resolvers {
  @Query((_) => Recipe)
  async getOne(@Arg("recipeId") recipeId: number): Promise<Recipe> {
    const res = await getOne({ id: recipeId });
    return res;
  }

  @Query((_) => [Recipe])
  async getAll(): Promise<Recipe[]> {
    const res = await getAll({});
    return res;
  }

  @Mutation((_) => Recipe, { nullable: true })
  async save(@Arg("data") data: SaveRecipeInput): Promise<Recipe | null> {
    const res = await save(data);
    return res;
  }
}
