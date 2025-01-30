import Userid from "@/components/Userid";
export async function generateMetadata({ params }) {
  return {
    title: `user - ${params.id}`,
  };
}
function page({ params }) {
  // if (!user) {
  //   return <div>loading...</div>;
  // }

  return <Userid params={params} />;
}

export default page;
