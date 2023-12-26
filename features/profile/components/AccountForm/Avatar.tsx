import { Button } from "@ui-kitten/components";
import { Image, View } from "react-native";
import { useAvatar, useImagePicker } from "../../../../hooks";
import { useStore } from "../../../../store";

export const Avatar = () => {
  const { image, imageUri, pickImage, clearImage } = useImagePicker();
  const { uploadAvatar, uploading } = useAvatar(image, clearImage);

  const { user } = useStore();

  return (
    <View>
      <Image
        style={{
          height: 302,
        }}
        source={{
          uri: imageUri || user?.avatarUrl,
        }}
      />
      <View style={{ position: "absolute", top: 0, right: 0, padding: 10, gap: 10 }}>
        <Button size="tiny" onPress={pickImage} disabled={uploading}>
          Edit
        </Button>
        {imageUri && (
          <Button size="tiny" onPress={uploadAvatar} disabled={uploading} status="success">
            Save
          </Button>
        )}
      </View>
    </View>
  );
};
