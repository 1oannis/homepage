# [1oannis.com](https://1oannis.com)

> [!NOTE]
> Copyright 2024 - present [Ioannis Theodosiadis](mailto:ioannis@seoultech.ac.kr), SEOULTECH University
>
> This project is licensed under the MIT License.
> Please note that while the code is open source, the logo and branding
> of [1oannis.com](https://www.1oannis.com) are proprietary and not covered by the MIT License.
> See [LICENCE](./LICENSE) file in the project root for details.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`shadcn`](https://ui.shadcn.com/docs/installation/next) and houses the personal Website of [1oannis](https://github.com/1oannis).

## Contents

- [Getting Started](#getting-started)
- [Dockerization](#dockerization)
- [Learn More](#learn-more)

## Getting Started

> [!IMPORTANT]
> This project requires at minimum a [node.js](https://nodejs.org) `v20` installation.

In order to speed up the installation process `pnpm` is used instead of `npm`.

```PowerShell
npm install -g pnpm
```

Now install the dependencies.

```PowerShell
pnpm install
```

---

### Deploy the DEV Server

You can develop easily on you local machine by using the built-in dev server.

```PowerShell
pnpm dev
```

---

### Deploy the PROD Server

In order to create a production deployment you need to build the project first.

```PowerShell
pnpm build
```

Now you can start the build.

```PowerShell
pnpm start
```

> [!TIP]
> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dockerization

This project can easily be containerized with [Docker](https://docs.docker.com/get-started/docker-overview) for easy deployment.

> [!IMPORTANT]
> This step requires at minimum a [Docker Engine](https://docs.docker.com/engine/install) installation.

### Build and Deploy an Image

In order to build an image you only have to specify the tag and correct Dockerfile.

```PowerShell
docker build -t the1oannis/homepage:1.0.0 -f .\Dockerfile.prod .
```

For easier accessability you can forward the port to 80 when you run the container.

```PowerShell
docker run -p 80:3000 the1oannis/homepage:1.0.0
```

> [!TIP]
> Open [http://localhost](http://localhost) with your browser to see the result.

---

### Use Docker Compose

> [!IMPORTANT]
> Notice how you just used a pretty boring and manual way to dockerize an application. 
> Also take a look at the different Dockerfiles [`prod`](Dockerfile.prod) / [`dev`](Dockerfile.dev)
> and the [`docker-compose.yaml`](docker-compose.yaml) in the project root.

Let's say you want to remotely develop on the website and you want to use Docker for that. There is a neat feature called
[`Compose Watch`](https://docs.docker.com/compose/how-tos/file-watch) which basically enables hot-reloading in containers.

In order to make use of that you can simply run the given [`docker-compose.yaml`](docker-compose.yaml).

```YAML
service:
  dev:
    ...
    environment:
      - WATCHPACK_POLLING=true
    ...
```

> [!TIP]
> The `WATHCPACK_POLLING` flag enables the hot-reloading for the deployment.

Deploy the dev container and go to [http://localhost](http://localhost).

#### Dev Container

```PowerShell
docker compose up dev
```

> [!TIP]
> Watch how the container will rebuild when changes in the files are detected.

You can undeploy the container at any time.

```PowerShell
docker compose down dev
```

#### Prod Container

```PowerShell
docker compose up prod
```

> [!TIP]
> Prod does not allow hot-reload. However it provides a faster way to build and deploy the prod image.

You can undeploy the container at any time.

```PowerShell
docker compose down prod
```

## Learn More

To learn more about the projects techstack, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Shadcn](https://ui.shadcn.com/) - a component library for next.js
- [Docker](https://docs.docker.com/get-started/get-docker) - the go to containerization platform
- [Learn Docker](https://docs.docker.com/get-started/workshop) - learn about the basics of Docker
