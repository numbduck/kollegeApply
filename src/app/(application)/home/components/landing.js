"use client"
import { useRouter } from "next/navigation";



function Landing({sampleNews}) {

  const router = useRouter()


  return (
    <div className="bg-white flex flex-col md:flex-row justify-around items-center p-2 top-0 pl-10 pr-10 my-4 ">
      <div className='flex flex-col md:w-[50vw] h-auto p-4 gap-y-4'>
            <img src='/images/university.png'></img>
            <p className='text-3xl font-bold text-blue_text'>Chitkara University MBA Admission Open; Check Direct List...</p>
            <p className='text-[#8F81CE] text-sm'>20 Sep 2023, 8:00pm</p>
            <p className='text-blue_text'>New Delhi: The State Common Entrance Test Cell, Government of Maharashtra, has issued the admit cards for the MArch, MHMCT, BEd, MEd, and MPEd Courses on February 27, 2024. To download the documen... <span className="font-semibold cursor-pointer" onClick={()=>router.push("/home/1")}>READ</span></p>
      </div>
      <div className='flex flex-col md:w-[28vw] p-2 gap-y-5 shadow-md rounded-md'>
        <p className="text-[#40347D] font-bold italic">THE BIG STORIES</p>
        {sampleNews.map((item, index) => {
            if(index<4){
                return (
            <div className="flex w-full gap-x-3 items-center border-b-2 p-2" key={item.id}>
            <div><img src={item.imgsrc} className="h-[100px]"/></div>
            <div className="flex flex-col gap-y-1 cursor-pointer" >
              <p className="text-black_text font-semibold text-[12px]">
                {item.heading}
              </p>
              <p className="text-black_text text-[11px]">{item.subheading}</p>
              <p className="text-black_text text-[11px]">{item.date}</p>
            </div>
            </div>
          );
            }
          
        })}
      </div>
    </div>
  )
}

export default Landing
