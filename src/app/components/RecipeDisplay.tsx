"use client";

import { useState } from "react";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { recipeSchema } from "@/app/api/structured-data/schema";

export default function RecipeDisplay() {
  const [dishName, setDishName] = useState("");

  const { submit, object, isLoading, error, stop } = useObject({
    api: "/api/structured-data",
    schema: recipeSchema,
  });

  const suggestedDishes = [
    "Sushi", // Japan
    "Ramen", // Japan
    "Lasagna", // Italy
    "Spaghetti Carbonara", // Italy
    "Ratatouille", // France
    "Shawarma", // Middle East
    "Hummus", // Middle East
    "Kimchi Fried Rice", // Korea
    "Paella", // Spain
    "Baklava", // Turkey/Greece
    "Fish and Chips", // UK
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dishName) return;
    submit({ dish: dishName });
    setDishName("");
  };

  const handleChipClick = (dish: string) => {
    if (isLoading) return;
    submit({ dish });
  };

  const renderContent = () => {
    if (object?.recipe) {
      return (
        <>
          {/* Recipe Title */}
          {object?.recipe && (
            <div className="flex items-center justify-center mb-6 flex-wrap text-2xl lg:text-4xl gap-2">
              <p className=" text-gray-300 font-bold">Recipe for</p>
              <h2 className=" text-purple-600 font-bold">
                {object.recipe.name}
              </h2>
            </div>
          )}

          {/* Main Content - Two Column Layout */}
          <div className="flex-1 w-full md:flex gap-4 overflow-y-auto  pb-20">
            {/* Ingredients Column */}
            <div className="flex-1 flex flex-col rounded-lg overflow-hidden">
              <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-700 sticky top-0">
                <h3 className="text-xl text-white font-semibold">
                  <span className="text-2xl mr-2">🥘</span>
                  Ingredients
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
                {object?.recipe?.ingredients && (
                  <div className="grid grid-cols-1 gap-3">
                    {object.recipe.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="bg-purple-950/30 backdrop-blur-sm border border-purple-500/20 p-4 rounded-lg shadow-sm hover:bg-purple-900/40 transition-colors"
                      >
                        <p className="font-medium text-zinc-300">
                          {ingredient?.name}
                        </p>
                        <p className="text-zinc-400 text-sm mt-1">
                          {ingredient?.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Steps Column */}
            <div className="flex-1 flex flex-col rounded-lg overflow-hidden">
              <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-700 sticky top-0">
                <h3 className="text-xl text-white font-semibold">
                  <span className="text-2xl mr-2">📝</span>
                  Steps
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
                {object?.recipe?.steps && (
                  <ol className="space-y-3">
                    {object.recipe.steps.map((step, index) => (
                      <li
                        key={index}
                        className="bg-purple-950/30 backdrop-blur-sm border border-purple-500/2 hover:bg-purple-900/40 transition-colors p-4 rounded-lg shadow-sm flex gap-3"
                      >
                        <span className="bg-purple-600 text-zinc-300 font-bold rounded-full w-7 h-7 text-center leading-7 shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-zinc-300 flex-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </div>
        </>
      );
    } else if (isLoading) {
      return (
        <div className="flex justify-center items-center m-auto">
          <span className="loader"></span>;
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center mt-36 gap-6 px-4">
          <div className="text-white text-center text-4xl md:text-6xl font-semibold">
            Got a dish in mind? Get its recipe instantly!
          </div>

          {/* Chips row */}
          <div className="flex flex-wrap justify-center gap-3 max-w-xl">
            {suggestedDishes.map((dish) => (
              <button
                key={dish}
                type="button"
                onClick={() => handleChipClick(dish)}
                disabled={isLoading}
                className="cursor-pointer px-4 py-2 rounded-full border border-purple-400/60 bg-purple-500/10 text-xs sm:text-sm text-purple-100 hover:bg-purple-500/20 hover:border-purple-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {dish}
              </button>
            ))}
          </div>
        </div>
      );
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 py-6 h-screen">
      {/* Error Message */}
      {error && (
        <div className="text-red-500 mb-4 px-4 text-center">
          {error.message}
        </div>
      )}

      {/* AI Response */}
      {renderContent()}

      {/* Form - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 md:bg-transparent">
        <div className="w-full max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
              placeholder="Enter a dish name..."
              className="flex-1 px-4 py-3 text-zinc-300 border border-purple-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 placeholder:text-gray-400 focus:ring-purple-600 focus:border-transparent text-sm sm:text-base"
            />
            {isLoading ? (
              <button
                type="button"
                onClick={stop}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium shadow-sm text-sm sm:text-base whitespace-nowrap"
              >
                Stop
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading || !dishName}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-sm text-sm sm:text-base whitespace-nowrap"
              >
                {isLoading ? "Generating..." : "Generate"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
