import { Button } from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { ImageProps } from "react-native";

interface FABProps {
  title: string;
  icon?: RenderProp<Partial<ImageProps>>;
  onPress: () => void;
}

export const FAB: React.FC<FABProps> = ({ title, icon, onPress }) => {
  return (
    <Button
      style={{ position: "absolute", bottom: 70, right: 10, zIndex: 1, borderRadius: 100 }}
      accessoryLeft={icon}
      onPress={onPress}
    >
      {title}
    </Button>
  );
};
