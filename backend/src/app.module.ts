import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PrintJobModule } from './modules/print-job/print-job.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), PrintJobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
