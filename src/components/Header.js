import useReadingProgress from "@/hooks/useReadingProgress";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import mainLogo from "../../public/svg/logo.svg";
import { BsMoonStars, BsSun } from 'react-icons/bs'

export default function Header() {
  const router = useRouter();
  const routes = ["Blog", "Projects"];
  const completion = useReadingProgress();
  const { theme, setTheme } = useTheme(); //* theme hook for nextjs *//

  return (
    <>
      <div className="bg-white dark:bg-slate-900">
        <header className="container  mx-auto flex justify-between h-24 items-center px-6 md:px-0 ">
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
                  <span>

                    {theme === "dark" ? <BsMoonStars size={18}/> : <BsSun size={20} />}
                    {/* <Image
                      priority
                      src={dark_light}
                      alt="light"
                      height={20}
                      width={20}
                    /> */}
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          className="bg-blue-500 dark:bg-red-400 h-1 fixed  w-full top-0 z-10"
        />
      </div>
    </>
  );
}
