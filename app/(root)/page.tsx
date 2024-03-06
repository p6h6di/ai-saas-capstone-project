import Link from "next/link";
import Creator from "./_components/Creator";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  return (
    <>
      <div className="relative overflow-hidden before:absolute before:start-1/2 before:top-0 before:-z-[1] before:size-full before:-translate-x-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-top before:bg-no-repeat dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">
        <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            {!userId ? (
              <Link
                className="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-2 px-3 text-xs text-gray-600 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
                href="/sign-in"
              >
                Explore the Power of AI
                <span className="flex items-center gap-x-1">
                  <span className="border-s border-gray-200 ps-2 text-blue-600 dark:text-blue-500">
                    Explore
                  </span>
                  <svg
                    className="size-4 shrink-0 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </Link>
            ) : (
              <Link
                className="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-2 px-3 text-xs text-gray-600 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
                href="/dashboard"
              >
                Explore the Power of AI
                <span className="flex items-center gap-x-1">
                  <span className="border-s border-gray-200 ps-2 text-blue-600 dark:text-blue-500">
                    Dashboard
                  </span>
                  <svg
                    className="size-4 shrink-0 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </Link>
            )}
          </div>

          <div className="mx-auto mt-5 max-w-xl text-center">
            <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
              From Idea To Masterpiece
            </h1>
          </div>

          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Bring your vision to life with GoLu Ai. This AI tool lets you
              create images, videos, and code, making it simple to prototype,
              design, and develop.
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {!userId ? (
              <Link
                className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                href="/sign-in"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  color="#ffffff"
                  fill="none"
                >
                  <path
                    d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
                Continue with Email
              </Link>
            ) : (
              <Link
                className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                href="/dashboard"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  color="#ffffff"
                  fill="none"
                >
                  <path
                    d="M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6C10 7.40013 10 8.1002 9.72752 8.63498C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72752C2.89462 9.48783 2.51217 9.10538 2.27248 8.63498C2 8.1002 2 7.40013 2 6Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M2 18C2 16.5999 2 15.8998 2.27248 15.365C2.51217 14.8946 2.89462 14.5122 3.36502 14.2725C3.8998 14 4.59987 14 6 14C7.40013 14 8.1002 14 8.63498 14.2725C9.10538 14.5122 9.48783 14.8946 9.72752 15.365C10 15.8998 10 16.5999 10 18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.3477 9.85572L15.1909 9.1223H15.1909L15.3477 9.85572ZM14.1443 8.65228L14.8777 8.80911L14.1443 8.65228ZM15.0207 6.11171L14.4903 5.58138H14.4903L15.0207 6.11171ZM17.8883 8.97933L18.4186 9.50966L17.8883 8.97933ZM21.7963 3.47729L22.4458 3.10229L21.7963 3.47729ZM21.1961 5.67149L20.6658 5.14116L21.1961 5.67149ZM21.7963 4.99807L22.4458 5.37307L21.7963 4.99807ZM20.5227 2.20375L20.8977 1.55423V1.55423L20.5227 2.20375ZM18.3285 2.80388L18.8588 3.33421L18.3285 2.80388ZM19.0019 2.20375L18.6269 1.55423V1.55423L19.0019 2.20375ZM20.6658 5.14116L17.358 8.449L18.4186 9.50966L21.7265 6.20182L20.6658 5.14116ZM15.551 6.64205L18.8588 3.33421L17.7982 2.27355L14.4903 5.58138L15.551 6.64205ZM15.1909 9.1223C15.0155 9.15981 14.8753 9.18973 14.7548 9.21212C14.6333 9.23472 14.5536 9.2454 14.4996 9.24884C14.4441 9.25237 14.4479 9.24579 14.4825 9.25471C14.5296 9.26685 14.5936 9.29719 14.6482 9.35178L13.5876 10.4124C13.9113 10.7362 14.3158 10.7636 14.5948 10.7458C14.8603 10.7289 15.1839 10.6577 15.5045 10.5891L15.1909 9.1223ZM13.4109 8.49546C13.3423 8.8161 13.2711 9.13973 13.2542 9.40523C13.2364 9.68419 13.2638 10.0887 13.5876 10.4124L14.6482 9.35178C14.7028 9.40637 14.7331 9.47039 14.7453 9.51747C14.7542 9.55207 14.7476 9.55591 14.7512 9.50044C14.7546 9.44641 14.7653 9.36674 14.7879 9.24519C14.8103 9.12473 14.8402 8.98455 14.8777 8.80911L13.4109 8.49546ZM20.6658 3.33421C21.0333 3.7017 21.1084 3.78597 21.1467 3.85229L22.4458 3.10229C22.2839 2.82184 22.0257 2.57275 21.7265 2.27355L20.6658 3.33421ZM21.7265 6.20182C22.0257 5.90261 22.2839 5.65353 22.4458 5.37307L21.1467 4.62307C21.1084 4.6894 21.0333 4.77367 20.6658 5.14116L21.7265 6.20182ZM21.1467 3.85229C21.2844 4.09077 21.2844 4.38459 21.1467 4.62307L22.4458 5.37307C22.8514 4.67049 22.8514 3.80488 22.4458 3.10229L21.1467 3.85229ZM21.7265 2.27355C21.4272 1.97434 21.1782 1.71615 20.8977 1.55423L20.1477 2.85326C20.214 2.89156 20.2983 2.96671 20.6658 3.33421L21.7265 2.27355ZM18.8588 3.33421C19.2263 2.96672 19.3106 2.89156 19.3769 2.85326L18.6269 1.55423C18.3465 1.71615 18.0974 1.97434 17.7982 2.27355L18.8588 3.33421ZM20.8977 1.55423C20.1951 1.14859 19.3295 1.14859 18.6269 1.55423L19.3769 2.85327C19.6154 2.71558 19.9092 2.71558 20.1477 2.85327L20.8977 1.55423ZM17.358 8.449C17.1624 8.64453 16.8952 8.77096 16.5155 8.8679C16.3253 8.91646 16.1224 8.954 15.8963 8.99307C15.679 9.03061 15.4303 9.07112 15.1909 9.1223L15.5045 10.5891C15.7063 10.546 15.9131 10.5124 16.1517 10.4712C16.3814 10.4315 16.6346 10.3856 16.8866 10.3213C17.3914 10.1924 17.9533 9.97497 18.4186 9.50966L17.358 8.449ZM14.8777 8.80911C14.9289 8.56974 14.9694 8.32097 15.0069 8.1037C15.046 7.87757 15.0835 7.67468 15.1321 7.48447C15.229 7.10477 15.3555 6.83758 15.551 6.64205L14.4903 5.58138C14.025 6.0467 13.8076 6.60863 13.6787 7.11341C13.6144 7.36544 13.5685 7.61864 13.5288 7.84832C13.4876 8.08687 13.454 8.29366 13.4109 8.49546L14.8777 8.80911Z"
                    fill="currentColor"
                  />
                </svg>
                Go to dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center">
        <p className="pt-12 text-sm font-medium text-gray-900 md:pt-16">
          Crafted by ❤️
        </p>
        <Creator />
      </section>
    </>
  );
}
