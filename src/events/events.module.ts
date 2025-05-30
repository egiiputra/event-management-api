import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm'
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Event } from './entities/event.entity'
import { Ticket } from 'src/tickets/entities/ticket.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    TypeOrmModule.forFeature([Ticket]),
  ],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
