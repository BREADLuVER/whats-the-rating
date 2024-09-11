# frontend/Dockerfile

# Use the official Node.js image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json (if available) first
# This is to ensure Docker uses the cache efficiently and only runs npm install when dependencies change
COPY package.json /app/
COPY package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . /app/

# Expose the port the app runs on
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]

