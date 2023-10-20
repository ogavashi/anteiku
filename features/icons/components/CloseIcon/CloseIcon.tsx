import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const CloseIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="close-outline" />
);
