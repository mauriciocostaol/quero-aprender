import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateClassDto) {



    const data: Prisma.ClassUncheckedCreateInput = {
      ...dto,

    }
    return this.prisma.class.create({
      data

    });
  }

  findAll() {
    return this.prisma.class.findMany();
  }

  findOne(id: number) {
    return this.prisma.class.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateClassDto) {
    const data: Prisma.ClassUpdateInput = {
      ...dto,

    }


    return this.prisma.class.update({
      data,
      where: { id }
    });
  }

  remove(id: number) {
    return this.prisma.class.delete({
      where: { id }
    });
  }
}
