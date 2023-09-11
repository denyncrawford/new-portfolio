import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { BinanceIcon } from "@/components/icons/Binance.icon.tsx";
import { USDTIcon } from "@/components/icons/USDT.icon.tsx";
import { XLMIcon } from "@/components/icons/XLM.icon.tsx";

const generalCode = `dark:bg-gray-700 bg-gray-200 dark:text-white rounded px-2 ml-auto mr-auto`;

export const SupportSection = () => {
  return (
    <section id="support" class="w-full border-y border-gray-200 dark:border-[#94a3b8] border-dashed">
      <div class="md:px-60 my-20 px-16 relative overflow-hidden">
        <h1 class="text-4xl text-indigo-500">Do you want to support my work?</h1>
        <p class="mt-5 text-gray-400">Currently I only accept crypto payments, if you want to contribute with another method please contact me. <br/> For now
          you can check some of this methods:</p>
        <div class="mt-10 gap-2 flex-col flex">
          <div class="flex flex-col md:flex-row items-left md:items-center mb-2 md:mb-0">
            <div class="flex gap-2 items-center">
              <FaBitcoin name="fa-bitcoin" class="text-indigo-500 w-6 h-6 dark:text-gray-200" />
              <FaEthereum name="fa-ethereum" class="text-indigo-500 w-6 h-6 dark:text-gray-200" />
              <USDTIcon class="text-indigo-500 w-6 h-6 dark:text-gray-200" />
              <XLMIcon class="text-indigo-500 w-6 h-6 dark:text-gray-200" />
            </div>
            <div class="flex md:ml-5 items-center text-gray-400">
              <p><code class={`${generalCode} break-all`}>0x9c83792244a8ee2e5b4c595b001ad8d7173e98bf</code></p>
              <p class="ml-5 text-xs text-yellow-400 font-bold">(BEP20)</p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-left md:items-center text-indigo-500 mb-2 md:mb-0">
            <XLMIcon class="text-indigo-500 w-6 h-6 dark:text-gray-200" />
            <div class="flex md:ml-5 items-center text-gray-400">
              <p><code class={`${generalCode} break-all`}>GCUWODWKWQCOH32U534WWY3GI4GOPXZI2KH3PVYH2FCZ6C2RO32XYKLR</code></p>
              <p class="text-xs text-yellow-400 font-bold ml-5">(XLM)</p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-left md:items-center text-indigo-500 mb-2 md:mb-0">
            <FaBitcoin name="fa-bitcoin" class="text-indigo-500 w-6 h-6 dark:text-gray-200" />
            <div class="flex md:ml-5 items-center text-gray-400">
              <p><code class={`${generalCode} break-all`}>1AwAW9gj7zsHWjoawm1yFntjE69uvEjJTv</code></p>
              <p class="ml-5 text-xs text-yellow-400 font-bold">(BTC)</p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-left md:items-center text-indigo-500 mb-2 md:mb-0">
            <BinanceIcon class="text-indigo-500 w-6 h-6 dark:text-gray-200" />
            <div class="flex md:ml-5 items-center text-gray-400">
              <p><code class={`${generalCode}`}>201620636</code></p>
              <p class="ml-5 text-xs text-yellow-400 font-bold">(PAY)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}