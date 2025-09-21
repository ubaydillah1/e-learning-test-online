"use client"
import { ArrowRight, BookA } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const CardPortal = () => {
  const router = useRouter();
  return (
    <div className="group rounded-[12px] bg-white w-full p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col gap-[16px] border hover:border-primary sm:w-[calc(50%-32px)] lg:w-[calc(33.333%-32px)] transform hover:-translate-y-3 " onClick={() => router.push("/home/1")}>
      <div className="size-[72px] rounded-full bg-red-200 border-red-500 flex-center ">
        <BookA className="text-red-500 size-[38px]" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-slate-800">SMA Kelas 1</h3>
        <p className="text-slate-800 text-md">
          Kumpulan soal pilihan ganda untuk latihan TKA.
        </p>
      </div>
      <div className="flex items-center text-primary font-semibold relative w-fit">
        <span className="group-hover:underline transition-all duration-300">
          Mulai Belajar
        </span>
        <ArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export default CardPortal;
