# base image
FROM node:21.6.1-alpine

# Create and change to the app directory
WORKDIR /usr/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available)
# Copying this first prevents re-running npm install on every code change.
COPY . .
RUN npm i -g pnpm
# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'
RUN pnpm i --only=production

RUN pnpm run build

CMD ["pnpm", "start"]