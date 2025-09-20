import { Button } from "@/components/ui/button";
import Image from "next/image";
import SlideButton from "./SlideButton";

const Hero = () => {
  const isSignedIn = false;

  return (
    <section className="bg-gray-100 bg-[url(/assets/background/sm-pattern-hexagon.webp)] bg-center bg-no-repeat py-20 md:bg-[url(/assets/background/md-pattern-hexagon.webp)] md:py-24 lg:py-28 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-5 section-x">
        <div className="flex items-center flex-col md:flex-row">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:py-0">
            <h1 className="mt-3 max-w-[720px] text-2xl leading-snug font-semibold md:text-5xl lg:text-6xl">
              Platform Manajemen Pembelajaran Digital Terintegrasi
            </h1>

            <div className="rounded-2xl lg:max-w-lg lg:hidden relative size-[240px] md:size-[400px]">
              <Image
                src="/assets/images/e-learning.png"
                alt="E-learning Illustration"
                className="w-full h-auto object-cover"
                fill
                priority
              />
            </div>
            <p className="leading-relaxed tracking-wide mt-6 mb-8 max-w-md md:max-w-lg md:text-base text-sm">
              Menyediakan sistem ujian online terintegrasi lengkap dengan fitur:
              pembuatan soal digital, bank soal otomatis, penjadwalan ujian
              fleksibel, koreksi instan, serta laporan hasil ujian.
            </p>
            {isSignedIn ? (
              <Button className="px-6 py-3">Pergi Ke Dashboard</Button>
            ) : (
              <SlideButton />
            )}
          </div>

          <div className="lg:flex justify-center lg:justify-end hidden">
            <div className="rounded-2xl max-w-sm lg:max-w-lg">
              <Image
                src="/assets/images/e-learning.png"
                alt="E-learning Illustration"
                className="w-full h-auto object-cover"
                width={512}
                height={512}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
