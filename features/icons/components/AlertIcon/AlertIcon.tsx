import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const AlertIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="alert-triangle-outline" />
);
