import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const SearchIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="search-outline" />
);
