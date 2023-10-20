import { Avatar as EvaAvatar } from "@ui-kitten/components";
import { TouchableHighlight } from "react-native";

interface AvatarProps {
  size?: "tiny" | "small" | "medium" | "large" | "giant";
}

export const Avatar: React.FC<AvatarProps> = ({ size = "medium" }) => {
  return (
    <TouchableHighlight onPress={() => console.log("Press")}>
      <EvaAvatar
        size={size}
        src="https://i0.wp.com/omnigeekempire.com/wp-content/uploads/2023/02/the-eminence-in-shadow-cid-visual-1.webp?fit=800%2C450&ssl=1"
      />
    </TouchableHighlight>
  );
};
