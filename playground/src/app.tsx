import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Prompter } from "@pmdrs/prompt";
const App = () => {
  {
    /* <div className="flex flex-col gap-2">
    <div className="flex flex-row gap-2">
      <Button size="sm">Button sm</Button>
      <Button size="default" className="min-w-[200px]">
        Continue
      </Button>
      <Button size="lg">Button lg</Button>
      <Button size="xl">Button xl</Button>
    </div>
    <div className="flex flex-row gap-2">
      <Button variant="secondary" size="sm">
        Button sm
      </Button>
      <Button variant="secondary" size="default">
        Button default
      </Button>
      <Button variant="secondary" size="lg">
        Button lg
      </Button>
      <Button variant="secondary" size="xl">
        Button xl
      </Button>
    </div>

    <div className="flex flex-row gap-2">
      <Button variant="danger" size="sm">
        Button sm
      </Button>
      <Button variant="danger" size="default">
        Button default
      </Button>
      <Button variant="danger" size="lg">
        Button lg
      </Button>
      <Button variant="danger" size="xl">
        Button xl
      </Button>
    </div>

    <div className="flex flex-row gap-2">
      <Button variant="transparent" size="sm">
        Button sm
      </Button>
      <Button variant="transparent" size="default">
        Button default
      </Button>
      <Button variant="transparent" size="lg">
        Button lg
      </Button>
      <Button variant="transparent" size="xl">
        Button xl
      </Button>
    </div>

    <div className="flex flex-row gap-2">
      <Button variant="transmuted" size="sm">
        Button sm
      </Button>
      <Button variant="transmuted" size="default">
        Button default
      </Button>
      <Button variant="transmuted" size="lg">
        Button lg
      </Button>
      <Button variant="transmuted" size="xl">
        Button xl
      </Button>
    </div>

    <div className="flex flex-row gap-2">
      <Button disabled size="sm">
        Button sm
      </Button>
      <Button disabled size="default">
        Button default
      </Button>
      <Button disabled size="lg">
        Button lg
      </Button>
      <Button disabled size="xl">
        Button xl
      </Button>
    </div>

    <div className="flex flex-row gap-2">
      <ButtonGroup>
        <Button variant="secondary" size="default">
          Button sm
        </Button>
        <Button variant="secondary" size="default">
          Button default
        </Button>
        <Button variant="secondary" size="default">
          Button lg
        </Button>
        <Button variant="secondary" size="default">
          Button xl
        </Button>
      </ButtonGroup>
    </div>
  </div> */
  }

  return (
    <>
      <RouterProvider router={router} />
      <Prompter />
    </>
  );
};

export default App;
