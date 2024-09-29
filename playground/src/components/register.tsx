import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Input,
  Label,
  Separator,
  Textarea,
} from "@cmdrs/ui";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-6">
      <Card
        className="flex flex-col gap-2 w-[400px] min-h-[561px] mx-auto mb-6 p-12"
        shadow
      >
        <CardHeader className="text-center mb-4">
          <div className="size-12 mx-auto grid place-items-center border border-border rounded-lg mb-2 p-px">
            <div className="border-border size-9 grid place-items-center border rounded-md bg-[#EFEFEF]">
              <div className="size-6 rounded-full bg-gradient-to-b from-fg-base/80 to-fg-base"></div>
            </div>
          </div>
          <p className="font-semibold text-xl mb-2 text-fg-base">
            Register account
          </p>
          <p className="text-2xs text-fg-subtle font-normal">
            Register account to access the account area.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div
            className="grid gap-2"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fill, minmax(calc(50% - 16px), 1fr))`,
            }}
          >
            <Label variant="subtle" className="text-2xs mb-2">
              First Name
              <Input
                variant="default"
                placeholder="Enter first name"
                className="mt-2"
              />
            </Label>
            <Label variant="subtle" className="text-2xs mb-2">
              First Name
              <Input
                variant="default"
                placeholder="Enter last name"
                className="mt-2"
              />
            </Label>
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
            />
          </Label>

          <Label variant="subtle" className="text-2xs">
            Bio
            <Textarea
              placeholder="Tell something about you"
              variant="default"
              rows={3}
            />
          </Label>

          <Button className="mt-4">Continue</Button>
        </CardContent>

        <Separator className="my-4" variant="dashed" />

        <CardFooter>
          <p className="text-2xs text-fg-subtle font-normal text-center">
            Your already have an account? -{" "}
            <Link to="/login" className="text-blue-500 cursor-pointer">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
