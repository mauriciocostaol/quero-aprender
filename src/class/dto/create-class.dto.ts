import { IsString } from "class-validator";
import { Class } from "../entities/class.entity";

export class CreateClassDto extends Class {
    @IsString()
    subject: string;
}
