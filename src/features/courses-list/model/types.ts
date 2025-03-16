export interface CourseListElement {
    id: string;
    name: string;
    description: string;
}

export interface CreateCourseListElementCommand {
    name: string;
    description: string;
}


export interface DeleteCourseListElementCommand {
    id: string
}