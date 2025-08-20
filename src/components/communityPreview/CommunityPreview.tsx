import Link from "next/link";
import styles from "./styles.module.scss";
import StudentPicture from "../studentPicture/StudentPicture";

const studentGroups = [
  ["/images/students/student-1.avif", "/images/students/student-2.avif"],
  ["/images/students/student-6.jpg", "/images/students/student-4.avif"],
  ["/images/students/student-5.avif", "/images/students/student-3.avif"],
];

export default function CommunityPreview() {
  return (
    <div className={styles.communityWrapper}>
      {studentGroups.map((group, index) => (
        <div key={index}>
          {group.map((image, i) => (
            <StudentPicture key={i} image={image} />
          ))}
        </div>
      ))}

      <Link
        href="#login"
        className="absolute top-0 right-[1rem] bg-orange-light pb-[0.5rem] pt-[0.5rem] pl-[1rem] pr-[1rem] rounded-bl-[50px] rounded-br-[50px] rounded-tl-[50px] cursor-pointer"
      >
        Sign In
      </Link>
    </div>
  );
}
