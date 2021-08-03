# visual-regression-compare

# playwright

setup:

```
cd playwright
npm i
```

test

`docker run --rm -w /app -v $(pwd):/app mcr.microsoft.com/playwright:focal npm test`

update snapshots

`docker run --rm -w /app -v $(pwd):/app mcr.microsoft.com/playwright:focal npm run updateSnapshots`

# cypress

setup:

```
cd cypress
npm i
```

connect to docker container and install cypress

```
docker run --rm -w -it /app -v $(pwd):/app cypress/browsers /bin/bash
npx cypress install
```

test (within container)

`npm test`

update snapshots (within container)

`npm run updateSnapshots`
