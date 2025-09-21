// import Hero from "@/features/landing/components/Hero";
// import Navbar from "@/features/landing/components/Navbar";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/sign-in");

  // return (
  //   <>
  //     <Navbar />
  //     <Hero />
  //   </>
  // );
}
