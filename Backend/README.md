# Backend Documentation

# User Registration API Documentation

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