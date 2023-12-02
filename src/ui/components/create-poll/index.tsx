import React, { useCallback, useMemo, useState } from "react";

import { Poll, PollTypes } from "pollz-js";
import { usePollz } from "../../../use-pollz";
import { ActivityIndicator } from "../../commons/activity-indicator";
import { Toggle } from "../../commons/toggle";
import {
  BorderedInputField,
  CheckboxContainer,
  CheckboxLabel,
  Container,
  CreateButton,
  CreateButtonText,
  InputField,
  InputLabel,
  OptionWrapper,
} from "./styles";

type Props = {
  onPollCreated?: (poll: Poll) => void;
};

export const CreatePoll: React.FC<Props> = ({ onPollCreated }) => {
  const { sdk } = usePollz();
  const [pollName, setPollName] = useState("");
  const [options, setOptions] = useState(["", ""]); // Initial state with one empty option
  const [pollTypeId, setPollTypeId] = useState(PollTypes.SingleChoice); // Initial state with one empty option
  const [creatingPoll, setCreatingPoll] = useState(false);

  const isValid = useMemo(() => {
    return (
      pollName.trim() !== "" &&
      options.filter((option) => option.trim() !== "").length > 1 &&
      options.every(
        (option) => options.filter((o) => o === option).length === 1
      )
    );
  }, [options, pollName]);

  const addNewOption = useCallback(() => {
    setOptions((prev) => [...prev, ""]);
  }, []);

  const handleOptionChange = useCallback((index: number, value: string) => {
    setOptions((options) => {
      const updatedOptions = [...options];
      updatedOptions[index] = value;
      return updatedOptions;
    });
  }, []);

  const resetPoll = useCallback(() => {
    setPollName("");
    setOptions(["", ""]);
    setPollTypeId(PollTypes.SingleChoice);
  }, []);

  const handleCreatePoll = useCallback(async () => {
    if (!isValid) {
      return;
    }

    try {
      setCreatingPoll(true);
      // Filter out empty options before creating the poll
      const nonEmptyOptions = options.filter((option) => option.trim() !== "");

      if (nonEmptyOptions.length < 2) {
        return;
      }

      const poll = await sdk.create({
        name: pollName,
        options: nonEmptyOptions,
        pollTypeId,
      });

      resetPoll();

      onPollCreated?.(poll);

      // Optionally, you can redirect or do something after poll creation
    } catch (error) {
      console.error("Error creating poll:", error);
    } finally {
      setCreatingPoll(false);
    }
  }, [options, pollName, pollTypeId, resetPoll, sdk, isValid, onPollCreated]);

  const handleRemoveOption = useCallback((index: number) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions.splice(index, 1);

      return updatedOptions;
    });
  }, []);

  const handleInput = useCallback(
    (text: string, index: number): void => {
      if (text.trim() === "" && options.length > 2) {
        handleRemoveOption(index);
        return;
      }

      if (
        text.trim().length > 0 &&
        options.filter((option) => option.trim() === "").length === 0
      ) {
        addNewOption();
      }

      handleOptionChange(index, text);
    },
    [addNewOption, handleOptionChange, handleRemoveOption, options]
  );

  return (
    <Container>
      <InputLabel>Create a Poll</InputLabel>
      <BorderedInputField
        style={{ color: pollName.trim() ? "#222" : "#888" }}
        placeholder="Ask your question"
        value={pollName}
        onChange={(e) => setPollName(e.currentTarget.value)}
      />

      <CheckboxContainer>
        <Toggle
          checked={pollTypeId === PollTypes.MultipleChoice}
          onChange={(value) =>
            setPollTypeId(
              value ? PollTypes.MultipleChoice : PollTypes.SingleChoice
            )
          }
        />
        <CheckboxLabel>Allow multiple responses</CheckboxLabel>
      </CheckboxContainer>

      <div
        style={{
          border: "1px solid #aaa",
          borderRadius: 5,
          width: "100%",
        }}
      >
        {options.map((option, index) => {
          return (
            <OptionWrapper
              key={`${option}-${index}`}
              isError={
                option.trim() !== "" &&
                options.filter((o) => o === option).length > 1
              }
              isFirst={index === 0}
              isLast={index === options.length - 1}
            >
              <InputField
                style={{ color: option.trim() ? "#222" : "#888" }}
                placeholder={"New option"}
                value={option}
                onChange={(e) => handleInput(e.currentTarget.value, index)}
              />
            </OptionWrapper>
          );
        })}
      </div>

      <CreateButton disabled={!isValid} onClick={handleCreatePoll}>
        <CreateButtonText>Confirm</CreateButtonText>
        {creatingPoll && <ActivityIndicator color={"white"} />}
      </CreateButton>
    </Container>
  );
};
