#!/bin/bash

# Stop and remove any containers
docker-compose down

# Build all images and run every container
docker-compose run --rm --build bootstrap