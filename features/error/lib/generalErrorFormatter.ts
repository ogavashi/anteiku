import { PostgrestError } from "@supabase/supabase-js";

export const generalErrorFormatter = (error: PostgrestError) => {
  const { message } = error;

  switch (message) {
    case `TypeError: Network request failed`:
      return "You are offline";

    default:
      return "Something went wrong. Try again later.";
  }
};
