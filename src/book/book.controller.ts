/* eslint-disable prettier/prettier */

import { Controller, Get, Post } from "@nestjs/common";

@Controller('book')
export class BookController{
    
    @Get()
    findAllBooks(): string{
        return 'This returns all books';
    }

    @Post()
    addBook(): string{
        return 'This adds books';
    }
}