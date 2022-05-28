import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserStatus } from "./user_status.enum";

@Entity()
export class User extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 50 })
	username: string;

	@Column({ length: 100 })
	avatar: string;

	@Column()
	level: number;

	@Column({ length: 10 })
	status: UserStatus;

}