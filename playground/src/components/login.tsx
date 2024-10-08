import { CircleHalfSolidIcon } from "@pmdrs/icons";
import {
  Alert,
  AlertClose,
  AlertContent,
  AlertDescription,
  AlertTitle,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Input,
  Label,
  Separator,
} from "@pmdrs/ui";
import AcmeLogo from "./logo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-4">
      <Card
        className="flex flex-col gap-2 w-[400px] min-h-[400px] mx-auto mb-6"
        variant="section"
        bordered
      >
        <CardHeader className="text-center mb-4">
          <AcmeLogo className="mx-auto" />
          <p className="font-semibold text-xl mb-2 text-foreground mt-2">
            Welcome to ACME
          </p>
          <p className="text-sm text-muted-foreground font-normal">
            Login to access the account area.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
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

          <Link to="/admin/dashboard" className="w-full flex">
            <Button className="mt-4 w-full">Continue</Button>
          </Link>
        </CardContent>

        <Separator className="my-4" variant="dashed" />

        <CardFooter className="flex-col">
          <p className="text-sm text-muted-foreground font-normal text-center">
            Forgot your password? -{" "}
            <span className="text-blue-500 cursor-pointer">Reset</span>
          </p>

          {/* <Alert className="max-w-[440px] mt-4">
            <CircleHalfSolidIcon className="size-4 text-muted-foreground" />
            <AlertContent>
              <AlertTitle>You should use a password manager</AlertTitle>
              <AlertDescription>
                We recommend using a password manager to store your passwords.
              </AlertDescription>
            </AlertContent>
            <AlertClose />
          </Alert> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
