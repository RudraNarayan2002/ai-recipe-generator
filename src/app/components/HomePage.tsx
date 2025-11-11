import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className=" flex flex-col  justify-between items-center h-full w-full text-white">
      <div className="mt-10 text-8xl">TasteCraft</div>
      <div className="flex flex-col items-center space-y-4">
        <span className="text-7xl font-semibold">
          {" "}
          Cook Smart. Eat Better. Every Day.{" "}
        </span>
        <span className="text-3xl font-normal">
          Your one stop AI powered solution to make your fav dish!
        </span>
      </div>
      {/* Footer */}
      <div className="w-full text-center py-4">
        <Link
          href="https://github.com/RudraNarayan2002"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
          Made with ❤️ by Rudra<sup>&copy;</sup>.
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
