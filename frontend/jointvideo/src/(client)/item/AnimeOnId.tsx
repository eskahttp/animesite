import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import type { NewAnime } from "../MainPage/types/NewAnimeTypes.ts";
import {TakeAnimeBanner, TakeAnimeEpisodes} from "./TakeItemOnIdAction/TakeAnimeBanner.ts";

import { AnimeInfoHeader } from "./components/AnimeInfoHeader.tsx";
import { AnimeInfoHeaderSkeleton } from "./components/AnimeInfoHeaderSkeleton.tsx";
import {AnimeOnIdTSX} from "./components/AnimeOnIdTSX.tsx";
import {AnimeOnIdSkeleton} from "./components/AnimeOnIdSkeleton.tsx";

type Episodes = {
    hls_480: string;
    hls_720: string;
    hls_1080: string;
    id: string
    name: string
}

export const AnimeItemOnId = (): React.ReactNode => {
    const { item } = useParams<{ item: string }>();

    const bannerQuery = useQuery<NewAnime>({
        queryKey: ["anime", "banner", item],
        queryFn: async () => TakeAnimeBanner(item!),
        enabled: !!item,
        staleTime: 1000 * 60 * 60,
    });

    const episodesQuery = useQuery<Episodes[]>({
        queryKey: ["anime", "episodes", item],
        queryFn: async () => TakeAnimeEpisodes(item!),
        enabled: !!item,
        staleTime: 1000 * 60 * 60,
        retry: false
    });

    const episodeQueryFN = ()=> {
        if (episodesQuery.data === undefined || episodesQuery.data.length === 0) return <AnimeOnIdSkeleton/>
        return <AnimeOnIdTSX episodes={episodesQuery.data}/>
    }

    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="rounded-2xl bg-neutral-800/60 ring-1 ring-white/5 p-5 flex flex-col gap-6">
                    {bannerQuery.isLoading
                        ? <AnimeInfoHeaderSkeleton />
                        : bannerQuery.data && <AnimeInfoHeader anime={bannerQuery.data} />
                    }

                    {episodeQueryFN()}
                </div>
            </div>
        </div>
    );
};