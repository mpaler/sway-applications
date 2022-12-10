script;

use libraries::{AMM, Exchange};
use std::block::height;

enum SwapError {
    PairExchangeNotRegistered: (ContractId, ContractId),
}

fn main(
    amm_contract_address: ContractId,
    assets: Vec<ContractId>,
    amounts: Vec<u64>,
) -> u64 {
    assert(assets.len() >= 2);

    let amm_contract = abi(AMM, amm_contract_address.into());

    let mut i = 0;

    let mut latest_output = amounts.get(1).unwrap();
    let deadline = height() + 5;

    // swap subsequent asset pairs along route by specifying the input asset and the input amount for each swap
    while i < assets.len - 1 {
        let asset_pair = (assets.get(i).unwrap(), assets.get(i + 1).unwrap());

        // get the exchange contract id of asset pair
        let exchange_contract_id = amm_contract.pool { gas: 100_000 }(asset_pair);

        require(exchange_contract_id.is_some(), SwapError::PairExchangeNotRegistered(asset_pair));

        let exchange_contract = abi(Exchange, exchange_contract_id.unwrap().into());

        // initially, forward the input amount passed to the script
        // for the following swaps, forward the previous output amount
        latest_output = exchange_contract.swap_exact_input {
            gas: 10_000_000,
            coins: amounts.get(i).unwrap(),
            asset_id: asset_pair.0.into(),
        }(Option::Some(latest_output), deadline);

        i += 1;
    }

    latest_output
}