"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MoodEmoji() {
  const [mood, setMood] = useState("");
  const [emojiSeq, setEmojiSeq] = useState("");

  const generateEmoji = () => {
    const moodLower = mood.toLowerCase();
    let seq = "";
    if (moodLower.includes("happy") || moodLower.includes("joy")) {
      seq = "😄😃😀";
    } else if (moodLower.includes("sad") || moodLower.includes("blue")) {
      seq = "😢😭😞";
    } else if (moodLower.includes("angry") || moodLower.includes("mad")) {
      seq = "😠😡🤬";
    } else if (moodLower.includes("surprised") || moodLower.includes("wow")) {
      seq = "😲😮😯";
    } else if (moodLower.includes("love") || moodLower.includes("heart")) {
      seq = "😍😘💖";
    } else {
      seq = "🤔🤷‍♂️🤷‍♀️";
    }
    setEmojiSeq(seq);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <Input
        placeholder="Enter your mood..."
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="w-64"
      />
      <Button onClick={generateEmoji} variant="outline">
        Convert to Emoji
      </Button>
      {emojiSeq && (
        <div className="text-4xl mt-4">{emojiSeq}</div>
      )}
    </div>
  );
}
