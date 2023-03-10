import { ResponseStatus } from "@/types/api";

export type CustomField = {
  customFieldId: string;
  customKey: string;
  customValue: "true" | "false";
};

export type Membership = {
  membershipId: string;
  organisationId: string;
  roleName: string;
  token: string;
};

export type App = {
  appName: string;
};

export type Profile = {
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  lastLoginAt: string;
  contacts: [];
  addresses: [];
  listCustomFields: CustomField[];
  employmentDetails: [];
  memberships: Membership[];
  kycDetails: {
    documents: [];
  };
  apps: App[];
  listRoles: String[];
  permissions: [];
  createdAt: string;
  passwordExpired: boolean;
  updatedAt: string;
};

export type ProfileResponse = {
  data: Profile;
  status: ResponseStatus;
};
