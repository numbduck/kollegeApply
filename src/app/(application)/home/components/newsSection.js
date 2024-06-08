"use client";

import { Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import NewsCard from "./newsCard";

function NewsSection({ sampleNews }) {
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false)


  return (
    <div className="bg-[#f5f3ff] flex justify-center items-center p-2 top-0 pl-10 pr-10 shadow-md">
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List className="!flex  rounded-lg bg-white w-[50vw] mx-auto p-3 justify-around my-6 shadow-sm">
          <Tabs.Tab value="all"><p className={`${activeTab==='all' ? 'font-semibold border-b-2' : 'font-normal'} transition-all`}>All News</p></Tabs.Tab>
          <Tabs.Tab value="college"><p className={`${activeTab==='college' ? 'font-semibold border-b-2' : 'font-normal'}`}>College News</p></Tabs.Tab>
          <Tabs.Tab value="exam"><p className={`${activeTab==='exam' ? 'font-semibold border-b-2' : 'font-normal'}`}>Exam News</p></Tabs.Tab>
          <Tabs.Tab value="admission"><p className={`${activeTab==='admission' ? 'font-semibold border-b-2' : 'font-normal'}`}>Admission 2024</p></Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all">
          <div className="flex flex-wrap justify-center gap-4">
            {sampleNews.map((item) => {
              return (
                <NewsCard
                  imgsrc={item.imgsrc}
                  heading={item.heading}
                  subheading={item.subheading}
                  date={item.date}
                  key={item.id}
                />
              );
            })}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="college">
        <div className="flex flex-wrap justify-center gap-4">
          {sampleNews.map((item) => {
            if ((item.type === "college_news")) {
              return (
                <NewsCard
                  imgsrc={item.imgsrc}
                  heading={item.heading}
                  subheading={item.subheading}
                  date={item.date}
                  key={item.id}
                />
              );
            }
          })}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="exam">
        <div className="flex flex-wrap justify-center gap-4">
          {sampleNews.map((item) => {
            if ((item.type === "exam_news")) {
              return (
                <NewsCard
                  imgsrc={item.imgsrc}
                  heading={item.heading}
                  subheading={item.subheading}
                  date={item.date}
                  key={item.id}
                />
              );
            }
          })}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="admission">
        <div className="flex flex-wrap justify-center gap-4">
          {sampleNews.map((item) => {
            if ((item.type === "admission_news")) {
              return (
                <NewsCard
                  imgsrc={item.imgsrc}
                  heading={item.heading}
                  subheading={item.subheading}
                  date={item.date}
                  key={item.id}
                />
              );
            }
          })}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default NewsSection;
