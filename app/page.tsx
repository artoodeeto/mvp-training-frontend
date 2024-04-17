import Image from "next/image";
import Header from "./components/Header";

export default function Main() {
  return (
    <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
      <Header />
      <div className="relative z-20 flex items-center bg-white dark:bg-gray-800">
        <div className="container relative mx-auto flex flex-col items-center justify-between px-6 py-8">
          <div className="flex flex-col">
            <h1 className="w-full text-center text-4xl font-light uppercase text-gray-800 sm:text-5xl dark:text-white">
              GENSAN IPCR TRAINING CHURVA
            </h1>
            <h2 className="mx-auto w-full max-w-2xl py-8 text-center text-xl font-light text-gray-500 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem
              architecto, deleniti praesentium provident sed similique maiores,
              iusto culpa accusantium ad accusamus, facere laudantium vitae
              temporibus cupiditate sunt error dolor!
            </h2>
          </div>
          <div className="flex flex-row">
            <Image
              className="relative"
              src="/undraw.svg"
              alt="Next.js Logo"
              width={680}
              height={100}
              priority
            />

            <Image
              className="relative"
              src="/undraw01.svg"
              alt="Next.js Logo"
              width={580}
              height={100}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
