import os
import logging

from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)

WEBAPP_URL = os.environ.get("WEBAPP_URL", "https://example.com")


def get_token() -> str:
    """Return the Telegram bot token from the environment."""
    return (
        os.environ.get("TELEGRAM_BOT_TOKEN_TEMP")
        or os.environ.get("TELEGRAM_BOT_TOKEN")
        or ""
    )


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [
        [
            InlineKeyboardButton(
                "Play Ultimate Mortal Kombat 3",
                web_app=WebAppInfo(url=WEBAPP_URL),
            )
        ]
    ]
    await update.message.reply_text(
        "Ultimate Mortal Kombat 3 (Sega Genesis) in Telegram:",
        reply_markup=InlineKeyboardMarkup(keyboard),
    )


def main() -> None:
    token = get_token()
    if not token:
        raise RuntimeError(
            "Telegram bot token is missing. Set TELEGRAM_BOT_TOKEN or TELEGRAM_BOT_TOKEN_TEMP."
        )
    application = Application.builder().token(token).build()
    application.add_handler(CommandHandler("start", start))
    logger.info("Bot started")
    application.run_polling()


if __name__ == "__main__":
    main()
