import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(
    prefix="/searchanime",
    tags=["search"],
)

class AnimeNameRequest(BaseModel):
    name: str

@router.post("")
async def get_anime_on_name(request: AnimeNameRequest):
    anime_name = request.name

    url = "https://shikimori.io/api/graphql"

    query = """ {
    animes(search: "__NAME__", limit: 10) {
    id
    name
    russian
    english
    franchise
    airedOn { year }

    poster { id originalUrl mainUrl }
    }
            }""".replace("__NAME__", anime_name)

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
            raise HTTPException(status_code=response.status_code, detail="Not found")

        return response.json()