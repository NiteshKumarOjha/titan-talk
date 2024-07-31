import emoji from "emoji-datasource-apple";

export const funEmojis = emoji
  .filter((e) => e.category !== "Flags")
  .map((e) =>
    e.unified
      .split("-")
      .map((u) => String.fromCodePoint(`0x${u}`))
      .join("")
  );

export const getRandomEmoji = () => {
  return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};
