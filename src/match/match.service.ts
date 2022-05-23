import { Injectable } from "@nestjs/common";
import { Match } from "./match.model";

@Injectable()
export class MatchService {
    private matchs: Match[] = [];

    getAllMatchs(){
        return [...this.matchs];
    }
}

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';

@Entity()
export default class BookEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
}