import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PrintJobDocument } from './print-job.schema';

@Injectable()
export class PrintJobService {
  constructor(
    @InjectModel('PrintJob')
    private readonly printJobModel: Model<PrintJobDocument>,
  ) {}

  // Add a new print job
  async create(printJobDto: {
    id: number;
    name: string;
    owner: string;
    link: string;
  }) {
    const createdPrintJob = new this.printJobModel(printJobDto);
    return createdPrintJob.save();
  }

  // Retrieve all print jobs
  async findAll(): Promise<PrintJobDocument[]> {
    return this.printJobModel.find().exec();
  }

  // Retrieve a print job by ID
  async findById(id: number): Promise<PrintJobDocument | null> {
    return this.printJobModel.findOne({ id }).exec();
  }
}
