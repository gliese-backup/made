import { useState } from "react";
import { Button } from "@heroui/react";

function Emote() {
  const [emoji, setEmoji] = useState("😈");

  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-6xl">{emoji}</h1>
      <EmojiSelect setEmoji={setEmoji} />
    </div>
  );
}

function EmojiSelect({ setEmoji }) {
  const emojis = "😀,😈,😑,🤨,🙁,😠,🫢,👻".split(",");

  console.log(emojis);

  return (
    <div className="flex gap-1 flex-wrap justify-center">
      {emojis.map((emoji, index) => {
        return (
          <Button
            key={index}
            variant="flat"
            className="text-2xl"
            onPress={() => setEmoji(emoji)}
          >
            {emoji}
          </Button>
        );
      })}
    </div>
  );
}

export default Emote;
