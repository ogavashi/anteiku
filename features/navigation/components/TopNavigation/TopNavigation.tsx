import { RenderProp } from "@ui-kitten/components/devsupport";
import { TopNavigation as EvaTopNavigation } from "@ui-kitten/components";
import { TopActions } from "../TopActions";
import { ImageProps } from "react-native-svg";
import { GestureResponderEvent } from "react-native";

interface TopNavigationProps {
  icon?: RenderProp<Partial<ImageProps>>;
  navigateBack: (event: GestureResponderEvent) => void;
  title: string;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ icon, navigateBack, title }) => {
  return (
    <EvaTopNavigation
      alignment="center"
      title={title}
      accessoryLeft={() => <TopActions icon={icon} navigateBack={navigateBack} />}
    />
  );
};
