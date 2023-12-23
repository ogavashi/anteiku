import { Divider, Layout, Text } from "@ui-kitten/components";
import { useCallback, useState } from "react";
import { View } from "react-native";
import { EditModal } from "../EditModal";
import { FormUser, ModalData } from "../../../../common/types";
import { useAppTheme } from "../../../../hooks";
import { DataRow } from "./DataRow";
import { Avatar } from "./Avatar";
import { useStore } from "../../../../store";
import { supabase } from "../../../../common/supabase";

export const AccountForm = () => {
  const { user } = useStore();

  if (!user) {
    return null;
  }

  const { colorScheme } = useAppTheme();

  const [formUser, setFormUser] = useState<FormUser>({
    username: user.user_metadata.username,
    fullName: user.user_metadata.full_name,
    avatarUrl: user?.user_metadata.avatar_url,
  });

  const [modalData, setModalData] = useState<ModalData | null>(null);

  const handleChangeData = useCallback(async (key: keyof FormUser, value?: string) => {
    const update = { id: user.id, [key]: value };

    const { error, data } = await supabase.auth.updateUser({ data: update });

    if (!error) {
      setFormUser((prev) => ({ ...prev, [key]: value || "" }));
    }

    console.log(data);
  }, []);

  const addModalData = useCallback((key: keyof FormUser, label: string) => {
    setModalData({ key, label });
  }, []);

  return (
    <View style={{ paddingVertical: 10 }}>
      <Avatar userUri="https://i0.wp.com/omnigeekempire.com/wp-content/uploads/2023/02/the-eminence-in-shadow-cid-visual-1.webp?fit=800%2C450&ssl=1" />
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
              value={formUser.fullName}
              addModalData={() => addModalData("fullName", "Full name")}
            />
            <Divider />
            <DataRow
              label="Username"
              value={"@" + formUser.username}
              addModalData={() => addModalData("username", "Username")}
            />
          </View>
        </Layout>
      </View>
      {modalData && (
        <EditModal
          modalData={modalData}
          setModalData={setModalData}
          onChange={handleChangeData}
          user={formUser}
        />
      )}
    </View>
  );
};
