import { SubInstructionsEntity } from './types';

type SubInstructionsProps = {
  item: SubInstructionsEntity;
};

export const SubInstructions = ({ item }: SubInstructionsProps) => {
  return (
    <li>
      <h3>{item.label}</h3>
      {item.description && <p>{item.description}</p>}
    </li>
  );
};
