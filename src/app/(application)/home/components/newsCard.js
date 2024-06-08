
function NewsCard({imgsrc, heading ,subheading, date}) {
  return (
    <div className=" flex flex-col w-[308px] h-[351px] p-2">
            <div><img src={imgsrc} className="h-[100px]"/></div>
            <div className="flex flex-col gap-y-1 cursor-pointer" >
              <p className="text-black_text font-semibold text-[12px]">
                {heading}
              </p>
              <p className="text-black_text text-[11px]">{subheading}</p>
              <p className="text-black_text text-[11px]">{date}</p>
            </div>
    </div>
  )
}

export default NewsCard
