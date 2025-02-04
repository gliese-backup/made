import { Button } from "@heroui/react";
import React from "react";

function Emote() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-6xl">😀</h1>
      <EmojiSelect />
    </div>
  );
}

function EmojiSelect() {
  const emojis = "😀,😈,😑,🤨,🙁,😠,🫢,👻".split(",");

  console.log(emojis);

  return (
    <div className="flex gap-1 flex-wrap justify-center">
      {emojis.map((emoji, index) => {
        return (
          <Button key={index} variant="flat">
            {emoji}
          </Button>
        );
      })}
    </div>
  );
}

export default Emote;
