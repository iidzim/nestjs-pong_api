import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "../games/game.entity";
import { Player } from "../players/player.entity";

@Entity('match_player')
export class Match_players extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    win: boolean;

    @Column()
    score: number;

    @ManyToOne(type => Player, player => player.mp, {eager: false})
	user: Player;

	@ManyToOne(type => Game, game => game.mp, {eager: false})
	game: Game;
}