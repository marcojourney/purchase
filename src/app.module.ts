import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [AppService],
})
export class AppModule {}
