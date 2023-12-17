import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const AddIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="plus-outline" />
);
