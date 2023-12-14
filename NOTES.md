2 Main Layers:

- HTTP Logic Layer
- Business Logic Layer

HTTP Logic Layer

- Routes + Controllers
  - Routes - handle the HTTP requests that hits the API and route them to appropriate controller(s)
  - Contollers - take request object, pull out data from request, then send to service(s)

Business Logic Layer

- Services + Data Access
  - Contains the business logic, derived from business and technical requirements, as well as how we access our data stores\*\*

Folder and File Structure
Root Directory:

package.json
tsconfig.json
.env (for environment variables, not committed to source control)
Source Directory (/src):

/controllers: Contains controller files that handle incoming requests and return responses.
/models: Includes classes or interfaces representing data models and possibly data access logic.
/routes: Holds the routing logic, mapping endpoints to controller functions.
/interfaces: Contains TypeScript interfaces, typically used for typing data structures.
/services: For business logic, separate from controllers.
/utils or /helpers: Utility functions and helper code.
/config: Configuration files and constants.
/middlewares: Express middlewares for request processing.
index.ts or app.ts: The main entry point for the application.
Example File Naming:

Controllers: user.controller.ts, product.controller.ts
Models: user.model.ts, product.model.ts
Routes: user.routes.ts, product.routes.ts
Interfaces: user.interface.ts, product.interface.ts
Services: auth.service.ts, email.service.ts
Utils/Helpers: logger.ts, errorHandler.ts
Naming Conventions
CamelCase: Use CamelCase for filenames and directories. This is a common practice in JavaScript/TypeScript projects.
Explicit Naming: Name files and directories explicitly based on their purpose. For example, use user.controller.ts instead of just user.ts for clarity.
Plural vs. Singular: Use plural names for folders (controllers, models, routes) and singular for files (user.controller.ts, product.model.ts), representing their individual roles.
Additional Considerations
Controllers: Responsible for handling incoming requests and returning responses. They should be thin, delegating complex logic to services.
Models: Define the structure of your data. In a TypeScript project, these could be classes or interfaces.
Routes: Define the API endpoints and map them to the corresponding controller functions.
Interfaces: Used for type checking and defining contracts within your code, especially useful for data coming in and out of your system.
Services: Contain the business logic of your application, separate from the HTTP layer represented by controllers.
Middlewares: Functions that have access to the request object (req), the response object (resp), and the next middleware function in the application's request-response cycle.
