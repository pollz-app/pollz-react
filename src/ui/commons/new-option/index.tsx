import React from "react";
import { IoIosAdd } from "react-icons/io";
import { theme } from "../../themes/base";
import { ActivityIndicator } from "../activity-indicator";
import { AddOptionButton, AddOptionContainer, AddOptionInput } from "./styles";

type Props = {
  newOption: string;
  setNewOption: React.Dispatch<React.SetStateAction<string>>;
  addingOption: boolean;
  handleAddOption: () => void;
};

export const NewOption: React.FC<Props> = ({
  newOption,
  setNewOption,
  addingOption,
  handleAddOption,
}) => {
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
        <AddOptionButton disabled={!newOption.trim()} onClick={handleAddOption}>
          <IoIosAdd name="add" size={30} color={theme.colors.primary} />
        </AddOptionButton>
      )}
    </AddOptionContainer>
  );
};

export default NewOption;
