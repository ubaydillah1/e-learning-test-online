"use client"
import { Button } from "@/components/ui/button";
import NavBack from "@/features/student/NavBack";
import { useRouter } from "next/navigation";
import React from "react";

const PackagePage = () => {
  const router = useRouter();
  return (
    <>
      <NavBack />
      <div className="md:px-[40px] px-[20px] bg-background">
        <main className="max-w-[1050px] mx-auto md:pb-[64px] pb-[40px] rounded-[24px]">
          <h1 className="text-[64px] text-center font-bold">
            Latihan Soal Try Out
          </h1>
          <p className="text-[20px] text-slate-600 text-center mx-auto my-1">
            Silakan pilih paket soal yang ingin Kamu kerjakan di bawah ini.
          </p>

          <div className="flex gap-[12px] md:gap-[32px] flex-wrap mt-[64px] justify-center">
            <Button className="py-10 text-lg w-full md:w-[calc(33.333%-22px)] shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300" onClick={() => router.push("/exam/1")}>
              Mulai Paket 1
            </Button>
           </div>
        </main>
      </div>
    </>
  );
};

export default PackagePage;
