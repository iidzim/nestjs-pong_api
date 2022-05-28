import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinTable } from "typeorm";
import { User } from '../users/user.entity';

@Entity()
export class Match extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.id)
    user1: User;

    @ManyToOne(type => User, user => user.id)
    user2: User;

    @Column()
    winner: string;

    @Column()
    loser: string;

    @Column()
    score: number;

    @Column()
    status: MatchStatus;

    constructor(
        id: number,
        // user1: number,
        // user2: number,
        winner: string,
        loser: string,
        score: number,
        status: MatchStatus
    ) {
        super();
        this.id = id;
        // this.user1 = User.id;
        // this.user2 = User.id;
        this.winner = winner;
        this.loser = loser;
        this.score = score;
        this.status = status;
    }
}

export enum MatchStatus { 
    PLAYING = 'playing',
    GAMEOVER = 'gameover',
}