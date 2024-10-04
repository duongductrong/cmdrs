export const composeEventHandlers = <E extends React.SyntheticEvent>(
  originalEventHandler?: (event: E) => void,
  newEventHandler?: (event: E) => void
) => {
  return (event: E) => {
    originalEventHandler?.(event);
    newEventHandler?.(event);
  };
};
