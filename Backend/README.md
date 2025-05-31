# Backend Documentation

## User API Endpoints

### 1. User Registration
## Endpoint: `/users/register`

### Description
This endpoint allows users to register a new account in the system. It validates the input data, checks for existing users, and creates a new user account if all validations pass.

### Method
`POST`

### Request Body
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "yourpassword"
}
```

### Field Validations

#### Fullname
- **firstname** (required)
  - Minimum length: 3 characters
  - Maximum length: 30 characters
  - Cannot be empty
- **lastname** (optional)
  - Minimum length: 3 characters
  - Maximum length: 30 characters

#### Email
- Required
- Must be a valid email format
- Must be unique in the system
- Minimum length: 5 characters
- Maximum length: 50 characters

#### Password
- Required
- Minimum length: 4 characters
- Maximum length: 20 characters

### Response

#### Success Response (201 Created)
```json
{
    "user": {
        "_id": "user_id",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "token": "jwt_token"
    }
}
```

#### Error Responses

1. **Validation Error (400 Bad Request)**
```json
{
    "errors": [
        {
            "msg": "First name is required with min 3 and max 30 characters"
        }
    ]
}
```

2. **User Already Exists (409 Conflict)**
```json
{
    "errors": [
        {
            "msg": "An account with this email already exists. Please use a different email or try logging in."
        }
    ]
}
```

3. **Server Error (500 Internal Server Error)**
```json
{
    "errors": [
        {
            "msg": "Internal server error"
        }
    ]
}
```

### Status Codes
- `201`: User successfully created
- `400`: Validation error in request data
- `409`: User with provided email already exists
- `500`: Internal server error

### Notes
- The password is automatically hashed before being stored in the database
- A JWT token is generated upon successful registration
- The password field is not returned in the response for security reasons
- The endpoint uses express-validator for input validation

### 2. User Login
## Endpoint: `/users/login`

### Description
This endpoint authenticates users and provides them with a JWT token for subsequent authenticated requests.

### Method
`POST`

### Request Body
```json
{
    "email": "john.doe@example.com",
    "password": "yourpassword"
}
```

### Field Validations

#### Email
- Required
- Must be a valid email format
- Minimum length: 5 characters
- Maximum length: 30 characters

#### Password
- Required
- Minimum length: 4 characters
- Maximum length: 20 characters

### Response

#### Success Response (200 OK)
```json
{
    "token": "jwt_token",
    "user": {
        "_id": "user_id",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

#### Error Responses

1. **Validation Error (400 Bad Request)**
```json
{
    "errors": [
        {
            "msg": "Invalid email"
        }
    ]
}
```

2. **Authentication Error (401 Unauthorized)**
```json
{
    "message": "Invalid Email or Password"
}
```
or
```json
{
    "message": "Password does not match"
}
```

### Status Codes
- `200`: Login successful
- `400`: Validation error in request data
- `401`: Invalid credentials
- `500`: Internal server error

### Notes
- The endpoint validates the user's credentials against the stored hashed password
- A JWT token is generated upon successful login
- The token is stored in an HTTP-only cookie for security
- The password field is not returned in the response for security reasons
- The endpoint uses express-validator for input validation

### 3. Get User Profile
## Endpoint: `/users/profile`

### Description
This endpoint retrieves the authenticated user's profile information.

### Method
`GET`

### Headers
- `Authorization`: Bearer token (required)
- `Cookie`: token (optional, if using cookie-based authentication)

### Response

#### Success Response (200 OK)
```json
{
    "_id": "user_id",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com"
}
```

#### Error Responses

1. **Authentication Error (401 Unauthorized)**
```json
{
    "message": "Unauthorized access - No token provided"
}
```
or
```json
{
    "message": "Invalid token"
}
```
or
```json
{
    "message": "Token has expired"
}
```

### Status Codes
- `200`: Profile retrieved successfully
- `401`: Unauthorized (invalid or missing token)
- `500`: Internal server error

### Notes
- Requires authentication (valid JWT token)
- The password field is not returned in the response
- Token can be provided via Authorization header or cookie

### 4. User Logout
## Endpoint: `/users/logout`

### Description
This endpoint logs out the user by invalidating their current session token.

### Method
`POST`

### Headers
- `Authorization`: Bearer token (required)
- `Cookie`: token (optional, if using cookie-based authentication)

### Response

#### Success Response (200 OK)
```json
{
    "message": "User Logged-out!!"
}
```

#### Error Responses

1. **Authentication Error (401 Unauthorized)**
```json
{
    "message": "Unauthorized access - No token provided"
}
```

### Status Codes
- `200`: Logout successful
- `401`: Unauthorized (if no valid token provided)
- `500`: Internal server error

### Notes
- The endpoint clears the authentication cookie
- The current token is blacklisted to prevent its reuse
- Requires authentication (valid JWT token)
- Token can be provided via Authorization header or cookie 