import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const BackIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="arrow-back" />
);
