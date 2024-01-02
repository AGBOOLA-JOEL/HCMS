import { useEffect } from "react";
import { useModalStore } from "src/store/store";
const setinitialModal = () => {
  useModalStore.setState({ modal: false });
};
const Root = () => {
  const modal = useModalStore((state) => state.modal);
  const show = useModalStore((state) => state.show);
  const showAsync = useModalStore((state) => state.showAsync);
  const toggle = useModalStore((state) => state.toggleShow);
  const hide = useModalStore((state) => state.hide);

  useEffect(() => {
    setinitialModal();
  }, []);
  // for page  layout,navbar,footer and outlet
  return (
    <div>
      {modal && <>zustand state update</>}
      Root route
      <button onClick={show}>show</button>
      <button onClick={hide}>hide</button>
      <button onClick={showAsync}>show</button>
      <button onClick={toggle}>toggle</button>
    </div>
  );
};

export default Root;
