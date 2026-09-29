import TagButton from "../ui/TagButton";
import CourseCard from "../ui/CourseCard";
import courses from "../../../public/data/data.json";

const tags = [
  "Featured",
  "Music",
  "Drawing & Painting",
   "Marketing",
   "Animation",
   "Social Media",
    "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
 


  
];

const formatTagLabel = (tag: string) => tag.charAt(0).toUpperCase() + tag.slice(1);
const rowCount = 3;
const tagsPerRow = Math.floor(tags.length / rowCount);
const extraTags = tags.length % rowCount;
let tagOffset = 0;
const tagRows = Array.from({ length: rowCount }, (_, rowIndex) => {
  const rowSize = tagsPerRow + (rowIndex < extraTags ? 1 : 0);
  const row = tags.slice(tagOffset, tagOffset + rowSize);
  tagOffset += rowSize;
  return row;
});

const DiscoverSection = () => {
  return (
    <section className="mx-auto my-14 max-w-6xl px-4">
      <h1 className="mb-4 text-center text-4xl font-bold text-gray-600">
        Discover Your Passion, <br />Build Your Skills
      </h1>

      <p className="mx-auto max-w-5xl text-center text-base text-gray-600">
        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
      </p>

      <div className="mx-auto mt-6 flex w-full flex-col items-center gap-3">
        {tagRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex w-full flex-wrap justify-center gap-3 ${
              rowIndex === 0 ? "max-w-5xl" : rowIndex === 1 ? "max-w-4xl" : "max-w-3xl"
            }`}
          >
            {row.map((tag, tagIndex) => (
              <TagButton
                key={`${tag}-${rowIndex}-${tagIndex}`}
                label={formatTagLabel(tag)}
                active={rowIndex === 0 && tagIndex === 0}
              />
            ))}
            {rowIndex === tagRows.length - 1 && <TagButton label="More+" variant="more" />}
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;