FROM cypress/base:10

WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json
COPY ./runner.js ./runner.js


<<<<<<< HEAD
RUN npm i 
CMD ["npx", "cypress", "run"]
=======
RUN npm i
>>>>>>> 58cf5d3a8ee2d8dada5c4f0f6f71235f729063b5
