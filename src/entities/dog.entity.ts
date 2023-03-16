import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  breed: string;

  @Column({
    type: 'int4',
    nullable: false,
    default: 0,
  })
  age: number;

  @Column({
    nullable: false,
    default: '',
  })
  color: string;

}