import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { ClassModule } from './class/class.module';



@Module({
  imports: [UserModule, ClassModule, CourseModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
