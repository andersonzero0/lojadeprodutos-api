import { CityEntity } from 'src/city/entities/city.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'state' })
  export class StateEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;
  
    @Column({ name: 'name', nullable: false })
    name: string;
  
    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updateAt: Date;

    @OneToMany(() => CityEntity, (city) => city.state)
    cities?: CityEntity[];
  } 