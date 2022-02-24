FROM node:17
MAINTAINER "sudheer reddy duba <info@sudheerdevops.com>"
COPY . /app
WORKDIR /app
RUN npm rebuild
RUN npm install --no-fund
EXPOSE 8080
CMD ["npm", "start"]
