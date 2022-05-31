import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "../players/player.entity";
import { RelationStatus } from "./relation_status.enum";

export class Relation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user1: Player;

    @Column()
    user2: number;

    @Column({default: RelationStatus.NONE})
    status: RelationStatus;
}