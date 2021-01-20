import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  return {
    isToggled: state,
    open: () => setState(true),
    close: () => setState(false),
    toggle: () => setState(!state)
  };
};

export default useToggle;
