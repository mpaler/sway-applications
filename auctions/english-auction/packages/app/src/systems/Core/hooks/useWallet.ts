import { Wallet } from 'fuels';
import { useQuery } from 'react-query';

import { useFuelWeb3 } from './useFuelWeb3';

export const useWallet = () => {
  const [fuelWeb3] = useFuelWeb3();

  if (!fuelWeb3) throw new Error('Error fuelWeb3 instance is not defined');
  // Auto connect application
  fuelWeb3.connect();

  const { data: wallet } = useQuery(
    ['wallet'],
    async () => {
      const accounts = await fuelWeb3.accounts();
      // TODO don't hardcode accounts[0]
      return Wallet.fromAddress(accounts[0], fuelWeb3.getProvider());
    },
    {
      enabled: !!fuelWeb3,
    }
  );

  return wallet;
};