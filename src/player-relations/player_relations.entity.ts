import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "../players/player.entity";
import { Relation } from "../relations/relation.entity";

@Entity('player_relation')
export class Player_relation extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(type => Player, player => player.pr, {eager: false})
	user: Player;

	@ManyToOne(type => Relation, relation => relation.pr, {eager: false})
	relation: Relation[];
}