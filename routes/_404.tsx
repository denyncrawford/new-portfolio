import { Head } from "fresh/runtime";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 flex items-center justify-center mx-10 md:mx-auto min-h-screen dark:bg-[#0f172a]">
        <div class="max-w-screen-md mx-auto flex flex-col md:items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold dark:text-white">
            404 - Page not found :(
          </h1>
          <p class="my-4 dark:text-gray-300">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="underline dark:text-indigo-500">Go back home</a>
        </div>
      </div>
    </>
  );
}
