import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";
import { RelationStatus } from "./relation_status.enum";

export class Relation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user1: User;

    @Column()
    user2: User;

    @Column()
    status: RelationStatus;
}