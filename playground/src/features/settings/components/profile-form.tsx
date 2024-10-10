"use client";

import { Button, Input, Textarea } from "@pmdrs/ui";

export default function ProfileForm() {
  return (
    <form className="space-y-8">
      <Input placeholder="shadcn" />

      <Textarea
        placeholder="Tell us a little bit about yourself"
        className="resize-none"
      />

      <Input />
      <Button type="button" variant="outline" size="sm" className="mt-2">
        Add URL
      </Button>
      <Button type="submit">Update profile</Button>
    </form>
  );
}
