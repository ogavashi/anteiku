import { GestureResponderEvent } from "react-native";
import { TopNavigationAction } from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { ImageProps } from "react-native-svg";

interface TopActionsProps {
  navigate: (event: GestureResponderEvent) => void;
  icon: RenderProp<Partial<ImageProps>> | undefined;
}

export const TopActions: React.FC<TopActionsProps> = ({ navigate, icon }) => {
  return <TopNavigationAction icon={icon} onPress={navigate} />;
};
