import os
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"
ROM_DIR = Path(os.environ.get("ROM_DIR", str(BASE_DIR.parent / "roms"))).resolve()
ROM_NAME = os.environ.get("ROM_NAME", "umk3.md")

app = FastAPI(title="Mortal Kombat Telegram Web App")


@app.get("/")
def root() -> HTMLResponse:
    index_path = STATIC_DIR / "index.html"
    if not index_path.exists():
        raise HTTPException(status_code=404, detail="index.html not found")
    return HTMLResponse(content=index_path.read_text())


@app.api_route("/rom/{filename}", methods=["GET", "HEAD"])
def serve_rom(filename: str) -> FileResponse:
    rom_path = ROM_DIR / filename
    try:
        rom_path.resolve().relative_to(ROM_DIR.resolve())
    except ValueError:
        raise HTTPException(status_code=400, detail="invalid rom path") from None
    if not rom_path.exists():
        raise HTTPException(status_code=404, detail=f"rom {filename} not found")
    return FileResponse(
        str(rom_path),
        media_type="application/octet-stream",
        filename=rom_path.name,
    )


app.mount("/", StaticFiles(directory=str(STATIC_DIR)), name="static")
