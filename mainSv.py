import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import pprint


app = FastAPI()

origins = [
    "http://localhost:5500",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/rankers")
def read_item():
    pp = pprint.PrettyPrinter(indent=4)
    api_key = 'RGAPI-67bfa4b0-7411-4d39-a638-834460fe1545'
    request_header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com/",
        "X-Riot-Token": api_key
    }

    rankers = list(map(lambda x : x['summonerName'], sorted(requests.get(f"https://kr.api.riotgames.com/tft/league/v1/challenger", headers=request_header).json()['entries'], key=lambda x: x['leaguePoints'], reverse=True)))
    return { "arr": rankers }

uvicorn.run(app, host="127.0.0.1", port=8000)