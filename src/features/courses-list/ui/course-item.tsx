"use client"

import OutlinedCard from "@/mui/card/OutlinedCard"

export function CourseItem({
    course,
    onDelete
}:{
    course: CourseListElement, 
    onDelete: () => Promise<void>
}) {
    return (<OutlinedCard 
        name={course.name} 
        description={course.description}
    />)
}