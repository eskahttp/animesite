import httpx
from fastapi import APIRouter, HTTPException


router = APIRouter(
    prefix="/episodestake",
    tags=["anime"],
)

@router.get("/episodestake")
async def root():
    async with httpx.AsyncClient() as client:
        response = await client.get(
            "https://anilibria.top/api/v1/anime/releases/8674"
        )
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Not found")
        return response.json()