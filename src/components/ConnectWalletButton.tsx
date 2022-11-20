import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import raritos from '../contract/raritos.json';

const ConnectWalletButton = () => {
  const { address, isConnected } = useAccount();

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
  });

  const { writeAsync } = useContractWrite(config);

  const onMintClick = async () => {
    console.log('Minting...');
    try {
      await writeAsync?.();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isConnected ? (
        <button className="bg-red-500" onClick={onMintClick}>
          Mint
        </button>
      ) : (
        <ConnectButton chainStatus="none" />
      )}
    </div>
  );
};

export default ConnectWalletButton;
