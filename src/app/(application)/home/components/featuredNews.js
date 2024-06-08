function FeaturedNews({sampleNews}) {
  return (
    <div className="flex flex-col gap-y-4  items-center p-4 top-0 ml-10 mr-10 my-4 bg-[#E0AD4C] bg-opacity-5 rounded-lg border-2">
      <div className="flex justify-between items-center w-full">
        <p className="text-[#E0AD4C] font-semibold italic">FEATURED NEWS</p>
        <div>
          <img src="/icons/rightarrow.svg" />
        </div>
      </div>
      <div className="flex justify-around">
        {sampleNews.map((item ,index) => {
            if(index<4){
                return (
            <div className="flex flex-col p-2 gap-y-1 cursor-pointer" key={item.id}>
              <p className="text-black_text font-semibold text-[14px]">
                {item.heading}
              </p>
              <p className="text-black_text text-[12px]">{item.subheading}</p>
              <p className="text-black_text text-[12px]">{item.date}</p>
            </div>
          );
            }
         
        })}
      </div>
    </div>
  );
}

export default FeaturedNews;
