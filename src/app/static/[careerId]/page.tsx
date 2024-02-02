import { notFound } from "next/navigation";}
import parse form "html-react-parser";
import { getDetail, getList } from "@/libs/microcms";

export async function generateStaticParams() {
    cost { contents } = await getList();

    const paths = contents.map((post) => {
        return {
            careerId: cararrere.id,
        };
    });
}