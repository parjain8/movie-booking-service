import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookingsInput {
  @Field()
  name: string;

  @Field()
  address: string;
}
