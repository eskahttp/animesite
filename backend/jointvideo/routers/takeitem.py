import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(
    prefix="/takeitem",
    tags=["anime"],
)

class AnimeRequest(BaseModel):
    id: str

@router.post("")
async def get_new_anime(payload: AnimeRequest):

    anime_id = payload.id

    url = "https://shikimori.io/api/graphql"

    query = """
    {
      animes(ids: "__ID__" ) {
        id
        malId
        name
        russian
        licenseNameRu
        english
        synonyms
        rating
        score
        status
        episodes
        episodesAired
        duration
        airedOn { year month day date }
        releasedOn { year month day date }
        season

        poster { id originalUrl mainUrl }

        fandubbers
        licensors
        createdAt
        updatedAt
        nextEpisodeAt

        genres { id name russian kind }

        related {
          id
          anime {
            id
            name
          }
        }

        scoresStats { score count }
        statusesStats { status count }

        description
      }
    }
    """.replace("__ID__", str(anime_id))

    headers = {
        "User-Agent": "MyAnimeApp",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(
            url, json={"query": query}, headers=headers
        )
        if response.status_code != 200:
            raise HTTPException(
                status_code=response.status_code,
                detail="Not found",
            )
        return response.json()