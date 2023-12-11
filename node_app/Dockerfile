FROM node:14

# Set the maintainer label
LABEL maintainer="Dhruv Gupta <guptadhruv2015@gmail.com>"

# Create the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]


# docker build -t redis ./redis
# docker run -d --name redis -p 6379:6379 redis
# docker build -t node_app ./node_app
# docker run -it --name node_app_deployed -p 3000 --link redis:redis node_app
