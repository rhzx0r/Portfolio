import useReadingProgress from "@/hooks/useReadingProgress";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import mainLogo from "../../public/svg/logo.svg";
import dark from "../../public/svg/dark.svg";
import light from "../../public/svg/light.svg";

export default function Header() {
  const router = useRouter();
  const routes = ["Blog", "Works"];
  const completion = useReadingProgress();
  const { theme, setTheme } = useTheme(); //* theme hook for nextjs *//

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <header className="container dark:bg-slate-800 mx-auto flex justify-between h-24 items-center px-6 md:px-0 bg-white">
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
          <ul className="flex gap-6 font-medium">
            {routes.map((route) => {
              return (
                <li
                  key={route}
                  className={`hover:underline ${
                    router.pathname.startsWith(`/${route.toLowerCase()}`) &&
                    "text-red-400 dark:text-blue-500"
                  }`}
                >
                  <Link href={`/${route.toLowerCase()}`}>{route}</Link>
                </li>
              );
            })}
            <li>
              <button
                className="bg-yellow-400 dark:bg-slate-500 p-1 rounded-xl"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <span>
                  {currentTheme === "dark" ? (
                    <Image
                      priority
                      src={dark}
                      alt="dark icon"
                      height={20}
                      width={20}
                    />
                  ) : (
                    <Image
                      priority
                      src={light}
                      alt="light icon"
                      height={20}
                      width={20}
                    />
                  )}
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
    </>
  );
}
