
import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "../players/player.entity";
import { AchievementStatus } from "./achievement_status.enum";

export class Achievement extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	category: AchievementStatus;

	@Column()
	require: number;

	@ManyToOne(type => Player, player => player.achievements, { eager: false})
	user: Player;
}