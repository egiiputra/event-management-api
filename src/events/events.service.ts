import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { randomUUID } from 'node:crypto'

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventsRepository: Repository<Event>,
    @InjectRepository(Ticket)
    private readonly ticketsRepository: Repository<Ticket>
  ) {}

  async create(createEventDto: CreateEventDto) {
    const event = new Event()

    event.id = randomUUID()
    event.name = createEventDto.name
    event.description = createEventDto.description
    event.start_date_time = createEventDto.start_date_time
    event.end_date_time = createEventDto.end_date_time
    event.is_online = createEventDto.is_online

    await this.eventsRepository.save(event)

    createEventDto.tickets.forEach(async (ticket) => {
      const tmp = new Ticket()

      tmp.qty = ticket.qty
      tmp.price = ticket.price
      tmp.start_sale = ticket.start_sale
      tmp.end_sale = ticket.end_sale
      tmp.event = event

      await this.ticketsRepository.save(tmp)
    })

    return 'berhasil'
  }

  findAll() {
    return `This action returns all events`;
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
