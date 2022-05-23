import { ethers } from "ethers";
import { useState, useEffect, useContext, FunctionComponent, createContext, ReactNode } from "react";
import { Web3State, createDefaultState } from "./utils";

interface BaseLayoutProps {
    children?: ReactNode;
}

const Web3Context = createContext<Web3State>(createDefaultState());

const Web3Provider: FunctionComponent<BaseLayoutProps> = ({ children }) => {

    const [web3Api, setWbe3Api] = useState<Web3State>(createDefaultState());

    useEffect(() => {
        function initWeb3() {

            const provider = new ethers.providers.Web3Provider(window.ethereum as any);

            setWbe3Api({
                ethereum: window.ethereum,
                provider,
                contract: null,
                isLoading: false,
            })
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

export default Web3Provider;
