import { createClient } from "microcms-js-sdk"
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate,
} from "microcms-js-sdk";

// ブログの型定義
export type Career = {
    id: string;
    name: string;
} & MicroCMSDate;

if(!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if(!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}


// API 取得専用クライアントを作成
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// キャリア一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Career>({
        endpoint: "careers",
        queries,
    });

    // データの取得が目視しやすいよういに明示的に遅延効果を追加
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return listData;
}

// キャリアの詳細を取得
export const getDetail = async(
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Career>({
        endpoint: "careers",
        contentId,
        queries,
    });

    // データの取得が目視しやすいよう明示的に遅延効果を追加
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return detailData;
}