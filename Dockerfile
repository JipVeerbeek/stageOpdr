# Step 1: Choose a base image for Node.js
FROM node:16 as node

# Step 2: Set the working directory for Node.js
WORKDIR /app

# Step 3: Copy Node.js application files
COPY package.json package-lock.json /app/
RUN npm install

# Step 4: Copy the rest of the Node.js application files
COPY . /app

# Step 5: Build the Angular app
RUN npm run build

# Step 6: Choose a lightweight base image for the Angular app
FROM nginx:alpine

# Step 7: Copy built Angular app to the Nginx HTML directory
COPY --from=node /app/dist /stage-opdr

# Step 8: Expose port 80 for the Angular app
EXPOSE 80

# Step 9: Define the startup command for Nginx
CMD ["nginx", "-g", "daemon off;"]