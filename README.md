# visual-regression-compare

# playwright

```
cd playwright
npm i
npm test
```

update snapshots

`docker run --rm -w /app -v $(pwd):/app mcr.microsoft.com/playwright:focal npm test -- --update-snapshots`
