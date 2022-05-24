import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { User } from '../users/users.model';

@Entity()
export class Relation extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user1: User;

    @Column()
    user2: User;

    @Column()
    status: RelationStatus;

    constructor(
        id: number,
        // user1: number,
        // user2: number,
        status: RelationStatus
    ) {
        super();
        this.id = id;
        // this.user1 = user1;
        // this.user2 = user2;
        this.status = status;
    }
}

export enum RelationStatus {
    NONE = 'none',
    PENDING = 'pending',
    FRIEND = 'friend',
    BLOCKED = 'blocked'
}