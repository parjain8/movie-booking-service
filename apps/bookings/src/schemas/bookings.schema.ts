import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingsDocument = Bookings & Document;

@Schema()
export class Bookings {
  @Prop()
  name: string;

  @Prop()
  address: string;
}

export const BookingsSchema = SchemaFactory.createForClass(Bookings);
