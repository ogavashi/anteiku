import { HomeStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { GridList } from "../../features/anime";
import { ListLayout } from "../../components/layout";
import { FiltersSheet } from "../../features/filters";
import { useCallback, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Button } from "@ui-kitten/components";

export const AnimeList: React.FC<StackScreenProps<HomeStackParamsList, "AnimeList">> = ({
  route,
}) => {
  const { title, ...props } = route.params;

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <ListLayout title={title}>
      <Button onPress={handlePresentModalPress}>Click</Button>
      <GridList {...props} />
      <FiltersSheet ref={bottomSheetModalRef} />
    </ListLayout>
  );
};
