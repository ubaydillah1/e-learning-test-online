"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";

const NavBack = () => {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <nav className="max-w-[1050px] mx-auto h-[75px] bg-background flex items-center sticky top-0 z-50 md:px-[40px] px-[20px] lg:px-0">
      <Button
        onClick={handleBack}
        className="flex items-center gap-2 px-4 py-2
                  text-primary font-medium duration-300 transition-all
                 cursor-pointer group hover:underline text-md"
        variant={"ghost"}
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Kembali
      </Button>
    </nav>
  );
};

export default NavBack;
