from argon2 import PasswordHasher
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from database import db

router = APIRouter(
    prefix="/login",
    tags=["login"],
)

ph = PasswordHasher()

class LoginRequest(BaseModel):
    login: str
    password: str


@router.post("")
async def login(request: LoginRequest):
    # Добавить валидацию на длину всего

    user_info = await db.fetchrow('SELECT id,login,nickname,email,password FROM users WHERE login = $1 OR email = $1', request.login)
    try:
        ph.verify(user_info["password"], request.password)
        return user_info
    except:
        raise HTTPException(status_code=404, detail="Incorrect username or password")