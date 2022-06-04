import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserStatus } from "./player_status.enum";
import * as bcrypt from 'bcrypt';
import { Relation } from "../relations/relation.entity";
import { Game } from "../games/game.entity";
import { Player_relation } from "../player-relations/player_relations.entity";
import { Achievement } from "../achievements/achievement.entity";
import { Match_players } from "../match-players/match-player.entity";

@Entity('player')
@Unique(['username'])
export class Player extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()//({ length: 50 })
	username: string;

	@Column()
	avatar: string;

	@Column()
	level: number;

	@Column({ default: UserStatus.ONLINE})
	status: UserStatus;

	@Column()
	two_fa: boolean;

	@Column()
	password: string;

	@Column()//({ nullable: true })
	salt: string;

	@OneToMany(type => Player_relation, pr => pr.user, { eager: true})
	pr: Player_relation[];

	@OneToMany(type => Match_players, mp => mp.user, { eager: true})
	mp: Match_players[];

	@OneToMany(type => Achievement, achv => achv.user, { eager: true})
	achievements: Achievement[];

	// @OneToMany(type => Match, match => match.user2, {eager: true})
	// matchs: Match[];

	async validatePassword(password: string): Promise<Boolean> {
		const hash = await bcrypt.hash(password, this.salt);
		return hash === this.password;
	}
}

//? remove nullable option