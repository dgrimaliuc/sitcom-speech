import Image from "next/image";

export type StudentPictureProps = {
  image: string;
};

export default function StudentPicture({ image }: StudentPictureProps) {
  return (
    <div className="flex w-[6rem] items-center justify-center">
      <Image
        src={image}
        width="1000"
        height="1000"
        loading="lazy"
        alt="Student"
        className="h-[12rem] md:h-[15rem] lg:h-[20rem] object-cover rounded-full"
      />
    </div>
  );
}
