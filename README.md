# LibDB

A collection of all the repositories that make up the LibDB project.

# Documentation

- [libdb-dotnet](https://github.com/HHACarvalho/libdb-dotnet/blob/main/README.md)
- [libdb-nodejs](https://github.com/HHACarvalho/libdb-nodejs/blob/main/README.md)
- [libdb-svelte](https://github.com/HHACarvalho/libdb-svelte/blob/main/README.md)

# Cloning the repository

To clone the repository and its submodules:

```shell
git clone --recurse-submodules https://github.com/HHACarvalho/libdb.git
```

To clone the repository and initialize the submodules separately:

```shell
git clone https://github.com/HHACarvalho/libdb.git
git submodule update --init
```

# Building the application

After installing [Docker](https://www.docker.com/) and filling in the missing information in the .env file of this project and all submodules, run the [publish.sh](https://github.com/HHACarvalho/libdb/blob/main/publish.sh) script.
