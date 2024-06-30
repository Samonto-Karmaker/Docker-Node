# Docker-Node Project

This project demonstrates a basic setup for containerizing a Node.js application using Docker. The application is a simple Express server that returns a JSON message on the root route. This repo also contains a docker notes folder that has useful docker commends and an example docker-compose.yaml file for MongoDB and Mongo Express. For more information check out the official documentation [Docker's official documentation](https://docs.docker.com/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker installed on your local machine. You can download it from [Docker's official website](https://www.docker.com/products/docker-desktop).

### Installing

To run this project, you need to pull the image from Docker Hub and run it using Docker.

1. Pull the image from Docker Hub:

```sh
docker pull samontokarmaker/my-first-image
```

2. Run the container:
```sh
docker run -p 3000:3000 samontokarmaker/my-first-image
```

This command will start the container and map port 3000 of the container to port 3000 on your host, allowing you to access the application at http://localhost:3000.

## Built With
1. Node.js - The runtime environment

2. Express - The web framework used

3. Docker - Containerization platform

## Authors
Samonto Karmaker