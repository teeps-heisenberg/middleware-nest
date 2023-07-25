/* eslint-disable prettier/prettier */

import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookMiddleWare } from "./book.middleware";

@Module({
    imports:[],
    controllers:[BookController],
    providers:[],
    exports:[],
})
export class BookModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(BookMiddleWare).forRoutes('book');
    }

}