import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "../players/player.entity";
import { RelationStatus } from "./relation_status.enum";

@Entity('relation')
export class Relation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user1: number;

    @Column({default: RelationStatus.NONE})
    status: RelationStatus;
    
    @ManyToOne(type => Player, player => player.relations, { eager: false })
    user2: Player;
}