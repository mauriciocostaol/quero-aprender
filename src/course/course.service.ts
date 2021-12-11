import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) { }
  create(dto: CreateCourseDto) {
    const data: Prisma.CourseCreateInput = {
      ...dto,
    }


    return this.prisma.course.create({
      data,
    });
  }

  findAll() {
    return this.prisma.course.findMany();
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateCourseDto) {

    const data: Prisma.CourseUpdateInput = {
      ...dto
    }
    return this.prisma.course.update({
      data,
      where: { id }
    });
  }

  remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }

}
