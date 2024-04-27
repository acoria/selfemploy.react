import { MultiSelectButton } from "../components/core/multiSelectButtons/MultiSelectButtons";

export const ApplyMessageGeneratorComponent = () => {
  return (
    <div>
      <MultiSelectButton
        buttonLabels={["Test1", "Test2", "Test3"]}
        isSingleSelect
        onClick={(index) => console.log(`index "${index}" clicked`)}
      />
    </div>
  );
};
