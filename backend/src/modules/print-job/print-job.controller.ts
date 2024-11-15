import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrintJobService } from './print-job.service';

@Controller('print-jobs')
export class PrintJobController {
  constructor(private readonly printJobService: PrintJobService) {}

  // Create a new print job
  @Post()
  async create(@Body() createPrintJobDto: any) {
    return this.printJobService.create(createPrintJobDto);
  }

  // Get all print jobs
  @Get()
  async findAll() {
    return this.printJobService.findAll();
  }
}
