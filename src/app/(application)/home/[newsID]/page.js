import { Button } from "@mantine/core";

const sampleData = [
    {
        id: 1,
        heading:
          "What is the latest program that you are offering in your institute...",
        subheading: "Lucknow Public College of Professional Studies...",
        date: "⏱️ 27 Dec 2020",
        imgsrc: "/images/img5.png",
        type: "college_news",
      },
      {
        id: 2,
        heading: "Discover the New AI and Machine Learning Course Starting Soon...",
        subheading: "Tech Institute of Innovation...",
        date: "⏱️ 15 Feb 2021",
        imgsrc: "/images/img4.png",
        type: "college_news",
      },
      {
        id: 3,
        heading: "Enroll Now for Our Upcoming Web Development Bootcamp...",
        subheading: "Global Coding Academy...",
        date: "⏱️ 10 Mar 2021",
        imgsrc: "/images/img3.png",
        type: "college_news",
      },
]

function SingleNews() {
  return (
    <div className="bg-white flex flex-col md:flex-row justify-around  p-2 top-0 pl-5 md:pl-10 pr-5 md:pr-10 my-4 ">
      <div className="flex flex-col md:w-[50vw] h-auto p-4 gap-y-4">
        <img src="/images/university.png"></img>
        <p className="text-3xl font-bold text-blue_text">
          Chitkara University MBA Admission Open; Check Direct List...
        </p>
        <p className="text-[#8F81CE] text-sm">20 Sep 2023, 8:00pm</p>
        <p className="text-blue_text">
          New Delhi: The State Common Entrance Test Cell, Government of
          Maharashtra, has issued the admit cards for the MArch, MHMCT, BEd,
          MEd, and MPEd Courses on February 27, 2024. To download the document
        </p>
        <p className="text-blue_text">
          We offer a diverse range of extracurricular activities aimed at
          enhancing personal growth, skill development, and building lasting
          connections. From cultural events to sports, competitions, and
          workshops, students have ample opportunities to refine their
          communication and critical thinking abilities while pursuing their
          passions. As individuals with dual responsibilities towards the
          institute and its students, our primary objective is to cultivate an
          enriching learning environment. We contribute to the institute by
          delivering high-quality education, aligning with institutional goals,
          and promoting a positive academic atmosphere. Towards students, we act
          as facilitators of learning, providing support, mentorship, and
          guidance for their intellectual, social, and emotional growth.

          
        </p>
        <p className="text-blue_text">Graduates from our institute, particularly those in nursing, have a
          wide array of career opportunities. With essential clinical skills,
          specialization options, and global practice opportunities, they are
          well-equipped for rewarding careers dedicated to improving health and
          well-being while making a meaningful impact on communities worldwide.
          The paramount strength of our institute lies in its ability to provide
          a transformative educational experience. With robust academic
          programs, committed faculty, and abundant resources, we empower
          students to cultivate critical thinking, broaden their knowledge, and
          become well-rounded, educated citizens prepared to make significant
          contributions to society. To the youth and aspiring students, I
          encourage adopting a growth mindset, setting clear goals, and
          mastering effective time management. Nurture curiosity, seek
          mentorship, and prioritize well-being while remaining adaptable in a
          rapidly evolving world. Remember, success is a continuous
          journey—embrace the process, seize opportunities, and never stop
          learning. To the youth and aspiring students, I encourage adopting a
          growth mindset, setting clear goals, and mastering effective time
          management. Nurture curiosity, seek mentorship, and prioritize
          well-being while remaining adaptable in a rapidly evolving world.
          Remember, success is a continuous journey—embrace the process, seize
          opportunities, and never stop learning.</p>
      </div>
      <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-3"><button className="p-2 rounded-md bg-[#40347C] text-white">Apply Now</button>
      <button className="border-2 rounded-md p-2">Download Brochure</button></div>
      <div className="flex flex-col md:w-[28vw] p-2 gap-y-5 shadow-md rounded-md">
        <p className="text-[#40347D] font-bold italic">NEWS</p>
        {sampleData.map((item, index) => {
          if (index < 4) {
            return (
              <div
                className="flex  w-full gap-x-3 items-center border-b-2 p-2"
                key={item.id}
              >
                <div>
                  <img src={item.imgsrc} className="h-[100px]" />
                </div>
                <div className="flex flex-col gap-y-1 cursor-pointer">
                  <p className="text-black_text font-semibold text-[12px]">
                    {item.heading}
                  </p>
                  <p className="text-black_text text-[11px]">
                    {item.subheading}
                  </p>
                  <p className="text-black_text text-[11px]">{item.date}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
      </div>
    </div>
  );
}

export default SingleNews;
