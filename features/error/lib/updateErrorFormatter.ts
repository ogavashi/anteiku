import { PostgrestError } from "@supabase/supabase-js";

export const updateErrorFormatter = (error: PostgrestError) => {
  const { message } = error;

  switch (message) {
    case `duplicate key value violates unique constraint "profiles_username_key"`:
      return { message: "Username already in use" };
    default:
      return { toast: "Something went wrong. Try again later." };
  }
};
