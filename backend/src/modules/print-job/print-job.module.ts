import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrintJob, PrintJobSchema } from './print-job.schema';
import { PrintJobService } from './print-job.service';
import { PrintJobController } from './print-job.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PrintJob.name, schema: PrintJobSchema },
    ]),
  ],
  controllers: [PrintJobController],
  providers: [PrintJobService],
})
export class PrintJobModule {}
