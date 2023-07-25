/* eslint-disable prettier/prettier */

import { Controller, Get, Post } from "@nestjs/common";

@Controller('user')
export class UserController{
    
    @Get()
    findAllUsers(): string{
        return 'This returns all users';
    }

    @Post()
    addUser(): string{
        return 'This adds users';
    }
}