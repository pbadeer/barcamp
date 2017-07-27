# BarCamp Omaha

This is the website for barcampomaha.org. Read on to learn how the website is built.

## Goals of the Codebase

- Easy for a new developer to begin making changes
- Resistant to obsolescence (minimal dependencies, trust the tried & true)
- Making content changes is easy enough for the moderately technical
- Easy to deploy
- Easy to archive (i.e. for the archive of each year's BarCamp design)
- Fully static site to reduce the need for server-side caching and database calls

## Scripts

Script           | Process Description
-------------    | ------------------------------------------------------------
`npm start`      | When any file in **src/** changes, re-generates the contents of **build/**
`npm run server` | Runs a local server for the contents of **build/**