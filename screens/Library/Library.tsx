import { LibraryModalData, LibraryStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { Collections, EditModal } from "../../features/library";
import { LibraryLayout } from "../../components";
import { useState } from "react";

export const Library: React.FC<StackScreenProps<LibraryStackParamsList, "Library">> = () => {
  const [modalData, setModalData] = useState<LibraryModalData | null>(null);

  return (
    <LibraryLayout title="Library" setModalData={setModalData}>
      <Collections />
      {modalData && <EditModal modalData={modalData} setModalData={setModalData} />}
    </LibraryLayout>
  );
};
