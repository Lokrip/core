interface CourseListElement {
    id: string;
    name: string;
    description: string;
}

interface CreateCourseListElementCommand {
    name: string;
    description: string;
}


interface DeleteCourseListElementCommand {
    id: string
}