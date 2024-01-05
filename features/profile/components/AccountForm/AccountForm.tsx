import { Divider, Layout, Text } from "@ui-kitten/components";
import { useCallback, useState } from "react";
import { View } from "react-native";
import { EditModal } from "../EditModal";
import { ModalData, User } from "../../../../common/types";
import { useAppTheme } from "../../../../hooks";
import { DataRow } from "./DataRow";
import { Avatar } from "./Avatar";
import { useStore } from "../../../../store";

export const AccountForm = () => {
  const { user } = useStore();

  if (!user) {
    return null;
  }

  const { colorScheme } = useAppTheme();

  const [modalData, setModalData] = useState<ModalData | null>(null);

  const addModalData = useCallback((key: keyof User, label: string) => {
    setModalData({ key, label });
  }, []);

  return (
    <View style={{ paddingVertical: 10 }}>
      <Avatar />
      <View style={{ margin: 10, gap: 10 }}>
        <Text category="h5">Personal information</Text>
        <Layout
          style={{
            borderRadius: 10,
            backgroundColor: colorScheme === "light" ? "#e4e9f2" : "#343541",
          }}
        >
          <View style={{ padding: 10, gap: 10 }}>
            <DataRow
              label="Full name"
              value={user.fullname}
              addModalData={() => addModalData("fullname", "Full name")}
            />
            <Divider />
            <DataRow
              label="Username"
              value={"@" + user.username}
              addModalData={() => addModalData("username", "Username")}
            />
          </View>
        </Layout>
      </View>
      {modalData && <EditModal modalData={modalData} setModalData={setModalData} />}
    </View>
  );
};
