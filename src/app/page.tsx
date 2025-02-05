import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";

export default async function Home() {

  // //через prisma orm получаем все курсы
  // const courses = await client.course.findMany();

  // console.log(courses)

  return (
    <div className={styles.page}>
      <Button variant="contained">Contained</Button>
    </div>
  );
}
