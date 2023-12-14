import { Button } from "@ui-kitten/components";
import { Image, View } from "react-native";
import { useImagePicker } from "../../../../hooks";

interface AvatarProps {
  userUri: string;
}

export const Avatar: React.FC<AvatarProps> = ({ userUri }) => {
  const { image, imageUri, pickImage } = useImagePicker();

  return (
    <View>
      <Image
        style={{
          height: 302,
        }}
        source={{
          uri: imageUri || userUri,
        }}
      />
      <View style={{ position: "absolute", top: 0, right: 0, padding: 10 }}>
        <Button size="tiny" onPress={pickImage}>
          Edit
        </Button>
      </View>
    </View>
  );
};
