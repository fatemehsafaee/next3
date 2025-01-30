import Post from "@/components/Post";
import dynamic from "next/dynamic";

export const metadata = {
  title: "posts",
  description: "user posts",
};
const Card = dynamic(() => Post, {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
function page() {
  // if (path != "/posts") {
  //   notFound();
  // }

  return <Card />;
}

export default page;
