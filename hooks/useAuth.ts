import { useEffect } from "react";
import { supabase } from "../common/supabase";
import { useStore } from "../store";
import { getUserProfile } from "../lib";

export const useAuth = () => {
  const { setSession, setInitialized, setUser } = useStore();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      const authUser = session?.user;

      if (authUser) {
        const { user, error } = await getUserProfile(authUser.id);

        // Temporary
        if (error) {
          console.log("error", error);
        }

        setUser(user);
      }

      setSession(session);
      setInitialized(true);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);
};
