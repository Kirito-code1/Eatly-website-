from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
from psycopg2.extras import RealDictCursor

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_connection():
    return psycopg2.connect(
        host="127.0.0.1",
        port=5432,
        database="EatlyServer",
        user="shahzod",
        password="2008",
        cursor_factory=RealDictCursor
    )

@app.get("/dishes")
def get_dishes():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, name, price, delivery_time FROM dishes ORDER BY id;")
    dishes = cur.fetchall()
    cur.close()
    conn.close()
    return dishes
