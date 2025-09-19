import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export const NavbarLink = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Tentang Sekolah",
    href: "/about",
    draft: false,
  },
  {
    name: "Cara Penggunaan",
    href: "/how-to-use",
    draft: false,
  },
  {
    name: "Fasilitas",
    href: "/facilities",
    draft: false,
  },
];

const Navbar = () => {
  return (
    <nav
      className={`fixed top-0 z-50 bg-transparent h-[90px] w-full flex-center section-x`}
    >
      <div className="my-2 flex w-full items-center justify-between py-3 md:mt-4 max-w-[1200px] mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative size-[64px] bg-cover">
            <Image
              src="/assets/images/logo.png"
              alt="Logo SMA Muhammadiyah 1"
              fill
            />
          </div>
          <span className="md:flex flex-col hidden">
            <h2 className="text-primary font-bold md:text-lg">
              SMA Muhammadiyah 1
            </h2>
            <p className="text-xs md:text-sm">Terakreditasi A</p>
          </span>
        </Link>
        {/* <NavbarMobile /> */}
        <div className="hidden items-center gap-6 rounded-full bg-gray-500/30 px-5 py-3 text-sm lg:flex">
          {NavbarLink.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-all hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Button className="text-md">Hubungi Kami</Button>
      </div>
    </nav>
  );
};

export default Navbar;
