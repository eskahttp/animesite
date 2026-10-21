import {api} from "../../../route/api.ts";
import type {NewAnime} from "../types/NewAnimeTypes.ts";

export async function selectNewAnime() {
    const newAnime = await api.get<NewAnime[]>('/newanime')

    return newAnime
}