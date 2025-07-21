# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).




🎤 Speech – ASP.NET Core Backend Description (English)
In this project, I implemented a well-structured backend using ASP.NET Core, following a layered architecture with a clear separation of concerns.

The solution is organized as follows:

WebApi/: Contains the main REST API endpoints using clean, RESTful controllers.

UserStories/: Implements the application logic or use cases, decoupled from the controllers and infrastructure.

interfaces/: Defines abstractions for services, user stories, and repositories, supporting dependency injection and unit testing.

infrastructure/: Includes technical implementations such as EF Core repositories, authentication providers, and database contexts.

common/: Provides shared helpers, extensions, and constants.

Models/: Holds the domain entities, DTOs, and request/response models.

✅ Some of the key strengths of this backend are:

A clean architecture approach where business logic is encapsulated in user stories, separate from data access and presentation.

Use of interfaces like IMyUnitOfWork and ICatalogUserStory for loose coupling and testability.

Controllers such as ventasController and catalogController are well-defined and align with REST standards.

Modular dependency injection is handled via RegisterServicesExtend.cs.

The project includes support for JWT authentication, implemented using a custom token generator and handler (CustomTokenAuthenticationHandler, MyTokenGenerator).

Exception handling is centralized using ApiExceptionFilterAttribute, improving maintainability and consistency of error responses.

Finally, the Unit of Work pattern is applied to manage transactions with Entity Framework Core, ensuring data consistency across multiple repositories.

Overall, the solution is designed for maintainability, scalability, and testability — reflecting industry-standard practices in modern .NET development.




✅ Resumen de patrones usados
Categoría	Patrón
Diseño	Repository, Unit of Work, DTO
Diseño	Adapter, Interceptor
Arquitectura	Clean Architecture (inspirada)
Arquitectura	N-Tier (capa de control, dominio, datos)
Arquitectura	Composition API (Vue 3)
Buenas prácticas	Separation of Concerns, Validation Layer

