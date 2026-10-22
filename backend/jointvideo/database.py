import asyncpg
from configbd import settings

class Database:
    pool: asyncpg.Pool | None = None

    @classmethod
    async def connect(cls):
        cls.pool = await asyncpg.create_pool(
            host=settings.DB_HOST,
            port=settings.DB_PORT,
            user=settings.DB_USER,
            password=settings.DB_PASSWORD,
            database=settings.DB_NAME,
            min_size=1,
            max_size=10,
        )

    @classmethod
    async def disconnect(cls):
        if cls.pool:
            await cls.pool.close()

    @classmethod
    async def fetch(cls, query: str, *args):
        async with cls.pool.acquire() as conn:
            return await conn.fetch(query, *args)

    @classmethod
    async def fetchrow(cls, query: str, *args):
        async with cls.pool.acquire() as conn:
            return await conn.fetchrow(query, *args)

    @classmethod
    async def execute(cls, query: str, *args):
        async with cls.pool.acquire() as conn:
            return await conn.execute(query, *args)

db = Database()