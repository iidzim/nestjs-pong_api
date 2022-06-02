import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserStatus } from "./player_status.enum";
import * as bcrypt from 'bcrypt';
import { Relation } from "../relations/relation.entity";

@Entity('player')
@Unique(['username'])
export class Player extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()//({ length: 50 })
	username: string;

	@Column()//({ length: 100 })
	avatar: string;

	@Column()
	level: number;

	@Column({ default: UserStatus.ONLINE})
	status: UserStatus;

	@Column()
	password: string;

	@Column()//({ nullable: true })
	salt: string;

	@OneToMany(type => Relation, relation => relation.user2, { eager: true})
	relations: Relation[];

	async validatePassword(password: string): Promise<Boolean> {
		const hash = await bcrypt.hash(password, this.salt);
		return hash === this.password;
	}
}

//? remove nullable option