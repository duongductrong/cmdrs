import { Tabs, TabsContent, TabsList, TabsTrigger } from "@pmdrs/ui";
import ProfileForm from "../components/profile-form";

export interface SettingsViewProps {}

const SettingsView = (props: SettingsViewProps) => {
  return (
    <section>
      <h2 className="text-2xl font-medium mb-1">General</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Manage your account settings and preferences.
      </p>

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="account"></TabsContent>
      </Tabs>

      <ProfileForm />
    </section>
  );
};

export default SettingsView;
