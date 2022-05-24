import { ethers } from "ethers";
import { useState, useEffect, useContext, FunctionComponent, createContext, ReactNode } from "react";
import { Web3State, createDefaultState, loadContract, createWeb3State } from "./utils";

interface BaseLayoutProps {
    children?: ReactNode;
}

const Web3Context = createContext<Web3State>(createDefaultState());

const Web3Provider: FunctionComponent<BaseLayoutProps> = ({ children }) => {

    const [web3Api, setWbe3Api] = useState<Web3State>(createDefaultState());

    useEffect(() => {
        async function initWeb3() {

            const provider = new ethers.providers.Web3Provider(window.ethereum as any);
            const contract = await loadContract("NftMarket", provider)

            setWbe3Api(createWeb3State({
                ethereum: window.ethereum,
                contract,
                provider,
                isLoading: false
            }))
        }

        initWeb3();
    }, [])

    return (
        <Web3Context.Provider value={web3Api}>
            {children}
        </Web3Context.Provider>
    )

}

export function useWeb3() {
    return useContext(Web3Context);
}

export function useHooks() {
    const { hooks } = useWeb3();
    return hooks;
}

export default Web3Provider;
