import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import { useState } from 'react';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import raritos from '../contract/raritos.json';
import { useWaitForTransaction } from 'wagmi';

const ConnectWalletButton = () => {
  const { address, isConnected } = useAccount();
  const [mintingSuccesfull, setMintingSuccesfull] = useState(false);

  // Here we get the price of the NFT
  const { data: cost } = useContractRead({
    address: '0x196FB2b4A17CC3D03212eDC371bda34dD2CDAAAd',
    abi: raritos,
    functionName: 'cost',
  });

  const { config } = usePrepareContractWrite({
    address: '0x196FB2b4A17CC3D03212eDC371bda34dD2CDAAAd',
    abi: raritos,
    functionName: 'mint',
    args: [address, 1],
    overrides: {
      from: address,
      value: ethers.utils.parseEther('0.05'),
    },
    onSuccess(data) {
      console.log('Success', data);
      // setMintingSuccesfull(true);
    },
  });

  const {
    writeAsync,
    isSuccess: isMintStarted,
    isLoading: isMintLoading,
    data: mintData,
  } = useContractWrite(config);

  const { isSuccess: txSuccess } = useWaitForTransaction({ hash: mintData?.hash });

  const isMinted = txSuccess;

  const onMintClick = async () => {
    console.log('Minting...');
    try {
      await writeAsync?.();
      setMintingSuccesfull(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-2 text-black font-bold  items-center">
      <ConnectButton chainStatus="none" />
      {isConnected && !isMinted && (
        <button
          className="bg-yellow-300 min-w-[20vw] rounded hover:bg-yellow-500 min-h-[5vh] font-primary "
          onClick={() => {
            onMintClick();
          }}
          disabled={isMintLoading || isMintStarted}
        >
          {!isMintLoading && !isMintStarted && <div>Mint now</div>}
          {isMintLoading && <div>Waiting for Approval</div>}
          {isMintStarted && <div className=" animate-pulse ">Minting...</div>}
        </button>
      )}
      {isMinted && (
        <div className="flex animate-bounce mt-10 flex-col text-white font-primary">
          <div> Congrats! You are now a member of the raritos family! </div>
          <div>
            Go checkout your rarito on
            <a
              href={`https://opensea.io/${address}`}
              rel="noopener noreferrer"
              target="_blank"
              className="pl-1 underline text-blue-500"
            >
              OpenSea
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectWalletButton;
