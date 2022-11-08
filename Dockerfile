FROM node:14

WORKDIR / .

RUN npm install i npm@latest -g 

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]