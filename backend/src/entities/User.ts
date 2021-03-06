import { ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Post } from "./Post";
import { Updoot } from "./Updoot";

@ObjectType() // GraphQL
@Entity() // ORM
export class User extends BaseEntity {
  @Field() // GraphQL
  @PrimaryGeneratedColumn() // ORM
  id!: number;

  @Field() // GraphQL
  @Column({ unique: true }) // ORM
  username!: string;

  @Field(() => [Post])
  @OneToMany(() => Post, (post) => post.creator)
  posts: Post[];

  @OneToMany(() => Updoot, (updoot) => updoot.user)
  updoots: Updoot[];

  @Field() // GraphQL
  @Column({ unique: true }) // ORM
  email!: string;

  @Column() // ORM
  password!: string;

  @Field(() => String) // GraphQL
  @CreateDateColumn() // ORM
  createdAt = Date;

  @Field(() => String) // GraphQL
  @UpdateDateColumn() // ORM
  updatedAt = Date;
}
