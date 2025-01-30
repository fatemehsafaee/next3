import Recipeid from "../../../components/Recipeid";

export async function generateMetadata({ params }) {
  return {
    title: `Recipe - ${params.id}`,
  };
}
function page({ params }) {
  // if (!post) {
  //   return <div>loading...</div>;
  // }
  return <Recipeid params={params} />;
}

export default page;
