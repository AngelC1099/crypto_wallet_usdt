import { TronWeb } from "tronweb";

const tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io",
});

export const isAddress = (address: string) => tronWeb.isAddress(address);