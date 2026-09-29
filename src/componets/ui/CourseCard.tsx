import Image from "next/image";

type Course = {
  id: string;
  title: string;
  coverImage: string;
  author: string;
  level: string;
  lessonsNumber: number;
  totalTime: string;
  totalComments: number;
  rating: number;
  numberOfStudents: number;
  price: number;
};

type CourseCardProps = {
  course: Course;
};

const formatTime = (time: string) =>
  time.replace("h", " hours").replace("m", " mins");

const formatStudents = (students: number) =>
  students >= 1000 ? `${(students / 1000).toFixed(1)}k+` : `${students}+`;

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className="w-full max-w-[358px] rounded-[22px] border border-[#dedede] bg-white p-4 text-[#171717] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="relative h-[196px] overflow-hidden rounded-[13px]">
        <Image
          src={course.coverImage}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 358px"
          className="object-cover"
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 text-[11px] text-[#4a4a4a]">
          <span className="rounded-full bg-white/85 px-3 py-1.5 backdrop-blur-sm">
            {course.lessonsNumber} Lessons
          </span>
          <span className="rounded-full bg-white/85 px-3 py-1.5 backdrop-blur-sm">
            {formatTime(course.totalTime)}
          </span>
          <span className="rounded-full bg-white/85 px-3 py-1.5 backdrop-blur-sm">
            {course.totalComments} Comments
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <h2 className="line-clamp-2 text-[19px] font-semibold leading-[1.15] tracking-[-0.03em]">
          {course.title}
        </h2>
        <span className="flex shrink-0 items-center gap-1 text-[17px] text-[#707070]">
          {course.rating}
          <span aria-hidden="true" className="text-[#c6c6c6]">★</span>
        </span>
      </div>

      <p className="mt-1 text-xs text-[#6d6d6d]">
        by <span className="text-[#003be2]">{course.author}</span>
      </p>

      <div className="mt-4 flex items-center gap-6">
        <span className="flex items-center gap-2 rounded-full bg-[#f2f2f2] px-3 py-2 text-xs text-[#505050]">
          <span aria-hidden="true" className="flex items-end gap-0.5 text-[#555]">
            <i className="h-2 w-0.5 bg-current" />
            <i className="h-3 w-0.5 bg-current" />
            <i className="h-4 w-0.5 bg-current" />
          </span>
          {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
        </span>

        <span className="flex items-center pl-2">
          {["#e6a07d", "#8bb3d6", "#252525"].map((color, index) => (
            <span
              key={color}
              aria-hidden="true"
              className="-ml-2 flex size-7 items-center justify-center rounded-full border-2 border-white text-[9px] text-white"
              style={{ backgroundColor: color, zIndex: 3 - index }}
            >
              {course.author.charAt(index)}
            </span>
          ))}
          <span className="-ml-2 flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#c2f001] text-[10px] text-[#111]">
            {formatStudents(course.numberOfStudents)}
          </span>
        </span>
      </div>

      <p className="mt-4 flex items-baseline gap-1">
        <span className="text-xl font-bold text-[#003be2]">${Math.round(course.price)}</span>
        <span className="text-[10px] text-[#777]">/lifetime</span>
      </p>
    </article>
  );
};

export default CourseCard;