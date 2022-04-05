import { Field, ID, InputType } from "type-graphql";

@InputType()
export class SaveRecipeInput {
  @Field((_) => ID, { nullable: true })
  id?: number;

  @Field()
  title: string;
}
