import { useCallback, useMemo, useState } from "react";
import * as ImagePicker from "expo-image-picker";

export const useImagePicker = () => {
  const [image, setImage] = useState<null | ImagePicker.ImagePickerResult>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result);

      return;
    }
  };

  const imageUri = useMemo(() => image?.assets?.[0].uri, [image]);

  const clearImage = useCallback(() => {
    setImage(null);
  }, []);

  return { image, imageUri, pickImage, clearImage };
};
