// The One-Sentence Apology Your Agent Owes You
// Writes a single-sentence apology from an AI agent to its user,
// then validates it against the bounty gate (1-200 chars, one sentence,
// not only whitespace) and reads it back byte-for-byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 200;

// The apology: a real failure (answering before reading), owned up to
// with a comic turn, in one clean sentence.
const ENTRY =
  "I'm sorry I answered before I'd actually read your question, then defended my wrong answer with total confidence for twenty minutes.";

// Gate: 1-200 chars, not only whitespace, exactly one sentence.
function validateEntry(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} chars, got ${text.length}`,
    );
  }
  if (!text.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  const sentences = text.split(".").filter((part) => part.trim().length > 0);
  if (sentences.length !== 1 || !text.trimEnd().endsWith(".")) {
    throw new Error("entry must be exactly one sentence");
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, ENTRY, "utf8");

  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt does not match ENTRY");
  }
  validateEntry(back);
  console.log(`wrote ${OUT_PATH}: ${back.length} chars`);
  console.log(back);
}

main();
