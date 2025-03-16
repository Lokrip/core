import {FC} from 'react';

import { coursesRepository } from '../courses.repository';
import { CourseItem } from '../ui/course-item';
import { revalidatePath } from 'next/cache';


const CoursesList: FC<{revalidatePagePath: string}> = async ({revalidatePagePath}) => {
    const coursesList = await coursesRepository.getCoursesList()

    const handleDeleteAction = async (courseId: string) => {
        "use server";

        await coursesRepository.deleteCourseElement({id: courseId});
        revalidatePath(revalidatePagePath);
    }

    return (
        <div className="flex flex-col gap-2">
            {coursesList.map(course => (
                <CourseItem 
                    key={course.id}
                    course={course} 
                    onDelete={handleDeleteAction.bind(null, course.id)}
                />
            ))}
        </div>
    );
};

export default CoursesList;