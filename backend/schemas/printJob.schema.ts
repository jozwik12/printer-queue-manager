import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PrintJobDocument = HydratedDocument<printJob>;

@Schema()
export class printJob {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  owner: string;

  @Prop()
  link: string;
}

export const PrintJobSchema = SchemaFactory.createForClass(printJob);
