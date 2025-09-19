import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/shared/components/footer";

const SignIn = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-8 bg-[url(/assets/background/sm-pattern-hexagon.webp)] bg-center bg-no-repeat md:bg-[url(/assets/background/md-pattern-hexagon.webp)] section-x max-w-[1200px] mx-auto">
      <div className="grid w-full grid-cols-1 space-x-20 md:grid-cols-2">
        {/* Bagian kiri */}
        <div className="hidden flex-col gap-5 md:flex">
          {/* Logo & Name Website */}
          <figure className="mb-5 flex items-center gap-5">
            <div className="relative size-[64px] bg-cover">
              <Image
                src="/assets/images/logo.png"
                alt="Logo SMA Muhammadiyah 1"
                fill
              />
            </div>
            <figcaption className="flex flex-col gap-1">
              <h1 className="text-xl font-bold">SMA Muhammadiyah 1</h1>
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
          <div className="flex flex-col gap-1">
            <p>By clicking on &quot;Sign In Now&quot; you agree to</p>
            <span className="flex gap-3 underline">
              <Link href="#">Terms of Service</Link> |{" "}
              <Link href="#">Privacy Policy</Link>
            </span>
          </div>
        </div>

        {/* Bagian kanan - form */}
        <form className="flex flex-col gap-5 rounded-lg bg-gray-200  lg:px-10 lg:py-10 px-4 py-5">
          <h1 className="mb-5 text-center text-3xl font-bold">Sign In</h1>

          {/* Input Username */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="username" className="text-sm text-gray-700">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Enter your username"
              className="rounded-md bg-white p-2 ring-1 ring-gray-400 focus-visible:ring-2 focus-visible:ring-primary"
              type="text"
              required
            />
            {/* Error message kalau perlu */}
            <p className="text-xs text-redcustom hidden">
              Username is required
            </p>
          </div>

          {/* Input Password */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-sm text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter your password"
              className="rounded-md bg-white p-2 ring-1 ring-gray-400 focus-visible:ring-2 focus-visible:ring-primary"
              type="password"
              required
            />
            <p className="text-xs text-redcustom hidden">
              Password is required
            </p>
          </div>

          {/* Button Login */}
          <Button
            type="submit"
            className="bg-primary mt-5 rounded-md p-2.5 text-sm text-white hover:opacity-90"
          >
            Sign In Now
          </Button>
        </form>
      </div>

      <Footer />
    </section>
  );
};

export default SignIn;
