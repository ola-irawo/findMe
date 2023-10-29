import { Hanko } from "@teamhanko/hanko-elements";

export const hankoApi = process.env.REACT_APP_HANKO_API_URL;
export const hanko = new Hanko(hankoApi);
