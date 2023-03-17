import useReadingProgress from "@/hooks/useReadingProgress";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export default function Header() {
  const router = useRouter();
  const routes = ["Blog", "Works"];
  const completion = useReadingProgress();
  const {theme, setTheme} = useTheme(); //* theme hook for nextjs *//

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (

    <>
      <header className="container dark:bg-slate-800 mx-auto flex justify-between h-24 items-center px-6 md:px-0 bg-white">
        <Link href="/">
          <svg
            aria-label="Daily Dev Tips logo"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="24"
          >
            <path
              d="M 13.073 23.977 L 10.214 23.147 C 9.914 23.063 9.746 22.748 9.83 22.448 L 16.228 0.406 C 16.312 0.106 16.626 -0.063 16.926 0.022 L 19.785 0.851 C 20.085 0.936 20.254 1.25 20.17 1.55 L 13.772 23.592 C 13.683 23.892 13.373 24.066 13.073 23.977 Z"
              fill="rgb(255,188,61)"
            ></path>
            <path
              d="M 9.769 16.542 C 9.985 16.312 9.971 15.946 9.732 15.735 L 5.485 11.999 L 9.732 8.263 C 9.971 8.052 9.989 7.686 9.769 7.457 L 7.73 5.281 C 7.519 5.056 7.163 5.042 6.933 5.258 L 0.179 11.587 C -0.06 11.807 -0.06 12.187 0.179 12.407 L 6.933 18.74 C 7.163 18.956 7.519 18.947 7.73 18.717 Z"
              fill="rgb(218,0,96)"
            ></path>
            <path
              d="M 23.066 18.745 L 29.821 12.412 C 30.06 12.191 30.06 11.812 29.821 11.591 L 23.066 5.253 C 22.841 5.042 22.485 5.052 22.27 5.277 L 20.231 7.452 C 20.015 7.682 20.029 8.047 20.268 8.258 L 24.515 11.999 L 20.268 15.735 C 20.029 15.946 20.01 16.312 20.231 16.542 L 22.27 18.717 C 22.48 18.947 22.837 18.956 23.066 18.745 Z"
              fill="rgb(0,185,232)"
            ></path>
          </svg>
        </Link>

        <nav>
          <ul className="flex gap-6 font-medium">
            {routes.map((route) => {
              return (
                <li
                  key={route}
                  className={`hover:underline ${
                    router.pathname === `/${route.toLowerCase()}` &&
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
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <span>
                  {currentTheme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                      style={{ font: "20px", height: "20px", width: "20px" }}
                    >
                      <path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                      style={{ font: "20px", height: "20px", width: "20px" }}
                    >
                      <path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"></path>
                    </svg>
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
