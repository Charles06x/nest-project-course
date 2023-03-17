import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Owners } from './owners.entity';

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

  @ManyToOne(() => Owners, (owners) => owners.dog)
  owner: Owners
}