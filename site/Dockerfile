# Use Node.js official image as a base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port Vite will use
EXPOSE 5173

# Start the Vite server using npm
CMD ["npm", "run", "dev"]

