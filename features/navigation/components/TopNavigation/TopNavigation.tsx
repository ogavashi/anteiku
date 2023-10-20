import { RenderProp } from "@ui-kitten/components/devsupport";
import { TopNavigation as EvaTopNavigation } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";
import { TextProps } from "react-native";

interface TopNavigationProps {
  icon?: RenderProp<Partial<ImageProps>>;
  title?: string | RenderProp<TextProps>;
  alignment?: "start" | "center";
  accessoryLeft?: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  accessoryRight?: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  title,
  alignment = "start",
  accessoryLeft,
  accessoryRight,
}) => {
  return (
    <EvaTopNavigation
      alignment={alignment}
      title={title}
      accessoryLeft={accessoryLeft}
      accessoryRight={accessoryRight}
    />
  );
};
