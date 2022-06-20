import { MetaMaskInpageProvider } from "@metamask/providers"
import { Contract, providers } from "ethers"
import { SWRResponse } from "swr";
import { NftMarketContract } from "./nftMarketContract";

export type Web3Dependencies = {
    provider: providers.Web3Provider;
    contract: NftMarketContract;
    ethereum: MetaMaskInpageProvider;
    isLoading: boolean;
}

export type CryptoHookFactory<D = any, R = any, P = any> = {
    (d: Partial<Web3Dependencies>): CryptoSwrHandlerHook<D, R, P>
}

export type CryptoSwrHandlerHook<D = any, R = any, P = any> = (params?: P) => CryptoSwrResponse<D, R>

export type CryptoSwrResponse<D = any, R = any> = SWRResponse<D> & R;


// export type CryptoHookFactory<D = any, P = any> = {
//     (d: Partial<Web3Dependencies>): (params: P) => SWRResponse<D>
// }



