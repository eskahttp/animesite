import httpx
from fastapi import APIRouter, HTTPException

router = APIRouter(
    prefix="/newanime",
    tags=["anime"],
)

@router.get("")
async def get_new_anime():
    url = "https://shikimori.io/api/graphql"

    query = """
    {
      animes(season: "2026", limit: 16, page: 1) {
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
    """

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