import Postid from "@/components/Postid";

export async function generateMetadata({ params }) {
  return {
    title: `Post - ${params.id}`,
  };
}
function page({ params }) {
  // if (!post) {
  //   return <div>loading...</div>;
  // }
  return <Postid params={params} />;
}

export default page;
