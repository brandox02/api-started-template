import { SaveRecipeInput } from "../schemas/inputs";
import Recipe from "../schemas/types";
import { AppDataSource } from "../../../DatabaseConnection";
import { EntityManager, FindOptionsWhere } from "typeorm";

export const save = async (
  data: SaveRecipeInput,
  transaction?: EntityManager
): Promise<Recipe> => {
  const repo = (transaction || AppDataSource).getRepository(Recipe);

  const response = await repo.save(repo.create(data));
  return response;
};

export const getOne = async (
  where: FindOptionsWhere<Recipe>
): Promise<Recipe> => {
  const repo = AppDataSource.getRepository(Recipe);
  const response = await repo.findOne({ where, relations: [] });
  return response;
};

export const getAll = async (
  where: FindOptionsWhere<Recipe>
): Promise<Recipe[]> => {
  const repo = AppDataSource.getRepository(Recipe);
  const response = await repo.find({ where, relations: [] });
  return response;
};
