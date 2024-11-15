import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PrintJobDocument = HydratedDocument<PrintJob>;

@Schema()
export class PrintJob {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  owner: string;

  @Prop()
  link: string;
}

export const PrintJobSchema = SchemaFactory.createForClass(PrintJob);
