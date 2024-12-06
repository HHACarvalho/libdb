# Use the latest Node.js alpine runtime image
FROM node:alpine AS build_application
WORKDIR /app/

# Copy the bootstrap script
COPY ./index.js ./
COPY ./utils.js ./
COPY ./dotnet.js ./
COPY ./nodejs.js ./

# Run the bootstrap script
ENTRYPOINT ["node", "index.js"]