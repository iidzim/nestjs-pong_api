import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinTable, OneToMany } from "typeorm";
import { Match_players } from "../match-players/match-player.entity";
import { GameStatus } from "./game_status.enum";

@Entity('match')
export class Game extends BaseEntity{

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	winner: string;

	@Column({default: GameStatus.GAMEOVER})
	status: GameStatus;

	@OneToMany(type => Match_players, mp => mp.game, { eager: true})
	mp: Match_players[];
}