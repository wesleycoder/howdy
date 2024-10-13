# howdy

Daily journal made simple!
Track your memories and reflect on your day with tags and relations between memories.

> [!NOTE] Context
> This project is being made as part of the Learn With Jason [6th hackaton][1].
<!-- <br/> -->
> [!TIP] Project status
> See the tasks in [TODO.md][2] for more details on the status of the project.

## Main features

> These features are the core of the app and will be considered within the 4h allocated for the hackaton.

- [ ] Create one or multiple journal entries per day
- [ ] Upload images, audio, and video files to a journal entry
- [ ] Add tags to their entries for easy searching and filtering
- [ ] Add relations to previous entries by searching or selecting from a suggested list of previous entries with the same tag

## Secondary features

> These features are outside of the scope of the hackaton but are features that I would like to add in the future.

- [ ] Take photos, record audio or videos using the device's camera/microphone
- [ ] Use AI to suggest tags for the current entry
- [ ] Use AI to suggest relations to previous entries
- [ ] Use AI to generate and attach metadata to their entries (people, places, etc.)
- [ ] Ask user to confirm AI suggestions/metadata and allow editing
- [ ] Use AI to generate an activity suggestion for the user based on previous entries

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.30. [Bun][3] is a fast all-in-one JavaScript runtime.

[1]: https://www.learnwithjason.dev/blog/web-dev-challenge-s1e6-memories-hackathon
[2]: ./docs/TODO.md
[3]: https://bun.sh
