import { Image, View } from "react-native";

interface PosterProps {
  url: string;
}

export const Poster: React.FC<PosterProps> = ({ url }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
      }}
    >
      <Image source={{ uri: url }} style={{ width: "100%", height: 480, borderRadius: 10 }} />
    </View>
  );
};
