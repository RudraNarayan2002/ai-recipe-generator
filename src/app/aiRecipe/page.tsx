import dynamic from "next/dynamic";

const RecipeDisplayPage = dynamic(
  () => import("../components/RecipeDisplayPage")
);

const Page = () => {
  return <RecipeDisplayPage />;
};

export default Page;
