import { TrashIcon } from "@heroicons/react/24/solid";

import { Button } from "./elements/Button";

type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
  qty: number;
};

const QtyBtn = (props: Props) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Button
        variant="danger"
        onClick={props.onDecrement}
        className="w-12 h-10"
      >
        {props.qty === 1 ? <TrashIcon className="w-4" /> : "-"}
      </Button>
      <p>{props.qty}</p>
      <Button
        variant="success"
        onClick={props.onIncrement}
        className="w-12 h-10"
      >
        +
      </Button>
    </div>
  );
};

export default QtyBtn;
