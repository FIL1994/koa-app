import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

interface IUser {
  firstName?: string;
  lastName?: string;
  age?: number;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  constructor({ firstName, lastName, age }: IUser = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
