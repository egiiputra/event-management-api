import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

import { Event } from '../events/entities/event.entity'
import { Ticket } from '../tickets/entities/ticket.entity'

import { EventTicketSchema1748590000895 } from '../migrations/1748590000895-EventTicketSchema'

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  logging: true,
  entities: [ Event, Ticket ],
  migrations: [ EventTicketSchema1748590000895 ],
});