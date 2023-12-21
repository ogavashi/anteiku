import { useEffect } from "react";
import { supabase } from "../common/supabase";
import { useStore } from "../store";

export const useAuth = () => {
  const { setSession, setInitialized } = useStore();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setInitialized(true);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);
};
