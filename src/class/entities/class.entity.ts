import { Prisma } from "@prisma/client";

export class Class implements Prisma.ClassUncheckedCreateInput {
    id?: number;
    subject: string;


}
