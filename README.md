# rest-challenge — REST + React Ladder
Next.js 16 App Router. 4 commits = 4 phases. `src/data/users.json` is sorted by id.

## Phases
1. Single fetch (8e573a1) — see docs/01-single-fetch.md
2. Search + pagination + debounce (next commit) — docs/02-search-pagination.md
4. Binary search by id (main) — docs/04-binary-search.md + src/app/binarySearch.ts (do it in React)

## Quick start
npm install && npm run dev

## Reset
git log --oneline
git checkout <sha>          # time-travel to phase
git checkout main           # back to final
cat RESET.md

## Verify flow
Implement → tell Rocksteady "verify me" → auto checks build/lint/curl → switch to next branch/commit.
