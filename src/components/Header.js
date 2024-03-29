import useReadingProgress from "@/hooks/useReadingProgress";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import mainLogo from "../../public/svg/logo.svg";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const routes = ["Blog", "Proyectos"];
  const completion = useReadingProgress();
  const { theme, setTheme } = useTheme(); //* theme hook for nextjs *//
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="bg-white border-b-[1px] dark:border-none dark:bg-slate-900">
        <header className="container  mx-auto flex justify-between h-20 items-center px-6 md:px-0 ">
          <Link href="/">
            <Image
              priority
              src={mainLogo}
              alt="Main icon"
              height={24}
              width={30}
            />
          </Link>
          <nav>
            <ul className="flex gap-2 font-medium items-center transition">
              {routes.map((route) => {
                return (
                  <li
                    key={route}
                    className={`hover:underline py-1 px-2 rounded-sm hover:bg-neutral-100 dark:hover:hover:bg-slate-700 ${
                      router.pathname.startsWith(`/${route.toLowerCase()}`) &&
                      "text-red-400 dark:text-orange-500"
                    }`}
                  >
                    <Link href={`/${route.toLowerCase()}`}>{route}</Link>
                  </li>
                );
              })}
              <li>
                <button
                  className="hover:bg-neutral-200 dark:hover:bg-slate-700 p-2 rounded-sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {mounted && (
                    <span>
                      {theme === "dark" ? (
                        <BsMoonStars size={18} />
                      ) : (
                        <BsSun size={20} />
                      )}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          className="bg-blue-500 dark:bg-red-500 h-1 fixed  w-full top-0 z-10"
        />
      </div>
    </>
  );
}
