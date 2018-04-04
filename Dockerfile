FROM ubuntu:latest

LABEL maintainer Silver

EXPOSE 80 443 3001

ENV NODE_ENV development

RUN apt-get update -q \
    && apt-get install -y \
    curl \
    git \
    ssh \
    gcc \
    make \
    build-essential \
    libkrb5-dev \
    sudo \
    apt-utils \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN sudo apt-get install -yq nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm install --quiet -g bower

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY bower.json .
COPY .bowerrc .
RUN bower install --quiet --allow-root