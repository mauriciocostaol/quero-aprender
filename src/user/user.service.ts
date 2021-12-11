import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      ...dto
    }
    return this.prisma.user.create({
      data
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      ...dto
    }

    return this.prisma.user.update({
      data,
      where: { id }
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
