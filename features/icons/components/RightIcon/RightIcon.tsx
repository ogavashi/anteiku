import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const RightIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="arrow-right-outline" />
);
