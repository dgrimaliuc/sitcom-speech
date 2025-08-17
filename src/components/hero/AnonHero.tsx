import Link from "next/link";
import StudentPicture from "../studentPicture/StudentPicture";
import styles from "./styles.module.scss";

export default function AnonHero() {
  return (
    <div className={styles.heroWrapper}>
      <div>
        <StudentPicture image="/images/students/student-1.avif" />
        <StudentPicture image="/images/students/student-2.avif" />
      </div>
      <div>
        <StudentPicture image="/images/students/student-6.jpg" />
        <StudentPicture image="/images/students/student-4.avif" />
      </div>
      <div>
        <StudentPicture image="/images/students/student-5.avif" />
        <StudentPicture image="/images/students/student-3.avif" />
      </div>
      <Link href="/login" className={styles.logInWrapper}>
        Sign In
      </Link>
    </div>
  );
}
