import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BookingsService } from './bookings.service';
import { Bookings } from './schemas/bookings.schema';
import { CreateBookingsInput } from './dto/create-bookings.input';

@Resolver(() => Bookings)
export class BookingsResolver {
  constructor(private readonly businessService: BookingsService) {}

  @Query(() => [Bookings])
  async businesses() {
    return this.businessService.findAll();
  }

  @Mutation(() => Bookings)
  async createBookings(@Args('input') input: CreateBookingsInput) {
    return this.businessService.create(input);
  }
}
