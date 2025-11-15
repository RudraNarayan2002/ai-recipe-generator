import Link from "next/link";
import { dancingScript, lusitana, inter } from "../../fonts";

const HomePage = () => {
  return (
    <div className=" flex flex-col  justify-between items-center h-full w-full text-white">
      <div
        className={`${dancingScript.className} antialiased mt-10 text-6xl md:text-8xl font-semibold`}
      >
        TasteCraft
      </div>
      <div className="flex flex-col items-center space-y-6 text-center">
        <span
          className={`${lusitana.className} text-4xl md:text-7xl font-semibold`}
        >
          {" "}
          <span className="text-purple-600  ">Cook</span> Smart.{" "}
          <span className="text-purple-600 ">Eat</span> Better.{" "}
          <span className="text-purple-600">Every Day</span> .{" "}
        </span>
        <span className={`${inter.className} text-xl md:text-3xl font-normal`}>
          Your one stop{" "}
          <span className="text-purple-600 font-semibold text-4xl">AI</span>{" "}
          powered solution to cook your fav dish!
        </span>
        <Link
          href="/aiRecipe"
          className="bg-[#371C81] px-4 py-2 rounded-xl font-semibold cursor-pointer"
        >
          Get Started
        </Link>
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
