import { useEffect } from "react";
import { supabase } from "../common/supabase";
import { useStore } from "../store";
import { getUserProfile } from "../lib";
import { generalErrorFormatter } from "../features/error";
import Toast from "react-native-toast-message";

export const useAuth = () => {
  const { setSession, setInitialized, setUser } = useStore();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      const authUser = session?.user;

      if (authUser) {
        const { user, error } = await getUserProfile(authUser.id);

        if (error) {
          const formatted = generalErrorFormatter(error);
          Toast.show({ type: "error", text1: "Ops", text2: formatted });
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
