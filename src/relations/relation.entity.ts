import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Player_relation } from "../player-relations/player_relations.entity";
import { RelationStatus } from "./relation_status.enum";

@Entity('relation')
export class Relation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: RelationStatus;

    @OneToMany(type => Player_relation, pr => pr.relation, {eager: true})
    pr: Player_relation[];
}