from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import uvicorn

app = FastAPI()

# Configure CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def init_db():
    conn = sqlite3.connect('app.db')
    conn.close()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize database
    init_db()
    yield
    # Clean up the ML models and release the resources
    # ml_models.clear()

# @app.on_event("startup")
# async def startup_event():
#     init_db()

@app.get("/health")
async def health_check():
    return {"status": "Running", "version": "0.1.0"}

# @app.get("/api/v1")

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=3000)
