export type Auth = {
  access_token: string;
  refresh_token: string;
  scope: string;
  id_token: string;
  token_type: string;
  expires_in: number;
};

export type LoginInfo = {
  username: string;
  password: string;
};
