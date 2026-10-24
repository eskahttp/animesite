import socketio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from contextlib import asynccontextmanager
from database import db

from routers import newanime, takeitem, episodestake, searchanime, register, login


@asynccontextmanager
async def lifespan(app: FastAPI):
    await db.connect()
    yield
    await db.disconnect()

app = FastAPI(lifespan=lifespan)
sio = socketio.AsyncServer(async_mode="asgi", cors_allowed_origins="*")
socket_app = socketio.ASGIApp(sio, other_asgi_app=app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(newanime.router)
app.include_router(takeitem.router)
app.include_router(episodestake.router)
app.include_router(searchanime.router)
app.include_router(register.router)
app.include_router(login.router)

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