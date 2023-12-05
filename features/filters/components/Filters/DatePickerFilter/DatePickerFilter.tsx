import { Datepicker } from "@ui-kitten/components";
import { DatePickerFilterProps } from "../../../../../common/types";
import { useCallback, useMemo } from "react";

export const DatePickerFilter: React.FC<DatePickerFilterProps> = ({
  filterData,
  query,
  setQuery,
}) => {
  const { title, filterKey } = filterData;

  const selectedDate = useMemo(
    () => (query?.[filterKey] ? new Date(query[filterKey]) : undefined),
    [query]
  );

  const max = useMemo(() => {
    const currentDate = new Date();
    const nextYearDate = new Date(currentDate);
    nextYearDate.setFullYear(currentDate.getFullYear() + 1);

    return nextYearDate;
  }, []);

  const handleSelect = useCallback((value: Date) => {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    setQuery(filterKey, formattedDate);
  }, []);

  return (
    <Datepicker
      label={title}
      onSelect={handleSelect}
      date={selectedDate}
      max={max}
      placeholder="Select date"
    />
  );
};
