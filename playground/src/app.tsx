import React from "react";
import { Button } from "@cmds/ui";

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-row gap-2">
        <Button size="sm">Button sm</Button>
        <Button size="default">Button default</Button>
        <Button size="lg">Button lg</Button>
        <Button size="xl">Button xl</Button>
      </div>
      {/* <div className="flex flex-row gap-2">
        <Button size="sm" disabled>Button sm</Button>
        <Button size="default" disabled>Button default</Button>
        <Button size="lg" disabled>Button lg</Button>
        <Button size="xl" disabled>Button xl</Button>
      </div> */}
      <div className="flex flex-row gap-2">
        <Button variant="secondary" size="sm">Button sm</Button>
        <Button variant="secondary" size="default">Button default</Button>
        <Button variant="secondary" size="lg">Button lg</Button>
        <Button variant="secondary" size="xl">Button xl</Button>
      </div>
      
      <div className="flex flex-row gap-2">
        <Button variant="danger" size="sm">Button sm</Button>
        <Button variant="danger" size="default">Button default</Button>
        <Button variant="danger" size="lg">Button lg</Button>
        <Button variant="danger" size="xl">Button xl</Button>
      </div>

      <div className="flex flex-row gap-2">
        <Button variant="transparent" size="sm">Button sm</Button>
        <Button variant="transparent" size="default">Button default</Button>
        <Button variant="transparent" size="lg">Button lg</Button>
        <Button variant="transparent" size="xl">Button xl</Button>
      </div>
      
      <div className="flex flex-row gap-2">
        <Button variant="transmuted" size="sm">Button sm</Button>
        <Button variant="transmuted" size="default">Button default</Button>
        <Button variant="transmuted" size="lg">Button lg</Button>
        <Button variant="transmuted" size="xl">Button xl</Button>
      </div>
    </div>
  );
};

export default App;
