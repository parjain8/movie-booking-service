import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookings, BookingsDocument } from './schemas/bookings.schema';
import { CreateBookingsInput } from './dto/create-bookings.input';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Bookings.name) private bookingsModel: Model<BookingsDocument>,
  ) {}

  async findAll(): Promise<Bookings[]> {
    return this.bookingsModel.find().exec();
  }

  async create(input: CreateBookingsInput): Promise<Bookings> {
    const createdBookings = new this.bookingsModel(input);
    return createdBookings.save();
  }
}
