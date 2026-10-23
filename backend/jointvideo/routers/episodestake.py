import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from database import db

router = APIRouter(
    prefix="/episodestake",
    tags=["episode"],
)

class AnimeRequest(BaseModel):
    id: str

@router.post("")
async def root(payload: AnimeRequest):
    requestId = payload.id
    episode_id = await db.fetchrow('SELECT anilibria_id FROM anilibria_map WHERE shikimori_id = $1', int(requestId))

    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"https://anilibria.top/api/v1/anime/releases/{episode_id['anilibria_id']}?include=episodes",
        )

        data = response.json()

        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Not found")
        if "message" in data:
            return {"episodes": []}
        return data