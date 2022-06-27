import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserStatus } from "./player_status.enum";
// import { Game } from "../games/game.entity";
import { Relation } from "../relations/relation.entity";

@Entity('player')
@Unique(['username'])
export class Player extends BaseEntity {

	@PrimaryColumn()
	id: number;

	@Column()
	username: string;

	@Column()
	avatar: string;

	@Column()
	level: number;

	@Column({ default: UserStatus.ONLINE})
	status: UserStatus;

	@Column({ nullable: true, default: false })
	two_fa: boolean;

	@OneToMany(type => Relation, relation => relation.receiver, { eager: true})
	receivers: Relation[];
	
	@OneToMany(type => Relation, relation => relation.sender, { eager: true})
	senders: Relation[];

	// @OneToMany(type => Game, game => game.winner, { eager: true})
	// wins: Game[];

	// @OneToMany(type => Game, game => game.loser, { eager: true})
	// losses: Game[];

}