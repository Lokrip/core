import { dbClient } from "@/lib/db";
import {cache} from "react";
import { CourseListElement, CreateCourseListElementCommand, DeleteCourseListElementCommand } from "./model/types";

class CoursesRepository {

    //cache это нужно для того что в рамках одного рендера дерева компонента
    //был один запрос в базу а не 10 или 100 тоесть мы просто один запрос ложим в кеш
    //в при другом рендере бирем его с кешша без дополнительного запроса
    public getCoursesList = cache(
       async (): Promise<CourseListElement[]> => await dbClient.course.findMany()
    );

    public createCourseElement = async (
        command: CreateCourseListElementCommand
    ): Promise<CourseListElement> => {
        return dbClient.course.create({
            data: command,
        })
    };

    public deleteCourseElement = async (
        command: DeleteCourseListElementCommand
    ): Promise<CourseListElement> => {
        return dbClient.course.delete({
            where: {
                id: command.id
            }
        })
    }
}

export const coursesRepository = new CoursesRepository()