#!/bin/bash

# Create a docker network to enable all the microservices to communicate
docker network create libdb-network

# Stop and remove any existing SQL Server container
docker stop libdb-sqlserver && docker rm libdb-sqlserver

# Create and run the SQL Server container
docker run -d -p 1401:1433 --network libdb-network --name libdb-sqlserver -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Docker@1!" mcr.microsoft.com/mssql/server:2022-latest

cd libdb-dotnet

# Publish the .NET back-end application
./publish.sh

cd ../libdb-svelte

# Publish the Svelte front-end application
#./publish.sh