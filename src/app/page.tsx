import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./components/HomePage"));

const Page = () => {
  return <HomePage />;
};

export default Page;
