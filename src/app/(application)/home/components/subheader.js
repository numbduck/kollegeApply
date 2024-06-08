import { Button } from "@mantine/core";

function Subheader() {
  return (
    <div className="bg-white h-[2.5rem] flex justify-between items-center p-2 top-0 pl-5 md:pl-10 pr-5 md:pr-10 my-4">
      <div className="flex justify-between bg-[#F2EFFF] items-center gap-x-5 px-2 rounded-lg">
        <div className="h-auto flex flex-col md:flex-row md:items-center md:text-center text-[12px] ">
          <p className="text-[#090909] font-semibold">⚡ ️Trending Now:</p>
          <p>CBSE Class 12 Physics Question Paper 2024 Set 3</p>
        </div>
        <div className="flex gap-x-1"><p className="text-[12px] hidden md:block">Check Now </p> <img src="/icons/rightarrow.svg" /></div>
      </div>
      <div className="hidden md:flex gap-x-2 text-[11px]">
        <Button variant="light" className="p-1">All News</Button>
        <Button variant="light" className="p-1">Admission Alert</Button>
        <Button variant="light" className="p-1">College News</Button>
        <Button variant="light" className="p-1">Exam News</Button>
        <Button variant="light" className="p-1">Latest News</Button>
      </div>
    </div>
  );
}

export default Subheader;
