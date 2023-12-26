import { useCallback, useState } from "react";
import { supabase } from "../common/supabase";
import * as FileSystem from "expo-file-system";
import { ImagePickerResult } from "expo-image-picker";
import { decode } from "base64-arraybuffer";
import { useStore } from "../store";
import { updateUserProfile } from "../lib";
import Toast from "react-native-toast-message";

export const useAvatar = (image: ImagePickerResult | null, clearImage: () => void) => {
  const [uploading, setUploading] = useState(false);

  const { user, setUser } = useStore();

  const uploadAvatar = useCallback(async () => {
    if (!user) {
      return;
    }

    try {
      setUploading(true);

      const assets = image?.assets?.[0];

      if (!assets) {
        return;
      }

      const base64 = await FileSystem.readAsStringAsync(assets.uri, { encoding: "base64" });
      const filePath = `${user!.id}.${assets.uri.split(".").at(-1)}`;

      const { error: uploadError, data } = await supabase.storage
        .from("avatars")
        .upload(filePath, decode(base64), { contentType: "image", upsert: true });

      if (uploadError) {
        Toast.show({ type: "error", text1: "Ops", text2: "Error uploading avatar" });

        return;
      }
      const { data: avatar } = await supabase.storage.from("avatars").getPublicUrl(data.path);

      const { updatedUser, error } = await updateUserProfile(
        { avatarUrl: avatar.publicUrl },
        user.id
      );

      if (!error && updatedUser) {
        setUser(updatedUser);
        clearImage();

        return;
      }
      Toast.show({ type: "error", text1: "Ops", text2: "Error updating avatar" });
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({ type: "error", text1: "Ops", text2: error.message });
      }
    } finally {
      setUploading(false);
    }
  }, [user, image]);

  return { uploading, uploadAvatar };
};
