import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne } from 'typeorm';
import { Event } from '../../events/entities/event.entity'

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  qty: number;

  @Column({
    type: 'bigint',
    default: 0
  })
  price: number;

  @Column('bigint')
  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  start_sale: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  end_sale: string;

  @ManyToOne(() => Event, (event) => event.tickets)
  event: Event
}