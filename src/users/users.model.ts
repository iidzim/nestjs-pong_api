import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { Match } from '../match/Match.model';

@Entity()
export class User extends BaseEntity{

	// constructor(
	// 	public id: string, // id = login
	// 	public username: string,
	// 	public avatar: string,
	// 	public wins: number,
	// 	public losses: number,
	// 	public level: number,
	// 	public status: string,
	// 	) {}

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 50 })
	username: string;

	@Column({ length: 100 })
	avatar: string;

	@Column()
	wins: number;

	@Column()
	losses: number;

	@Column()
	level: number;

	@Column({ length: 10 })
	status: string;

	constructor(
		id: number,
		username: string,
		avatar: string,
		wins: number,
		losses: number,
		level: number,
		status: string
	) {
		// super(id, username, avatar, wins, losses, level, status);
		super();
		this.id = id;
		this.username = username;
		this.avatar = avatar;
		this.wins = wins;
		this.losses = losses;
		this.level = level;
		this.status = status;
	  }
	}