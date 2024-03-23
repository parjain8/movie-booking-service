import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingsController } from './bookings.controller';
import { BookingsResolver } from './bookings.resolver';
import { BookingsService } from './bookings.service';
import { Bookings, BookingsSchema } from './schemas/bookings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bookings.name, schema: BookingsSchema },
    ]),
  ],
  controllers: [BookingsController],
  providers: [BookingsResolver, BookingsService],
})
export class BookingsModule {}
