# Use the node:18-slim-buster image as the base image
FROM docker.repos.balad.ir/node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your NestJS application is listening on
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:prod"]
