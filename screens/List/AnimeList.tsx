import { HomeStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { GridList } from "../../features/anime";
import { ListLayout } from "../../components/layout";
import { FiltersSheet } from "../../features/filters";
import { useCallback, useRef } from "react";
import { useBottomModal } from "../../hooks";
import { TopActions } from "../../features/navigation";
import { FiltersIcon } from "../../features/icons";

export const AnimeList: React.FC<StackScreenProps<HomeStackParamsList, "AnimeList">> = ({
  route,
}) => {
  const { title, ...props } = route.params;

  const { bottomFiltersModalRef, openFilters } = useBottomModal();

  return (
    <ListLayout
      title={title}
      accessoryRight={() => <TopActions icon={FiltersIcon} navigate={openFilters} />}
    >
      <GridList {...props} />
      <FiltersSheet ref={bottomFiltersModalRef} />
    </ListLayout>
  );
};
