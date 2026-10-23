import {api} from "../../../route/api.ts";
import type {AnimesResponse} from "../../MainPage/types/NewAnimeTypes.ts";

type Episodes = {
    episodes: {
        hls_480: string;
        hls_720: string;
        hls_1080: string;
        id: string
        name: string
    }[]
}

export const TakeAnimeOnId = async (animeId:string) => {
    const item = await api.post<AnimesResponse>('/takeitem', {id: animeId})
    const episodes = await api.post<Episodes>('/episodestake', {id: animeId})

    return {item: item.data.animes[0], episodes: episodes.episodes};
}