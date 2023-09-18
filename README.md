# CARDLE

Wordle-like car game built for the car enthusiast. You have 5 tries to guess the right make model and year of the car displayed in the image.
Cars are updated daily. After completion check your current score streak and share your score with friends with an emoji grid representation of your result.

## Tech Stack

**Client:** React, Typescript, SASS

**Server:** Node, Strapi

**Database:** PostgreSQL

## API Reference

The application uses [Strapi](https://strapi.io/) for API references and for content management in the backend to update car data.

Data was programatically migrated from [NHSTA's vehicle API](https://vpic.nhtsa.dot.gov/api/) to the PostgreSQL database to initialize data for the inputs.
