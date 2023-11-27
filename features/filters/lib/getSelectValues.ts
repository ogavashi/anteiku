import { IndexPath } from "@ui-kitten/components";
import { Option, Query } from "../../../common/types";

export const getSelectValues = (query: Query, filterKey: string, options: Option[]) => {
  const rawData = query[filterKey];

  if (Array.isArray(rawData)) {
    const indexes = rawData
      .map((filterValue) => options.findIndex(({ key }) => key === filterValue))
      .filter((optionIndex) => optionIndex >= 0)
      .map((index) => new IndexPath(index));

    const value = options
      .filter(({ key }) => rawData.includes(key))
      .map(({ value }) => value)
      .join(", ");

    return { index: indexes, value };
  }

  const data = rawData as number;
  const optionIndex = options.findIndex(({ key }) => +key === +data);

  if (optionIndex >= 0) {
    const index = new IndexPath(optionIndex);
    const value = options[optionIndex]?.value;

    return { index, value };
  }

  return { index: undefined, value: undefined };
};
