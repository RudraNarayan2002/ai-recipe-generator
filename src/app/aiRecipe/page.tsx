import dynamic from "next/dynamic";

const RecipeDisplayPage = dynamic(() => import("../components/RecipeDisplay"));

const Page = () => {
  return <RecipeDisplayPage />;
};

export default Page;
