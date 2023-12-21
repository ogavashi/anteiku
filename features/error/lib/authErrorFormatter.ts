import { AuthError } from "@supabase/supabase-js";

export const authErrorFormatter = (error: AuthError) => {
  const { status, name, message } = error;

  switch (message) {
    case `User already registered`:
      return { email: "Email is already registered" };

    case `duplicate key value violates unique constraint "profiles_username_key"`:
      return { username: "Username already in use" };

    case `Password should contain at least one character of each: abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789.`:
      return {
        password: "Required at least one lowercase letter, one uppercase letter, and one number",
      };
    default:
      return { toast: "Something went wrong. Try again later." };
  }
};
