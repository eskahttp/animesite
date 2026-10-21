import socketio
import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
sio = socketio.AsyncServer(async_mode="asgi", cors_allowed_origins="*")
socket_app = socketio.ASGIApp(sio, other_asgi_app=app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Response(BaseModel):
    login:str
    password:str

@app.post("/auth/login")
def login(response: Response):
    response.set_cookie(
        key="ghtAnim",
        value="jwt-или-session-id",
        httponly=True,
        secure=False,   # True в проде (только по HTTPS)
        samesite="lax",
    )
    return {"ok": True}

@sio.event
async def connect(sid, environ, auth):
    print("connect", sid)

@sio.on("myMessage")
async def chat(sid, data):
    await sio.emit('newMessage',data)

@sio.event
async def disconnect(sid):
    print("disconnect", sid)

@app.get("/newanime")
async def root():
    async with httpx.AsyncClient() as client:
        response = await client.get(
            "https://anilibria.top/api/v1/anime/releases/latest?limit=16&include=id%2Cyear%2Cname%2Cposter%2Cshikimori%2Cgenres%2Clatest_episode"
        )
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Not found")
        return response.json()