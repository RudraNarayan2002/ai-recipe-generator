// import HomePage from "./_components/HomePage";

// export default function Home() {
//   return (
//     <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
//       <HomePage />
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";

import { Heading } from "./_components/Heading";

// import { Button } from "@/components/ui/button";
// import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between group w-full space-y-4 mb-4 text-center gap-5">
      <Link
        href="https://github.com/aarabii/crafto"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4"
      >
        {/* <AnimatedGradientText className="px-6 py-2 rounded-full"> */}
        <Star className="w-6 h-6 fill-yellow-200 text-yellow-300" />
        <hr className="mx-2 h-4 w-px bg-zinc-100" />
        Star on github
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        {/* </AnimatedGradientText> */}
      </Link>

      <Heading />

      <button
        // variant="outline"
        onClick={() => router.push("/create")}
        className="mt-4"
      >
        Get Started
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}
