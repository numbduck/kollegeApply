"use client";

import { Input } from "@mantine/core";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useSearch } from "../context/searchContext";


export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const { search, setSearch} = useSearch();
 

  return (
    <div className="bg-white h-[4.5rem] flex justify-between z-50 items-center p-2 sticky top-0 pl-2 md:pl-10 pr-2 md:pr-10 shadow-md">
    <div className="flex gap-x-6 items-center">
      <div className="flex cursor-pointer" onClick={() => router.push("/home")}>
        <img src="/images/logo.svg" className="h-[2.2rem]"></img>
      </div>
      <div className="hidden md:flex">
        <Link href="/university">
          <p
            className={`flex gap-x-1 ${
              pathname.includes("/university")
                ? "text-header font-bold pr-10"
                : "text-header font-normal pr-10"
            }`}
          >
            University 
          </p>
        </Link>
        <Link href="/colleges">
          <p
            className={`flex gap-x-1 ${
              pathname.includes("/colleges")
                ? "text-header font-bold pr-10"
                : "text-header font-normal pr-10"
            }`}
          >
            Colleges{" "} <img src="/icons/downarrow.svg"></img>
          </p>
        </Link>
        <Link href="/exams">
          <p
            className={`flex gap-x-1 ${
              pathname.includes("/exams")
                ? "text-header font-bold pr-10"
                : "text-header font-normal pr-10"
            }`}
          >
            Exams <img src="/icons/downarrow.svg"></img>
          </p>
        </Link>
        <Link href="/courses">
          <p
            className={`flex gap-x-1 ${
              pathname.includes("/courses")
                ? "text-header font-bold pr-10"
                : "text-header font-normal pr-10"
            }`}
          >
            Courses <img src="/icons/downarrow.svg"></img>
          </p>
        </Link>
        <Link href="/news">
          <p
            className={`flex gap-x-1 ${
              pathname.includes("/news")
                ? "text-header font-bold pr-10"
                : "text-header font-normal pr-10"
            }`}
          >
            News <img src="/icons/downarrow.svg"></img>
          </p>
        </Link>
      </div>
      </div>
      <div className="flex gap-x-1">
  
          <img
            src="/icons/Search.svg"
            // onClick={}}
            className="cursor-pointer flex"
          />
        <Input placeholder="Search for Colleges, Exams, Courses & more... "
        // value={search}
        onChange={(event) => {setSearch(event.target.value)}}
        size="xl"
        variant="filled"
        classNames={{
            input:"p-1 md:p-2 w-full md:w-[400px] border-2"
        }}
        />
      </div>
    </div>
  );
}
