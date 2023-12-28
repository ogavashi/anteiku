import { Button } from "@ui-kitten/components";
import { StarIcon } from "../../../icons";
import { FullAnime } from "../../../../common/types";
import { useCallback, useEffect, useState } from "react";
import { getUserRating } from "../../../../lib";
import { useStore } from "../../../../store";
import Toast from "react-native-toast-message";
import { Loader } from "../../../../components";
import { View } from "react-native";

interface RatingProps {
  title: FullAnime;
}

export const Rating: React.FC<RatingProps> = ({ title }) => {
  const { user } = useStore();

  if (!user) {
    return null;
  }

  const [rating, setRating] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

    if (!rating) {
      return (
        <Button appearance="outline" accessoryRight={StarIcon}>
          Rate
        </Button>
      );
    }

    return (
      <Button appearance="outline" accessoryRight={StarIcon}>
        {rating}
      </Button>
    );
  }, [isLoading, rating]);

  return renderContent();
};
