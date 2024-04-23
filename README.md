# 2115449 CA-Authentication

### `config.php`
- **Purpose**: Establishes a connection to the MySQL database.
- **Features**:
  - Defines database credentials and connection logic.
  - Handles database connection errors.

### `login_stud.php`
- **Purpose**: Provides a login interface for students.
- **Features**:
  - User authentication with email and password.
  - Session management to store user login status.
  - Redirects to student details page upon successful login.

### `logout_stud.php`
- **Purpose**: Manages the user logout process.
- **Features**:
  - Destroys the session and clears session data.
  - Redirects to the login page after logout.

### `signup_stud.php`
- **Purpose**: Handles new user registration.
- **Features**:
  - Collects user data and inserts it into the database after hashing the password.
  - Redirects to the login page upon successful registration.

### `stud_details.php`
- **Purpose**: Allows logged-in users to enter or update student details.
- **Features**:
  - Form for entering student data such as name, addresses, and contact details.
  - Performs client-side validation using JavaScript.
  - Redirects to processing script upon form submission.

### `stud_process.php`
- **Purpose**: Processes the student detail form submissions.
- **Features**:
  - Validates and sanitizes input data to prevent SQL injection and XSS.
  - Inserts data into the database and redirects to the view details page.

### `view_stud_details.php`
- **Purpose**: Displays all student records from the database.
- **Features**:
  - Fetches and displays data in a formatted table.
  - Uses `htmlspecialchars()` to sanitize output and prevent XSS.
  - Provides a back button to return to the details input form.

### `stud_details.js`
- **Purpose**: Provides client-side validation for the student details form.
- **Features**:
  - Validates inputs like names, matriculation numbers, and phone numbers using regex.
  - Alerts the user and prevents form submission if validation fails.
