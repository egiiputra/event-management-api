import { Ticket } from "src/tickets/entities/ticket.entity";

export class CreateEventDto {
  name: string;
  description: string;
  start_date_time: string;
  end_date_time: string;
  is_online: boolean;
  event_url?: string;
  location_name?: string;
  location_city?: string;
  tickets: Ticket[]
}
