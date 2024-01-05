import { Button } from "@ui-kitten/components";
import { FilledStarIcon, StarIcon } from "../../../icons";
import { FullManga } from "../../../../common/types";
import { useCallback, useEffect, useState } from "react";
import { getUserRating } from "../../../../lib";
import { useStore } from "../../../../store";
import Toast from "react-native-toast-message";
import { Loader } from "../../../../components";
import { View } from "react-native";
import { RateModal } from "./RateModal";

interface RatingProps {
  title: FullManga;
}

export const Rating: React.FC<RatingProps> = ({ title }) => {
  const { user } = useStore();

  if (!user) {
    return null;
  }

  const [rating, setRating] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    fetchRating();
  }, []);

  const fetchRating = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data, error } = await getUserRating(title, user.id);

      if (error) {
        Toast.show({ type: "error", text1: "Error", text2: error.message });

        return;
      }
      setRating(data?.rating);
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({ type: "error", text1: "Error", text2: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  }, [title, user]);

  const renderContent = useCallback(() => {
    if (isLoading) {
      return (
        <View style={{ flex: 1 }}>
          <Loader height={50} />
        </View>
      );
    }

    const commonProps = {
      onPress: handleOpen,
    };

    if (!rating) {
      return (
        <Button {...commonProps} appearance="outline" accessoryRight={StarIcon}>
          Rate
        </Button>
      );
    }

    return (
      <Button {...commonProps} appearance="filled" accessoryRight={FilledStarIcon}>
        {rating}
      </Button>
    );
  }, [isLoading, rating]);

  return (
    <>
      {renderContent()}
      <RateModal
        isVisible={isVisible}
        handleClose={handleClose}
        rating={rating}
        setRating={setRating}
        userId={user.id}
        title={title}
      />
    </>
  );
};
