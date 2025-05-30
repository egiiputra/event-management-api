import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { TicketsModule } from './tickets/tickets.module';

import { config } from 'dotenv';

config()

const configService = new ConfigService()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT') || 5432,
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
      autoLoadEntities: true,
      synchronize: true,
    }),
    EventsModule,
    TicketsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
