import { Column, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export default class HostAllowed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @UpdateDateColumn()
  createdAt: Date
}
