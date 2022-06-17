import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserStatus } from "./player_status.enum";
import * as bcrypt from 'bcrypt';
import { Param } from "@nestjs/common";
// import { Game } from "../games/game.entity";
// import { Relation } from "../relations/relation.entity";

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

	@Column({ nullable: true })
	two_fa: boolean;

	// @OneToMany(type => Game, game => game.winner, { eager: true})
	// wins: Game[];

	// @OneToMany(type => Game, game => game.loser, { eager: true})
	// losses: Game[];
	
	// @OneToMany(type => Relation, relation => relation.receiver, { eager: true})
	// receivers: Relation[];
	
	// @OneToMany(type => Relation, relation => relation.sender, { eager: true})
	// senders: Relation[];




	// @Column()
	// password: string;

	// @Column()//({ nullable: true })
	// salt: string;

	// async validatePassword(password: string): Promise<Boolean> {
	// 	const hash = await bcrypt.hash(password, this.salt);
	// 	return hash === this.password;
	// }

}

//? remove nullable option