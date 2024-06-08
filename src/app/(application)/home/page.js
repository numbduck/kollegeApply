import FeaturedNews from "./components/featuredNews";
import Landing from "./components/landing";
import NewsSection from "./components/newsSection";
import Subheader from "./components/subheader";

const sampleNews = [
    {
        id: 1,
        heading: "What is the latest program that you are offering in your institute...",
        subheading: "Lucknow Public College of Professional Studies...",
        date: "⏱️ 27 Dec 2020",
        imgsrc: "/images/img3.png",
        type: "college_news"
    },
    {
        id: 2,
        heading: "Discover the New AI and Machine Learning Course Starting Soon...",
        subheading: "Tech Institute of Innovation...",
        date: "⏱️ 15 Feb 2021",
        imgsrc: "/images/img4.png",
        type: "college_news"
    },
    {
        id: 3,
        heading: "Enroll Now for Our Upcoming Web Development Bootcamp...",
        subheading: "Global Coding Academy...",
        date: "⏱️ 10 Mar 2021",
        imgsrc: "/images/img3.png",
        type: "college_news"
    },
    {
        id: 4,
        heading: "Join Our Advanced Digital Marketing Workshop...",
        subheading: "Bright Future Business School...",
        date: "⏱️ 05 Apr 2021",
        imgsrc: "/images/img4.png",
        type: "college_news"
    },
    {
        id: 5,
        heading: "Admissions Open for Fall 2021 - Apply Now!",
        subheading: "Greenwood University...",
        date: "⏱️ 01 May 2021",
        imgsrc: "/images/img3.png",
        type: "admission_news"
    },
    {
        id: 6,
        heading: "Final Exams Schedule Announced for Spring Semester...",
        subheading: "Eastside College of Arts...",
        date: "⏱️ 12 May 2021",
        imgsrc: "/images/img4.png",
        type: "exam_news"
    },
    {
        id: 7,
        heading: "Orientation Program for New Students to be Held Next Week...",
        subheading: "Westview Technical Institute...",
        date: "⏱️ 20 Jun 2021",
        imgsrc: "/images/img3.png",
        type: "college_news"
    },
    {
        id: 8,
        heading: "Scholarship Opportunities for Outstanding Students...",
        subheading: "Mountainview Academy...",
        date: "⏱️ 02 Jul 2021",
        imgsrc: "/images/img4.png",
        type: "college_news"
    },
    {
        id: 9,
        heading: "New Research Center Inaugurated at Our Campus...",
        subheading: "Northern State University...",
        date: "⏱️ 15 Aug 2021",
        imgsrc: "/images/img3.png",
        type: "college_news"
    },
    {
        id: 10,
        heading: "Midterm Exams to be Conducted Online Due to Pandemic...",
        subheading: "Sunrise Business School...",
        date: "⏱️ 29 Sep 2021",
        imgsrc: "/images/img4.png",
        type: "exam_news"
    },
    {
        id: 11,
        heading: "Admissions Closing Soon for Winter Semester...",
        subheading: "Central City College...",
        date: "⏱️ 10 Oct 2021",
        imgsrc: "/images/img3.png",
        type: "admission_news"
    },
    {
        id: 12,
        heading: "New Hostel Facility Opens for Students...",
        subheading: "Lakeside Engineering College...",
        date: "⏱️ 25 Oct 2021",
        imgsrc: "/images/img4.png",
        type: "college_news"
    },
    {
        id: 13,
        heading: "Workshop on Cybersecurity Essentials Next Month...",
        subheading: "Capital Technical University...",
        date: "⏱️ 08 Nov 2021",
        imgsrc: "/images/img3.png",
        type: "college_news"
    },
    {
        id: 14,
        heading: "Graduation Ceremony to be Held Virtually This Year...",
        subheading: "Southwest College of Design...",
        date: "⏱️ 20 Nov 2021",
        imgsrc: "/images/img4.png",
        type: "college_news"
    },
    {
        id: 15,
        heading: "Applications Open for the Summer Internship Program...",
        subheading: "Bright Future Business School...",
        date: "⏱️ 05 Dec 2021",
        imgsrc: "/images/img3.png",
        type: "admission_news"
    },
    {
        id: 16,
        heading: "Special Seminar on Climate Change and Sustainability...",
        subheading: "Evergreen Environmental Institute...",
        date: "⏱️ 15 Dec 2021",
        imgsrc: "/images/img4.png",
        type: "college_news"
    }
]



function HomePage() {
  return (
    <div >
      <Subheader />
      <Landing sampleNews= {sampleNews}/>
      <FeaturedNews sampleNews= {sampleNews}/>
      <NewsSection sampleNews={sampleNews}/>
    </div>
  );
}

export default HomePage;
