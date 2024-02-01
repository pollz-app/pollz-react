import React, { useCallback, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { usePollz } from "../../../use-pollz";
import { ActivityIndicator } from "../activity-indicator";
import { AddOptionButton, AddOptionContainer, AddOptionInput } from "./styles";

type Props = {
  addingOption: boolean;
  handleAddOption: (newOption: string) => Promise<void>;
};

export const NewOption: React.FC<Props> = ({
  addingOption,
  handleAddOption,
}) => {
  const { theme } = usePollz();
  const [newOption, setNewOption] = useState("");

  const handleClick = useCallback(async () => {
    if (newOption.trim()) {
      await handleAddOption(newOption);
      setNewOption("");
    }
  }, [newOption, handleAddOption]);

  return (
    <AddOptionContainer>
      <AddOptionInput
        style={{ color: newOption.trim() ? "#222" : "#888" }}
        placeholder="Add a new option"
        value={newOption}
        onChange={(event) => setNewOption(event.currentTarget.value)}
      />
      {addingOption ? (
        <ActivityIndicator size={30} />
      ) : (
        <AddOptionButton disabled={!newOption.trim()} onClick={handleClick}>
          <IoIosAdd name="add" size={30} color={theme?.colors.primary} />
        </AddOptionButton>
      )}
    </AddOptionContainer>
  );
};

export default NewOption;
