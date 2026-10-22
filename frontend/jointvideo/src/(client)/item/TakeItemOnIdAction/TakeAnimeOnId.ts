import {api} from "../../../route/api.ts";
import type {AnimesResponse} from "../../MainPage/types/NewAnimeTypes.ts";

export const TakeAnimeOnId = async (animeId:string) => {
    const item = await api.post<AnimesResponse>('/takeitem', {id: animeId})
    const episodes = await api.post('/episodestake', {id: animeId})
    console.log(episodes)

    return item.data.animes[0];
}