import { useRouter } from "next/navigation";

function NewsCard({imgsrc, heading ,subheading, date, id}) {
    const router = useRouter();

  return (
    <div className=" flex flex-col w-[308px] h-[351px] p-2 justify-between shadow-md rounded-md" onClick={()=> router.push(`/home/${id}`)}>
            <div><img src={imgsrc} className="w-[284px] h-[233px]" /></div>
            <div className="flex flex-col gap-y-1 cursor-pointer" >
              <p className="text-black_text font-semibold text-[14px]">
                {heading}
              </p>
              <p className="text-black_text text-[12px]">{subheading}</p>
              <p className="text-[#B4B7C1] text-[12px]">{date}</p>
            </div>
    </div>
  )
}

export default NewsCard
