import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  InputGroup,
  Label,
  Separator,
  Switch,
  Textarea,
} from "@pmdrs/ui";
import { Link } from "react-router-dom";
import AcmeLogo from "./logo";

const Register = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-6">
      <Card
        className="flex flex-col gap-2 w-[440px] min-h-[561px] mx-auto mb-6"
        variant="section"
        bordered
      >
        <CardHeader className="text-center mb-4">
          <AcmeLogo className="mx-auto" />
          <p className="font-semibold text-xl mb-2 text-foreground mt-2">
            Register account
          </p>
          <p className="text-sm text-muted-foreground font-normal">
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
            <Label className="text-sm mb-2">
              First Name
              <Input
                variant="default"
                placeholder="Enter first name"
                className="mt-2"
              />
            </Label>
            <Label className="text-sm mb-2">
              First Name
              <Input
                variant="default"
                placeholder="Enter last name"
                className="mt-2"
              />
            </Label>
          </div>

          <Label className="text-sm mb-2">
            Email
            <Input
              variant="default"
              placeholder="Enter your email address"
              className="mt-2"
            />
          </Label>
          <Label className="text-sm">
            Password
            <Input
              variant="default"
              type="password"
              placeholder="Password"
              className="mt-2"
            />
          </Label>

          <Label className="text-sm">
            Bio
            <Textarea
              placeholder="Tell something about you"
              variant="default"
              rows={3}
              className="mt-2"
            />
          </Label>

          <Label className="text-sm">
            Website
            <InputGroup prefixSlot={"https://"} className="mt-2">
              <Input variant="default" placeholder="Enter your website" />
            </InputGroup>
          </Label>

          <Label className="text-sm flex items-center gap-2 mt-2">
            <Checkbox defaultChecked="indeterminate" />I agree to the terms and
            conditions
          </Label>

          <Label className="text-sm flex items-center gap-2 mt-2">
            <Switch /> Enable collection of analytics data
          </Label>

          <Button className="mt-4">Continue</Button>
        </CardContent>

        <Separator className="my-4" variant="dashed" />

        <CardFooter>
          <p className="text-sm text-muted-foreground font-normal text-center">
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
