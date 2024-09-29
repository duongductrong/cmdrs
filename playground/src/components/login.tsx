import { Button, Input, Label } from "@cmdrs/ui";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-2 w-[400px] h-[561px] mx-auto mb-6 p-12 border border-border rounded-xl bg-bg-base">
        <div className="text-center mb-4">
          <div className="size-12 mx-auto grid place-items-center border border-border rounded-lg mb-2 p-px">
            <div className="border-border size-9 grid place-items-center border rounded-md bg-[#EFEFEF]">
              <div className="size-6 rounded-full bg-gradient-to-b from-fg-base/80 to-fg-base"></div>
            </div>
          </div>
          <p className="font-semibold text-xl mb-2 text-fg-base">
            Welcome to ACME
          </p>
          <p className="text-2xs text-fg-subtle font-normal">
            Login to access the account area.
          </p>
        </div>
        <Label variant="subtle" className="text-2xs mb-2">
          Email
          <Input
            variant="default"
            placeholder="Enter your email address"
            className="mt-2"
          />
        </Label>
        <Label variant="subtle" className="text-2xs">
          Password
          <Input
            variant="default"
            type="password"
            placeholder="Password"
            className="mt-2"
            value="91238138"
          />
        </Label>

        <Button className="mt-4">Continue</Button>
      </div>
    </div>
  );
};

export default Login;
