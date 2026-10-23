import {api} from "../../../route/api.ts";

type AnimeSearchType = {
data:{
    animes: {
        id: string;
        name: string;
        russian: string;
        english: string;
        airedOn:{
            year: number
        }
        poster:{
            id: string
            mainUrl: string
        }
    }[]
    }
}

export const SearchAnimeAction = async (userInput: string) => {
    const AnimeSearch = await api.post<AnimeSearchType>('/searchanime', {name: userInput})

    return AnimeSearch.data.animes
}