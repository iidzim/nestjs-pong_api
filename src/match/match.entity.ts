import { Col } from "sequelize/types/utils";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinTable } from "typeorm";
import { User } from '../users/user.entity';
import { MatchStatus } from "./match_status.enum";

@Entity()
export class Match extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user1: User;

    @Column()
    user2: number;

    @Column({ nullable: true })
    winner: string;

    @Column()
    score: number;

    @Column({default: MatchStatus.GAMEOVER})
    status: MatchStatus;
}