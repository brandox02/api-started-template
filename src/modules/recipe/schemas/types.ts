import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "t_recipes", schema: "app" })
@ObjectType()
export default class Recipe {
  @PrimaryGeneratedColumn()
  @Field((_) => ID)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @CreateDateColumn({ nullable: true })
  @Field({ nullable: true })
  createdAat?: Date;

  @UpdateDateColumn({ nullable: true })
  @Field({ nullable: true })
  updatedAt?: Date;

  @Field((_) => [String], { nullable: true })
  ingredients?: string[];
}
