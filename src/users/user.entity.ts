import { Col } from "sequelize/types/utils";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserStatus } from "./user_status.enum";
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 50 })
	username: string;

	@Column({ length: 100 })
	avatar: string;

	@Column()
	level: number;

	@Column({ default: UserStatus.ONLINE})
	status: UserStatus;

	@Column()
	password: string;

	@Column()//({ nullable: true })
	salt: string;

	async validatePassword(password: string): Promise<Boolean> {
		const hash = await bcrypt.hash(password, this.salt);
		return hash === this.password;
	}
}

//? remove nullable option