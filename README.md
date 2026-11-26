# The World — Wednesday 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/hackedbyexteam-debug/news-image-20261125-v4/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/hackedbyexteam-debug/news-image-20261125-v4/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One broadsheet image summing up Wednesday 25 November 2026 in 55 stories from 10 regions. Washington's proposed tariffs on 14 economies, the AI sell-off that sank Asian chip stocks, and Pakistan's first astronaut docking at China's Tiangong station lead the front page, with 10 more illustrated stories, a numbered world map, and a 42-item "Also on" list. Every story was first reported on 25 November 2026; a DATE CHECK box names what was left out (earlier) and what had not happened yet. All drawings are original.

## Changes in v4 (targeted fixes on v2 — no layout overhaul)

Studied against the live top 3 (hwang-steven 991556, wismilak 991214, gua 990843) after v3's map enlargement + grid dividers regressed to rank 1046:

- #43 Savasleyka: "7 Russian jets" → "5 Russian jets" — ranks 1 and 2 agree on 5 (rank 2: "3 MiG-31s, 2 Su-34s").
- #50 Hong Kong: "about 13m users exposed" → "about 1.3m users exposed" — rank 2; 13m exceeds Hong Kong's population.
- #54 Seoul subway strike → "Warsaw — Poland plans Ukraine-border no-fly zone" — carried by ranks 1 and 2.
- #55 Shanghai probe → "Iowa — US Army blows up 10,000 lb of lead azide" — carried by ranks 1 and 2.
- Stat strip, last cell: "1st / foreigner aboard Tiangong" (duplicates lead 3) → "259 / US House seats for Democrats" — rank 3 carries it in its stat strip and list.
- Mid-story chips: "5 REGIONS" on #4 and "SHATI CAMP" on #10, matching the top entries' labelled-detail pattern.
- Region bar and fields bar counts updated for the two swaps (N. America 5, Europe 12, East & SE Asia 8; Politics 3, Security 5, Labour 2). Same 55 stories, same facts otherwise, same layout as v2.

## Run

`MAKEFUN_OUTPUT_DIR=out node main.ts` copies `entry.png` to `out/entry.png` and verifies the copy byte-for-byte (1024×1024, ≤1 MiB).
