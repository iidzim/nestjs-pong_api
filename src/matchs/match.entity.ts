import { Col } from "sequelize/types/utils";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinTable } from "typeorm";
import { Player } from '../players/player.entity';
import { MatchStatus } from "./match_status.enum";

@Entity('match')
export class Match extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user1: number;

    @Column()
    winner: string;

    @Column()
    score: number;

    @Column({default: MatchStatus.GAMEOVER})
    status: MatchStatus;

    // @ManyToOne(type => Player, player => player.matchs, { eager: false})
    // user2: Player;
}