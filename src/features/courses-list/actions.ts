"use server"

import { revalidatePath } from "next/cache"
import { coursesRepository } from "./courses.repository"
import { CreateCourseListElementCommand } from "./model/types"

export const createCourseAction = async (
    command: CreateCourseListElementCommand,
    revalidatePagePath: string,
) => {
    await coursesRepository.createCourseElement(command)
    // Когда вызывается revalidatePath('/some-page'), 
    // Next.js очищает серверный кэш для указанного пути и 
    // заставляет сервер повторно сгенерировать контент при 
    // следующем запросе. Это полезно, если данные на странице изменились 
    // (например, добавлен новый курс) и нужно отобразить свежие 
    // данные без перезагрузки всего приложения.
    revalidatePath(revalidatePagePath)
}