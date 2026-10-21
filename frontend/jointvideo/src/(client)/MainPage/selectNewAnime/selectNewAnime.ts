import {api} from "../../../route/api.ts";
import type {NewAnime} from "../types/NewAnimeTypes.ts";

export async function selectNewAnime() {
    const newAnime = await api.get<{data: {animes: NewAnime[]}}>('/newanime')

    return newAnime.data.animes
}