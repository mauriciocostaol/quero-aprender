import { IsInt, IsString } from "class-validator";
import { Course } from "../entities/course.entity";

export class CreateCourseDto extends Course {
    @IsString()
    name: string;
    @IsInt()
    hours: number;

}
