import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dog } from './dog.entity';

@Entity()
export class Owners {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number

  @Column({
    type: String,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: String,
    nullable: false,
  })
  lastName: string;

  @Column({
    type: String,
    nullable: false,
  })
  address: string;

  @Column({
    type: String,
    nullable: false,
  })
  phone: string;

  @OneToMany(() => Dog, (dog) => dog.owner)
  dog: Dog[]
}