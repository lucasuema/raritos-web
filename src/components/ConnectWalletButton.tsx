import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';

import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import raritosAbi from '../contract/raritos.json';

const ConnectWalletButton = () => {
  const { address, isConnected } = useAccount();

  const { config } = usePrepareContractWrite({
    address: '0x196FB2b4A17CC3D03212eDC371bda34dD2CDAAAd',
    abi: raritosAbi,
    functionName: 'mint',
    overrides: {
      from: address,
      value: 5000000000000000,
    },
  });

  const { write: mint, isSuccess } = useContractWrite(config);

  console.log(config);

  return (
    <div>
      {isConnected ? (
        <button
          className="bg-red-500"
          onClick={() => {
            mint?.();
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
