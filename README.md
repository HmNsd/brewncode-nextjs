# Auth Next.js App

This project is a Next.js authentication app with the following features:
- User registration (signup)
- User login
- Email verification
- Forgot password (send reset link)
- Reset password (set new password via secure token)
- Profile page
- Logout

## Setup

1. **Clone the repository and install dependencies:**
   ```bash
   git clone git@github.com:HmNsd/brewncode-nextjs.git
   cd auth-nextjs-app
   npm install
   ```

2. **Environment Variables:**

   Create a `.env.local` file with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   domain=http://localhost:3000
   userMailtrap=your_mailtrap_user
   passwordMailtrap=your_mailtrap_password
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Features & Routes

- `/signup` — User registration
- `/login` — User login
- `/profile` — User profile (protected)
- `/verifyemail?token=...` — Email verification via token
- `/forgotpassword` — Request password reset link
- `/forgotpassword?token=...` — Set new password using reset token

## Password Reset Flow

1. Go to `/forgotpassword` and enter your email.
2. You will receive an email with a reset link:  
   `http://localhost:3000/forgotpassword?token=...`
3. Click the link, enter your new password and confirm it.
4. On success, you can log in with your new password.

## Email Verification Flow

1. After signup, you will receive a verification email:  
   `http://localhost:3000/verifyemail?token=...`
2. Click the link to verify your email.

## Notes

- The backend expects the following for password reset:
  - **POST** `/api/users/forgotpassword` with `{ email }` to send reset link.
  - **PATCH** `/api/users/forgotpassword` with `{ token, newPassword }` to set a new password.
- Tokens are generated securely and expire after 1 hour.
- All sensitive data is securely handled.

## Development

- Uses [Mailtrap](https://mailtrap.io/) for email testing.
- Uses MongoDB for user storage.
- Passwords are hashed with bcrypt.

---

**If you change any route or environment variable, update this README accordingly.**
