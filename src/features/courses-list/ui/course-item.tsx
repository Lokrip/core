"use client"

import OutlinedCard from "@/mui/card/OutlinedCard"
import { useTransition } from "react"
import { CourseListElement } from "../model/types"

export function CourseItem({
    course,
    onDelete
}:{
    course: CourseListElement, 
    onDelete: () => Promise<void>
}) {
    // docs - useTransition — это React Hook, позволяющий визуализировать 
    // часть пользовательского интерфейса в фоновом режиме.
    const [isLoadingDelete, startDeleteTransition] = useTransition()

    const handleDelete = () => {
        startDeleteTransition(async () => {
            await onDelete()
        })
    }
    console.log(isLoadingDelete)
    return (<OutlinedCard 
        name={course.name} 
        description={course.description}
        onDeleted={handleDelete}
    />)
}