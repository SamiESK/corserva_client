This repository houses the client side services of Corserva's PERN challenge application.

This run this application, you must first run the following commands in the backend first. Then after the backend build is completed, you may now run the following commands in the terminal in the root directory of corserva_client folder.

1. `docker compose build`
2. `docker compose up`

NOTE: You can exit out the docker terminal by typing `docker compose up -d` after building the docker container.

The front end will now be viewable at `http://localhost:3000`

To shutdown containers, run `docker compose down`

To run Prettier / ESLint, enter `npm run lint` to sort through and check if any error exist. To fix any found errors, enter `npm run lint:fix` to fix through found errors.
