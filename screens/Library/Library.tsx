import { Button } from "@ui-kitten/components";
import { LibraryStackParamsList } from "../../common/types";
import { ScrollLayout } from "../../components";
import { StackScreenProps } from "@react-navigation/stack";

export const Library: React.FC<StackScreenProps<LibraryStackParamsList, "Library">> = () => {
  return (
    <ScrollLayout title="Library">
      <Button>Click</Button>
    </ScrollLayout>
  );
};
