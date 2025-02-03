This project is a feature-rich Angular application with **authentication**, **role-based access control**, **lazy loading**, **directives**, **pipes**, and **API integration** using JSONPlaceholder.

## 🚀 Features
 **Login & Logout** functionality  
 **Admin & User Dashboards**  
 **Role-Based Access Control (RBAC)**  
 **Lazy-Loaded Feature Modules**  
 **Standalone Components**  
 **Custom Directive (Hover Effect)**  
 **Custom Pipe (Title Case Formatter)**  
 **OnPush Change Detection for Performance**  
 **API Integration with JSONPlaceholder**  
 **Proper Route Guards & Authentication Handling**  
 **Unit Tests for Services & Guards**  

 ## Project Setup

 ### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (>= 16.x recommended) 👉 [Download Here](https://nodejs.org/)
- **Angular CLI** (latest version)  
  Install Angular CLI globally if not already installed:
  ```sh
  npm install -g @angular/cli


### **Clone the Repository**
git clone https://github.com/yourusername/angular-auth-posts.git
cd angular-demo-app

### **Install Dependencies**
npm install

### **Running the Application***
npm start

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

