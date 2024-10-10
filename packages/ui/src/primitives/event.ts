export const composeEventHandlers = <E extends React.SyntheticEvent>(
  originalEventHandler?: (event: E) => void,
  newEventHandler?: (event: E) => void
) => {
  return (event: E) => {
    originalEventHandler?.(event);
    newEventHandler?.(event);
  };
};

export const withPreventDefault =
  (callback: (e: React.SyntheticEvent) => void) =>
  (e: React.SyntheticEvent) => {
    e?.preventDefault();
    callback(e);
  };
