import dynamic from "next/dynamic";

const RecipeDIsplayPage = dynamic(
  () => import("../components/RecipeDIsplayPage")
);

const Page = () => {
  return <RecipeDIsplayPage />;
};

export default Page;
