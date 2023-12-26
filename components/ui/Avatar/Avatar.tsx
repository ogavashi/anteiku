import { Avatar as EvaAvatar } from "@ui-kitten/components";
import { GestureResponderEvent, TouchableHighlight, TouchableOpacity } from "react-native";
import { useStore } from "../../../store";

interface AvatarProps {
  size?: "tiny" | "small" | "medium" | "large" | "giant";
  onPress?: (event: GestureResponderEvent) => void;
  url?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ size = "medium", onPress, url }) => {
  const { user } = useStore();

  return (
    <TouchableOpacity onPress={onPress}>
      <EvaAvatar size={size} src={url || user?.avatarUrl} />
    </TouchableOpacity>
  );
};
