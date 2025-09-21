import { Button } from "@/components/ui/button";
import React from "react";

const CardSubject = () => {
  return (
    <div className="rounded-[12px] overflow-hidden w-full sm:w-[calc(50%-16px)] group shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-3 duration-300">
      <div className="h-[200px] bg-red-500 flex-center">
        <p className="text-white font-bold text-[48px] ">Try Out</p>
      </div>
      <div className="bg-white p-6">
        <Button
          className="w-full font-medium text-lg py-6 group-hover:bg-primary group-hover:text-white transition-all duration-300"
          variant={"outline"}
        >
          Mulai Belajar
        </Button>
      </div>
    </div>
  );
};

export default CardSubject;
