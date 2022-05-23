import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from '../users/users.model';

@Entity()
export class Match extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user1: number;

    @Column()
    user2: number;

    @Column()
    winner: string;

    @Column()
    loser: string;

    @Column()
    score: number;

    @Column()
    status: string;

    constructor(
        id: number,
        user1: number,
        user2: number,
        winner: string,
        loser: string,
        score: number,
        status: string
    ) {
        super();
        this.id = id;
        this.user1 = user1;
        this.user2 = user2;
        this.winner = winner;
        this.loser = loser;
        this.score = score;
        this.status = status;
    }
}
