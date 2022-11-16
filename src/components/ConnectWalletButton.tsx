import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import { useEffect } from 'react';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import raritos from '../contract/raritos.json';

const ConnectWalletButton = () => {
  const { address, isConnected } = useAccount();

  // const { config } = usePrepareContractWrite({
  //   address: '0x196FB2b4A17CC3D03212eDC371bda34dD2CDAAAd',
  //   abi: [raritos],
  //   functionName: 'mint',
  //   args: ['0xd2D568B166e05C4aBbEf64f77eb65466E2195050', 50000],
  // });

  const { data: symbol } = useContractRead({
    address: '0x196FB2b4A17CC3D03212eDC371bda34dD2CDAAAd',
    abi: raritos,
    functionName: 'symbol',
  });

  useEffect(() => {
    console.log('symbol', symbol);
  }, [symbol]);

  // const { write: mint, isSuccess } = useContractWrite(config);

  // console.log(config);

  return (
    <div>
      {isConnected ? (
        <button
          className="bg-red-500"
          onClick={() => {
            // mint?.();
          }}
        >
          Mint
        </button>
      ) : (
        <ConnectButton chainStatus="none" />
      )}
    </div>
  );
};

export default ConnectWalletButton;
