# Docker Commands Cheat Sheet

## Basic Docker Commands

### List Docker Images
```sh
docker images
```
Lists all Docker images available locally, showing information such as repository, tag, image ID, creation time, and size.

### List Running Containers
```sh
docker ps
```
Displays all currently running Docker containers, including their IDs, image names, creation times, and status.

### List All Containers (including stopped)
```sh
docker ps -a
```
Shows all Docker containers, regardless of status (running, exited, etc.), providing a comprehensive view of all containers on the system.

### Run a Docker Container
```sh
docker run -d -p HOST_PORT:CONTAINER_PORT --name CONTAINER_NAME IMAGE_NAME
```
Starts a new Docker container from an image. -d runs the container in detached mode (in the background), -p maps a port on the host to a port in the container, and --name assigns a custom name to the container.

### Stop a Running Container
```sh
docker stop CONTAINER_NAME
```
Stops a running container gracefully by sending a SIGTERM signal. If the container doesn't stop within a grace period, a SIGKILL signal is sent.

### Remove a Stopped Container
```sh
docker rm CONTAINER_NAME
```
Permanently removes a container from the system. The container must be stopped before it can be removed.

### Remove a Docker Image
```sh
docker rmi IMAGE_NAME
```
Deletes a Docker image from the local storage. Any containers based on the image must be removed before the image can be deleted.

## Docker Volumes

### Create a Docker Volume
```sh
docker volume create VOLUME_NAME
```
Creates a new volume that can be attached to containers to persist data.

### List Docker Volumes
```sh
docker volume ls
```
Displays a list of all Docker volumes on the system, including their names.

### Inspect a Docker Volume
```sh
docker volume inspect VOLUME_NAME
```
Provides detailed information about a specific volume, such as its mount point and options.

### Remove a Docker Volume
```sh
docker volume rm VOLUME_NAME
```
Deletes a volume. The volume must not be in use by any containers.

## Docker Networks

### Create a Docker Network
```sh
docker network create NETWORK_NAME
```
Creates a new network that containers can connect to for inter-container communication.

### List Docker Networks
```sh
docker network ls
```
Shows all networks created on the Docker host, helping you manage and configure network settings.

### Inspect a Docker Network
```sh
docker network inspect NETWORK_NAME
```
Provides detailed information about a specific network, including which containers are connected to it.

### Run a Container on a Specific Network
```sh
docker run -d -p HOST_PORT:CONTAINER_PORT --name CONTAINER_NAME --network NETWORK_NAME IMAGE_NAME
```
Starts a container and connects it to a specified network, allowing it to communicate with other containers on the same network.

## Docker Logs

### View Logs of a Container
```sh
docker logs CONTAINER_NAME
```
Displays the logs of a container, useful for debugging and monitoring the application running inside the container.

### Follow Logs of a Container in Real-Time
```sh
docker logs -f CONTAINER_NAME
```
Tails the logs of a container, showing log output in real-time, which is useful for live monitoring of container activity.

### View Last 10 Lines of Logs
```sh
docker logs --tail 10 CONTAINER_NAME
```
Shows the last 10 lines of a container's logs, helping quickly diagnose recent issues or activity.

## Docker Compose Commands

### Build and Start Services
```sh
docker-compose up --build
```
Builds images before starting the containers defined in a docker-compose.yml file, ensuring that any changes to the Dockerfile or build context are included.

### Start Services
```sh
docker-compose up
```
Starts all services defined in the docker-compose.yml file. If the images do not exist, Docker Compose will attempt to build them.

### Stop Services
```sh
docker-compose down
```
Stops and removes all containers, networks, and volumes defined in the docker-compose.yml file, cleaning up all resources.

### List Running Services
```sh
docker-compose ps
```
Lists all currently running services defined in the docker-compose.yml file, showing their status and port mappings.

### View Logs of All Services
```sh
docker-compose logs
```
Aggregates and displays the logs of all services, useful for debugging issues when running multiple containers.

### Follow Logs of All Services in Real-Time
```sh
docker-compose logs -f
```
Follows the logs of all services in real-time, providing a live view of the output from all containers.

## Useful Tips

- **Persisting Data**: Use volumes to persist data for databases.
- **Networking**: Use custom networks to allow containers to communicate with each other.
- **Logs**: Use `docker logs` and `docker-compose logs` to debug and monitor your containers.
