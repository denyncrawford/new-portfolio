import { ErrorPageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Error500Page({ error }: ErrorPageProps) {
  // return <p>500 internal error: {(error as Error).message}</p>;
  return (
    <>
      <Head>
        <title>500 - Something went wrong :(</title>
      </Head>
      <div class="px-4 py-8 flex items-center justify-center mx-auto min-h-screen dark:bg-[#0f172a]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold dark:text-white">500 - Something went wrong :(</h1>
          <p class="my-4 dark:text-gray-300">
            The page you were looking is not available.
          </p>
          <a href="/" class="underline dark:text-indigo-500">Go back home</a>
        </div>
      </div>
    </>
  )
}