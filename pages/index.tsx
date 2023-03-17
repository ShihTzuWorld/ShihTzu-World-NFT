import { BaseLayout, Navbar, NftList } from '@ui';
import Image from 'next/image';
import Shihverse from '../public/images/shih-tzu.png';
import Link from 'next/link';
import { ExclamationIcon } from '@heroicons/react/solid';
import { useNetwork } from '@hooks/web3';


// const myLoader = ({ src }) => {
//   return `/preprocessed-images/${src}`;
// };

const IndexPage = () => {
    const { network } = useNetwork();
    return (
        <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen overflow-hidden">
            <div className='md:flex md:justify-center lg:justify-left'>
                <div>
                    <Image src={Shihverse}
                        // loader={myLoader}
                        className="inset-0 w-full md:justify-center h-full object-cover filter brightness-50"
                        alt="main background image"
                    ></Image>
                </div>
                <div className="lg:relaive md:relative inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto lg:mr-60 text-center overflow-hidden">

                    <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
                        SHIHverse NFT
                    </h1>
                    <div className="space-y-8 ">
                        <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
                            Easily Mint NFT'S on {' '}
                            <span className="text-palette-primary">
                                SHIH.
                            </span>
                        </h1>
                        <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
                            All your NFT's in one Doggy dogg world!
                        </p>
                        <Link href="/marketplace">
                            <button type="button" className="py-4 px-6 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 w-9/12 rounded-full">
                                Enter App
                            </button>
                        </Link>
                    </div>
                    {network.isConnectedToNetwork ?
                        <NftList /> :
                        <div className="rounded-md bg-yellow-50 p-4 mt-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
                                    <div className="mt-2 text-sm text-yellow-700">
                                        <p>
                                            {network.isLoading ?
                                                "Loading..." :
                                                `Connect to ${network.targetNetwork}`
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default IndexPage