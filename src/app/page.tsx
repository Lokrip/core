import CoursesList from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

export default async function Home() {

  // //через prisma orm получаем все курсы
  // const courses = await client.course.findMany();

  // console.log(courses)

  return (
    <div className="container mt-8">
      <CreateCourseForm revalidatePagePath="/" />
      <CoursesList revalidatePagePath="/" />
    </div>
  );
}
