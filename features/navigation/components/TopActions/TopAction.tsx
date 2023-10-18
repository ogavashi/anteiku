import { GestureResponderEvent } from "react-native";
import { TopNavigationAction } from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { ImageProps } from "react-native-svg";

interface TopActionsProps {
  navigateBack: (event: GestureResponderEvent) => void;
  icon: RenderProp<Partial<ImageProps>> | undefined;
}

export const TopActions: React.FC<TopActionsProps> = ({ navigateBack, icon }) => {
  return <TopNavigationAction icon={icon} onPress={navigateBack} />;
};
