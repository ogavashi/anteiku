import { useEffect } from "react";
import { supabase } from "../common/supabase";
import { useStore } from "../store";

export const useAuth = () => {
  const { setSession, setInitialized, setUser } = useStore();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      const authUser = session?.user;

      if (authUser) {
        const { data: user } = await supabase
          .from("profiles")
          .select()
          .eq("id", authUser.id)
          .single();
      }

      setUser(session?.user || null);
      setSession(session);
      setInitialized(true);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);
};
