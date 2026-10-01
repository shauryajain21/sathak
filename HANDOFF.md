# HANDOFF: sathak
Updated: 2026-10-01 on Claude Code cloud container

## Current state
Static Inferploy website (unchanged since the 2021 upload). Backup/handoff scaffolding added:
`CLAUDE.md`, `HANDOFF.md`, `.claude/memory/`, `.gitignore`, `.gitattributes`.

## Done last session
- Applied global backup/handoff rules to this repo (home confirmed: shauryajain21/sathak).

## In progress (exact stopping point: file, function, what was being tried)
- Nothing in progress.

## Next steps (in order)
1. Merge the setup PR into `main`.
2. Define the next feature/fix for the site.

## Open questions and pending decisions
- Repo is PUBLIC (rules prefer private). Make it private in GitHub settings if it should not be public.

## Known issues
- Pages must be served over HTTP (jQuery `.load()` fails on `file://`).

## Setup on a new computer
- Tools and versions: git; any static server (e.g. Python 3).
- Build / run / flash commands: `python3 -m http.server 8000`.
- Secret files needed (names only, never values): none.
- Large files kept outside git, and where they are: none.
- Recreate `.claude/settings.local.json` with `autoMemoryDirectory` = absolute path to `.claude/memory`.
