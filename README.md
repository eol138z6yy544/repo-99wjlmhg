# Ultimate Mortal Kombat 3 — Telegram Web App

A Telegram Mini App that runs a Sega Genesis / Mega Drive emulator (Nostalgist.js + Genesis Plus GX) in the browser, loaded with `Ultimate Mortal Kombat 3`.

## What it does

- Serves a web app with a JavaScript Genesis emulator.
- Serves the provided `.md` ROM file at `/rom/umk3.md`.
- Provides a Telegram bot that sends a `Play` button opening the Mini App.

## Quick start

1. Place your legally obtained ROM file at `roms/umk3.md`.
2. Install:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   pip install -e .
   ```
3. Expose the web app with an HTTPS URL (e.g. `cloudflared tunnel --url http://localhost:8000` or ngrok).
4. Run the bot:
   ```bash
   TELEGRAM_BOT_TOKEN=<your_bot_token> WEBAPP_URL=<your_https_url> uvicorn app.main:app --host 0.0.0.0 --port 8000
   # in another shell
   WEBAPP_URL=<your_https_url> python app/bot.py
   ```
5. Open Telegram, message your bot `/start`, and tap the button.

## Controls

- D-Pad: arrow keys
- A / B / C: A / S / D
- Start: Enter

## Notes

- The ROM itself is **not** committed to the repository.
- The emulator core and RetroArch assets are loaded from jsDelivr by Nostalgist.js.
