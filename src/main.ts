/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Request, Response , NextFunction} from 'express';

function globalMiddleWareOne(req: Request , res: Response, next:NextFunction){
  console.log('This is global middleware one');
  next();
}

function globalMiddleWareTwo(req: Request , res: Response, next:NextFunction){
  console.log('This is global middleware two');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);

  await app.listen(3000);
}
bootstrap();
