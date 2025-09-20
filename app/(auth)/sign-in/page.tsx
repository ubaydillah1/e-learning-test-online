"use client";
import Image from "next/image";
import Footer from "@/shared/components/footer";
import Form from "@/features/auth/components/form";
import { useEffect } from "react";

const fetchCookies = async () => {
  const response = await fetch("https://test-cookies-green.vercel.app", {
    credentials: "include",
  });
  const data = await response.json();
  return data;
};

const SignIn = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchCookies();
        console.log(result);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };
    getData();
  }, []);

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-8 bg-[url(/assets/background/sm-pattern-hexagon.webp)] bg-center bg-no-repeat md:bg-[url(/assets/background/md-pattern-hexagon.webp)] section-x max-w-[1200px] mx-auto">
      <div className="flex w-full flex-col space-x-20 md:flex-row">
        <div className="hidden flex-col gap-5 md:flex w-full">
          <figure className="mb-5 flex items-center gap-3">
            <div className="relative size-[64px] bg-cover">
              <Image
                src="/assets/images/logo.png"
                alt="Logo SMA Muhammadiyah 1"
                fill
              />
            </div>
            <figcaption className="flex flex-col gap-1">
              <h1 className="text-xl font-bold text-primary">
                SMA Muhammadiyah 1
              </h1>
              <h2 className="text-gray-500">E-Learning</h2>
            </figcaption>
          </figure>
          <div className="mb-5 flex flex-col gap-10">
            <h1 className="text-2xl font-bold md:text-5xl">
              Selamat Datang Kembali!
            </h1>
            <p className="text-sm md:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda minima eum, dolor delectus reiciendis repellendus
              placeat incidunt voluptatum sequi, quia, sunt aut nulla libero
              eveniet ea error. Tempore, obcaecati quae!
            </p>
          </div>
        </div>

        <Form />
      </div>

      <Footer />
    </section>
  );
};

export default SignIn;
