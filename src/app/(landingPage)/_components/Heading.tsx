// import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export const Heading = () => {
  return (
    <div className="max-w-4xl space-y-4 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Cook Smart, Eat Better, Every Day. With{" "}
        <span className="hover:underline hover:decoration-wavy hover:text-sky-400 hover:decoration-yellow-200">
          TasteCraft
        </span>
      </h1>
      <h2 className="text-xl lg:text-3xl font-medium">
        {/* <AnimatedShinyText className=""> */}
        Your pocket-chef that turns any dish name into a complete recipe with
        clear steps and exact ingredients.
        {/* </AnimatedShinyText> */}
      </h2>
    </div>
  );
};
