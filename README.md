# OBS Ask Me Anything Question Overlay

Allows you to display questions in OBS during an AMA session.

Put your questions into `questions.json` and then `yarn start`. Point an OBS browser
source to `127.0.0.1:8181`.

## Run

```
yarn start
```

## Load next question

```
curl http://127.0.0.1:8181/next
```
