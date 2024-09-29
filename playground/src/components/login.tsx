import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Input,
  Label,
  Separator,
} from "@cmdrs/ui";
import AcmeLogo from "./logo";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card
        className="flex flex-col gap-2 w-[400px] h-[561px] mx-auto mb-6 p-12"
        shadow
      >
        <CardHeader className="text-center mb-4">
          <AcmeLogo />
          <p className="font-semibold text-xl mb-2 text-fg-base">
            Welcome to ACME
          </p>
          <p className="text-2xs text-fg-subtle font-normal">
            Login to access the account area.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
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
            />
          </Label>

          <Button className="mt-4">Continue</Button>
        </CardContent>

        <Separator className="my-4" variant="dashed" />

        <CardFooter>
          <p className="text-2xs text-fg-subtle font-normal text-center">
            Forgot your password? -{" "}
            <span className="text-blue-500 cursor-pointer">Reset</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
