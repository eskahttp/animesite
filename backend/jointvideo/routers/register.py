from argon2 import PasswordHasher
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from database import db

router = APIRouter(
    prefix="/register",
    tags=["register"],
)

ph = PasswordHasher()

class RegisterRequest(BaseModel):
    login: str
    nickname: str
    email: str
    password: str

@router.post("")
async def register(request: RegisterRequest):
    checkUser = await db.fetchrow('SELECT login,email FROM users WHERE login = $1 OR email = $2', request.login, request.email)
    if checkUser:
        if checkUser["login"] == request.login and checkUser["email"] == request.email:
            raise HTTPException(
                status_code=400,
                detail="Логин и email уже заняты",
            )
        if checkUser["login"] == request.login:
            raise HTTPException(
                status_code=400,
                detail="Такой логин уже занят",
            )
        if checkUser["email"] == request.email:
            raise HTTPException(
                status_code=400,
                detail="Такой email уже занят",
            )
    hashed_password = ph.hash(request.password)
    await db.execute(
        'INSERT INTO users (login,nickname ,email, password) VALUES ($1, $2, $3, $4)'
        , request.login, request.nickname, request.email, hashed_password
    )

    return {"message": "registered", "ok": True}