import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Match } from '../match/Match.model';
import { Relation } from '../relations/relation.model';

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
	level: number;

	@Column({ length: 10 })
	status: UserStatus;

	@OneToMany(type => Match, match => match.user1)
	matchs: Match[];

	@ManyToMany(type => Relation)
		@JoinTable()
		relations: Relation[];

	constructor(
		id: number,
		username: string,
		avatar: string,
		wins: number,
		losses: number,
		level: number,
		status: UserStatus
	) {
		// super(id, username, avatar, wins, losses, level, status);
		super();
		this.id = id;
		this.username = username;
		this.avatar = avatar;
		this.level = level;
		this.status = status;
	  }
}

export enum UserStatus {
	ONLINE = 'online',
	OFFLINE = 'offline',
	PLAYING = 'playing',
}