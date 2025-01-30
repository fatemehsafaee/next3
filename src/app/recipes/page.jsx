import Recipe from "@/components/Recipe";
import dynamic from "next/dynamic";

export const metadata = {
  title: "recipes",
  description: "post recipes",
};
const Card = dynamic(() => Recipe, {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
function page() {
  return <Card />;
}

export default page;
