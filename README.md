<p align="center">
  <a href="https://www.reign.cl/es/">
    <img src="https://d33wubrfki0l68.cloudfront.net/cc301e98a199a8b59325d28a96b7d61643efe70f/04637/static/8cec8c20524baf887c3866345b536aa7/logo-reign-full.svg" alt="Logo" width=480 height=auto>
  </a>
</p>

<h3 align="center">Backend | News and Cron Challenge</h3>

<p align="center">
    <b>Juan Ignacio Sterren</b>
    <br>
    <a target:"_blank" href="https://jsterren.vercel.app/">Personal Portfolio</a>
    |
    <a target:"_blank" href="https://www.linkedin.com/in/sterrenjuan/">LinkedIn Profile</a>
  </p>

## **CONTEXT**

Build a small API to test your knowledge of Back End Development and related technologies.

The server, once an hour, should connect to the API (refer to the below url) which shows recently posted articles about Node.js on Hacker News. It should insert the data from the API into a database and also define a REST API which the client (e.g. Postman) will be used to retrieve the data.

**Hacker News URL:**

> https://hn.algolia.com/api/v1/search_by_date?query=nodejs

The service should return paginated results with a maximum of 5 items and should be able to be filtered by author, _tags, title. Also, this should permit the user to remove items and these ones should not reappear when the app is restarted.

**STACK**

You must use the following technologies to build the app:

- Active LTS version of Node.js + Express JS or Nest JS.

- Database: MongoDB or PostgreSQL.

- ORM: Choose whatever you like.

**CONSIDERATIONS**

- [x] Node.js version active LTS

- [x] The server component should be coded in Javascript or TypeScript.

- [x] At least 30% test coverage (statements) for the server component. [Partial]

- [x] The whole project has to be uploaded to GitLab.

**BONUS** (This items are optionals)

- [ ] Tests and linters should run on a GitLab pipeline (gitlab-ci.yml). 

- [ ] Test and linter setup.

- [x] The client should be compiled in a Docker multi-stage build.

- [x] Good use of Typescript

- [x] Swagger Doc for the API

- [x] The repository must have an exported postman file in order to test the API.

- [x] The artifacts (server API) can be Dockerized. [Configure Incomplete]

Other than that, you are free to use any suitable npm or other libraries.

Include a README which explains anything we need to do to run the demo app.

## Tecnología utilizada

- NestJS (Microservices)

- Axios

- Swagger

- Rxjs

- TypeScript (JavaScript Superset)

- Rabbit MQ

- PrismaORM

- PostgreSQL

## 

## API Gateway - Repository Structure

```text
.
├── Dockerfile
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.module.ts
│   ├── common
│   │   ├── constants.ts
│   │   ├── dto
│   │   │   └── filter.news.dto.ts
│   │   ├── filters
│   │   │   └── http-exception.filter.ts
│   │   ├── interceptors
│   │   │   └── timeout.interceptor.ts
│   │   ├── interfaces
│   │   │   ├── app-response.interface.ts
│   │   │   └── news.interface.ts
│   │   ├── proxy
│   │   │   └── client-proxy.ts
│   │   ├── response-manager
│   │   │   ├── response-manager.service.spec.ts
│   │   │   └── response-manager.service.ts
│   │   └── responses
│   │       └── news-paginated.response.ts
│   ├── main.ts
│   └── news
│       ├── news.controller.spec.ts
│       ├── news.controller.ts
│       └── news.module.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
```

## 

## Microservices News - Repository Structure

```text
.
├── Dockerfile
├── nest-cli.json
├── package.json
├── package-lock.json
├── prisma
│   ├── migrations
│   │   ├── 20220715044211_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── README.md
├── src
│   ├── app.module.ts
│   ├── common
│   │   ├── constants.ts
│   │   ├── dto
│   │   │   └── filter.news.dto.ts
│   │   ├── entities
│   │   │   └── hit.entity.ts
│   │   ├── interfaces
│   │   │   ├── app-response.interface.ts
│   │   │   └── news.interface.ts
│   │   └── services
│   │       ├── prisma
│   │       │   ├── prisma.service.spec.ts
│   │       │   └── prisma.service.ts
│   │       ├── repositories
│   │       │   ├── news.repository.service.spec.ts
│   │       │   └── news.repository.service.ts
│   │       └── services.module.ts
│   ├── main.ts
│   └── news
│       ├── news.controller.spec.ts
│       ├── news.controller.ts
│       ├── news.module.ts
│       ├── news.service.spec.ts
│       └── news.service.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
```

## 

## Microservices Schedule - Repository Structure

```text
.
├── Dockerfile
├── nest-cli.json
├── package.json
├── package-lock.json
├── prisma
│   ├── migrations
│   │   ├── 20220715045144_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── README.md
├── src
│   ├── app.module.ts
│   ├── common
│   │   ├── constants.ts
│   │   ├── entities
│   │   │   └── hit.entity.ts
│   │   ├── interfaces
│   │   │   └── news.interface.ts
│   │   └── services
│   │       ├── prisma
│   │       │   └── prisma.service.ts
│   │       ├── repositories
│   │       │   └── news.repository.service.ts
│   │       ├── services.module.ts
│   │       └── shn
│   │           └── shn.service.ts
│   ├── main.ts
│   └── news
│       ├── news.module.ts
│       ├── news.service.spec.ts
│       └── news.service.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
```

## Download and Install

### Required Softwares

- **[Visual Studio Code](https://code.visualstudio.com/)**

- **[Postman]([Asset 2](https://www.postman.com/downloads/))**

- **[NodeJs]([Descarga | Node.js](https://nodejs.org/es/download/))**



### API Gateway

Inside the local repository.

- Install Dependencies

```sh
npm install
```

- Run

```sh
npm run start:dev
```

- Test

```sh
npm run test:watch
```



### Microservices Schedule

Inside the local repository.

- Install Dependencies

```sh
npm install
```

- Run to configure DB, <mark>only once</mark>

```sh
npm run start:dev
```

- Restart

```sh
npm run start:dev
```

- Test

```
npm run test:watch
```



### Microservices - News

Inside the local repository.

- Install Dependencies

```sh
npm install
```

- Run

```sh
npm run start:deb
```

- Test

```sh
npm run test:watch
```

### Swagger API Doc

Run *API Gateway*, Microservices Schedule and Microservices News and navegate to http://localhost:3000/api/docs

### Postman Client

Import *postman_collection.json* in your Postman Client, it contains examples.

**Environment Info:** 

- url: localhost:3000

- version: v1
  
  

## Contact

- Juan Ignacio Sterren [Personal Portfolio](https://jsterren.vercel.app/) | [LinkedIn Profile](https://www.linkedin.com/in/sterrenjuan/)
   sterrenjuanignacio@gmail.com
