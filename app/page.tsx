import Image from "next/image";
import AuthLayout from "./(auth)/layout";
import Login from "./(auth)/login/page";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
      <Header />
      <div className="relative z-20 flex items-center bg-white dark:bg-gray-800">
        <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
          <div className="flex flex-col">
            <h1 className="w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl dark:text-white">
              GENSAN IPCR TRAINING CHURVA
            </h1>
            <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-gray-500 dark:text-white">
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
