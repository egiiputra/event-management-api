import { Entity, Column, Index, OneToMany, PrimaryColumn } from 'typeorm';
import { Ticket } from '../../tickets/entities/ticket.entity'

@Entity()
export class Event {

  @PrimaryColumn('uuid')
  id: string;

  @Index()
  @Column({ 
    type:'varchar',
    length: 100,
    nullable: false,
  })
  name: string;

  @Column('text')
  description: string;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  start_date_time: string;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  end_date_time: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  is_online: boolean;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  event_url: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  location_name: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true
  })
  location_city: string;

  @OneToMany(() =>  Ticket, (ticket) => ticket.event)
  tickets: Ticket[]
}