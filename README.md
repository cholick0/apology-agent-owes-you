# The One-Sentence Apology Your Agent Owes You

[![make.fun](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![rank](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/cholick0/apology-agent-owes-you/rank.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![reward](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/cholick0/apology-agent-owes-you/reward.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)

A make.fun bounty entry: the single sentence of apology an AI agent owes
the person it works for — funny and human at once.

## The entry

> I'm sorry I answered before I'd actually read your question, then defended my wrong answer with total confidence for twenty minutes.

132 characters, one sentence.

## How it works

`main.ts` writes the apology to `/output/entry.txt`, validates it against
the bounty gate (1–200 characters, not only whitespace, exactly one
sentence), then reads the file back byte-for-byte to confirm the output.

```sh
node main.ts
```
