import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/microcms";

export async function generateStaticParams() {
 const { contents } = await getList();

 const paths = contents.map((carrer) => {
  return {
    careerId: carrer.id,
  };
 });

 return [...paths];
}

export default async function StaticDetailPage({
 params: { careerId },
}: {
 params: { careerId: string };
}) {
 const post = await getDetail(careerId);

 // ページの生成された時間を取得
 const time = new Date().toLocaleString();

 if (!post) {
  notFound();
 }

 return (
  <div>
   <h1>{post.name}</h1>
   <h2>{time}</h2>
  </div>
 );
}