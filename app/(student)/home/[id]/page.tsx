import CardSubject from "@/features/student/cardSubject";
import NavBack from "@/features/student/NavBack";
import React from "react";

const SubjectPage = () => {
  return (
    <>
      <NavBack />
      <div className="md:px-[40px] px-[20px] bg-background">
        <main className="max-w-[1050px] mx-auto md:pb-[64px] pb-[40px] rounded-[24px]">
          <h1 className="text-[64px] text-center font-bold">SMA Kelas 1</h1>
          <p className="text-[20px] text-slate-600 text-center mx-auto my-1">
            Fokuskan belajarmu pada mata pelajaran yang paling kamu butuhkan
          </p>

          <div className="flex gap-[32px] mt-[64px] flex-wrap justify-center px-0">
            <CardSubject />
          </div>
        </main>
      </div>
    </>
  );
};

export default SubjectPage;
