ARG app_mode=prod

FROM node as builder

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /src

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

ARG app_mode

# build app for production with minification
RUN npm run build:${app_mode}


FROM nginx

COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

ARG app_mode

COPY --from=builder /src/dist/${app_mode}/ /app
