# Dashboard-Project
# Dashboard UI Project

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Directory Structure](#directory-structure)
8. [Screenshots](#screenshots)

## Project Overview
This project is a modern and responsive dashboard UI built using HTML, CSS, and JavaScript, designed to present key business metrics, analytics, and visualizations. It connects to a simulated backend using a PHP-based API and runs on a local XAMPP server.

## Features
- **Responsive Sidebar Navigation**
- **Search Bar and User Info Panel**
- **Dynamic Stats Cards**
- **Interactive Charts (Revenue & User Growth)**
- **Simulated Backend Data Integration**

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** PHP, MySQL (simulated)
- **Charts:** Chart.js
- **Icons:** Font Awesome

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- XAMPP (or equivalent local server) with PHP and MySQL
- Modern web browser (Chrome, Firefox, etc.)

### Installation
1. Clone or download the project to your local machine.

2. Place the project folder inside the XAMPP `htdocs` directory:
   ```bash
   C:\xampp\htdocs\dashboard-project
   ```

3. Start the XAMPP server by launching **Apache** and **MySQL**.

4. Create a database named `dashboard_db` using phpMyAdmin.

5. (Optional) Modify database connection settings in `api.php` if needed:
   ```php
   $host = 'localhost';
   $dbname = 'dashboard_db';
   $user = 'root';
   $pass = '';
   ```

6. Access the project in your browser:
   ```
   http://localhost/dashboard-project
   ```

## Usage

### Frontend
- Navigate through the sidebar to view different sections of the dashboard.
- Use the search bar to simulate search functionality.
- Hover over cards and charts for animations.

### Backend API
The API serves dynamic data for the frontend dashboard. Use browser developer tools or tools like Postman to test API endpoints.

## API Endpoints

1. **Stats Data:**
   - **Endpoint:** `/api.php?action=stats`
   - **Description:** Returns key business metrics (revenue, users, orders, conversion rate).

2. **Chart Data:**
   - **Endpoint:** `/api.php?action=chart_data`
   - **Description:** Provides data for revenue and user growth charts.

## Directory Structure
```
├── index.html       # Main HTML file
├── styles.css       # Custom CSS for UI styling
├── script.js        # Frontend interactivity logic
├── api.php          # PHP API file for backend integration
└── assets/          # Directory for additional assets (e.g., images)
```

## Screenshots
Include visual representations of the project layout, dashboard, and charts.

1. **Dashboard Overview:**
    - Sidebar Navigation, Stats Cards, and Charts
2. **Interactive Charts:**
    - Monthly Revenue & User Growth Data

---

### Notes
This project simulates backend functionality and can be expanded to include real-time data and user authentication in a production environment.

