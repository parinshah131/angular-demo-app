This project is a feature-rich Angular application with **authentication**, **role-based access control**, **lazy loading**, **directives**, **pipes**, and **API integration** using JSONPlaceholder.

## 🚀 Features
 - **User Authentication: Login/logout feature with role-based navigation.**
 - **Routing & Guards: Protects routes based on user role.**  
 - **Admin & User Modules: Separate modules for admin and user dashboards.**  
 - **Child Routing: admin/settings as a child route in the Admin module.**  
 - **Data Fetching: Uses Angular's HttpClient to fetch posts from JSONPlaceholder.**  
 - **Custom Directive: HoverEffectDirective to modify DOM behavior.**  
 - **Custom Pipe: TitlePipe to convert the first letter of all words to uppercase.**  
 - **Shared Service: Fetching posts and post by ID using a common service.**  
 - **API Integration with JSONPlaceholder**  
 - **Proper Route Guards & Authentication Handling**  
 - **Unit Testing: post.service.spec.ts for service testing.**  

 ## Project Setup

 ### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (>= 16.x recommended) 👉 [Download Here](https://nodejs.org/)
- **Angular CLI** (latest version)  
  Install Angular CLI globally if not already installed:
  ```sh
  npm install -g @angular/cli


### **Clone the Repository**
git clone https://github.com/parinshah131/angular-demo-app.git
cd angular-demo-app

### **Install Dependencies**
```sh
npm install
```
### **Running the Application**
```sh
npm start
```
**Note: .gitignore file already has node_modules**
Once the server starts, open your browser and visit:
*http://localhost:4200*

### **Configuration Details**

Default Login Credentials
| Role    | Username | Password |
|---------|---------|---------|
| Admin   | admin   | admin   |
| User    | user    | user    |

### **API Endpoints**

The app fetches data from JSONPlaceholder API:

| Endpoint            | Method | Description             |
|---------------------|--------|-------------------------|
| `/posts`           | GET    | Fetch all posts         |
| `/posts/:id`       | GET    | Fetch post by ID        |
| `/auth/login`      | POST   | User login endpoint     |
| `/auth/logout`     | POST   | Logout endpoint         |


### **Overview**

The MyAngularChallenge project is an Angular application designed to demonstrate development, reusability, and standalone component architecture. The application includes user authentication, data management, and role-based access control.

### **Key Functionalities:**

- Role-Based Dashboard:

  - Users: After logging in, regular users are redirected to a dashboard where they can view only their own posts.
  - Admins: Admin users are redirected to an admin dashboard where they can view and manage all posts across the system.

- Posts Management:
    - Posts are displayed dynamically based on the user's role.
    - Users see a list of their posts, while admins see all posts in the system.

- Authentication and Navigation:
   - Users are required to log in to access their dashboards.
   - Admin and user dashboards are secured with role-based route guards to prevent unauthorized access.

- Error Handling:
   - If an unauthorized user attempts to access restricted areas, they are redirected to an Access Denied page.

### **Routes**

| Route            | Component | Description             |
|---------------------|--------|-------------------------|
| `/login`           | LoginComponent    | Login page         |
| `/admin`       | AdminComponent    | Admin dashboard       |
| `/admin/settings`      | SettingsComponent   | Admin settings (child route)   |
| `/user`     | UserPostsComponent   | User dashboard       |
| `/logout`   | LogoutComponent   | Logout with dropdown |
| `access-denied` | AccessDeniedComponent | Access denied page |
| **          | Redirect to /login | Default fallback |


### **Components & Services**

  - Components
    - LoginComponent: Authenticates users.
    - LogoutComponent: Handles logout with dropdown.
    - AdminComponent: Displays all posts if the logged-in user is an Admin.
    - UserPostsComponent: Displays posts related to the logged-in user.
    - SettingsComponent: Child route for admin settings.
   
  - Services
    - PostService: Fetches posts and posts by ID.
    - SharedService: Used for fetching data in different components.
    - AuthGuard: Protects routes based on authentication.
