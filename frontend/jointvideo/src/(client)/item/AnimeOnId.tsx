import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import type { NewAnime } from "../MainPage/types/NewAnimeTypes.ts";
import { TakeAnimeOnId } from "./TakeItemOnIdAction/TakeAnimeOnId.ts";

import { AnimeInfoHeader } from "./components/AnimeInfoHeader.tsx";
import { AnimeInfoHeaderSkeleton } from "./components/AnimeInfoHeaderSkeleton.tsx";
import {AnimeOnIdTSX} from "./components/AnimeOnIdTSX.tsx";

type Episodes = {
    hls_480: string;
    hls_720: string;
    hls_1080: string;
    id: string
    name: string
}

type QueryData = {
    item : NewAnime
    episodes: Episodes[]
}

export const AnimeItemOnId = (): React.ReactNode => {
    const { item } = useParams<{ item: string }>();

    const { data, isLoading } = useQuery<QueryData>({
        queryKey: ["anime", "watching", item],
        queryFn: async () => {
           const res = await TakeAnimeOnId(item!)
            console.log(res)
            return res
        },
        enabled: !!item,
        staleTime: 1000 * 60 * 60,
    });

    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="rounded-2xl bg-neutral-800/60 ring-1 ring-white/5 p-5 flex flex-col gap-6">
                    {isLoading
                        ? <AnimeInfoHeaderSkeleton />
                        : data?.item && <AnimeInfoHeader anime={data.item} />
                    }

                    <AnimeOnIdTSX
                        episodes={data?.episodes}
                    />
                </div>
            </div>
        </div>
    );
};