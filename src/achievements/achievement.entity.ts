
import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "../players/player.entity";

export class Achievement extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
    description: string;

	@Column()
	require: number;

	@ManyToOne(type => Player, player => player.achievements, { eager: false})
	user: Player;
}