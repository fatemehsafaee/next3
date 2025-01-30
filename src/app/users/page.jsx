import User from "@/components/User";
import dynamic from "next/dynamic";

export const metadata = {
  title: "users",
  description: "all users",
};
const Card = dynamic(() => User, {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
function page() {
  // if (path != "/users") {
  //   notFound();
  // }

  return <Card />;
}

export default page;
