import { useSelector } from "react-redux";

export default function SetProgress() {
  const selectedTense = useSelector((state) => state.selectedTense.value);
  const selectedVerbList = useSelector((state) => state.selectedVerbList.data);

  return (
    <>
      <div>{selectedTense.name}</div>
      {selectedVerbList.map((verb) => (
        <div key={verb.id}>{verb.name}</div>
      ))}
    </>
  );
}
