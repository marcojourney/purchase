import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BookController {
  constructor() {}

  @MessagePattern({cmd: 'get_book'})
  findOne() {
    return 'return get a book';
  }

  @MessagePattern({cmd: 'get_books'})
  findAll() {
    return 'return get all books';
  }

  @MessagePattern({cmd: 'delete_book'})
  delete() {
    return 'return status of delete book';
  }
}
