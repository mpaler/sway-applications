use fuels::{contract::call_response::FuelCallResponse, prelude::*, tx::ContractId};

use crate::utils::setup::{MultiSig, SignatureInfo, User};

pub async fn add_owners(
    contract: &MultiSig,
    data: Bits256,
    signatures_data: Vec<SignatureInfo>,
    users: Vec<User>,
) -> FuelCallResponse<()> {
    contract
        .methods()
        .add_owners(data, signatures_data, users)
        .call()
        .await
        .unwrap()
}

pub async fn cancel_transaction(contract: &MultiSig) -> FuelCallResponse<()> {
    contract
        .methods()
        .cancel_transaction()
        .call()
        .await
        .unwrap()
}

pub async fn constructor(contract: &MultiSig, users: Vec<User>) -> FuelCallResponse<()> {
    contract.methods().constructor(users).call().await.unwrap()
}

pub async fn execute_transaction(
    contract: &MultiSig,
    to: Identity,
    value: u64,
    data: Bits256,
    signatures_data: Vec<SignatureInfo>,
) -> FuelCallResponse<()> {
    contract
        .methods()
        .execute_transaction(data, signatures_data, to, value)
        .append_variable_outputs(1)
        .call()
        .await
        .unwrap()
}

pub async fn set_threshold(
    contract: &MultiSig,
    data: Bits256,
    signatures_data: Vec<SignatureInfo>,
    threshold: u64,
) -> FuelCallResponse<()> {
    contract
        .methods()
        .set_threshold(data, signatures_data, threshold)
        .call()
        .await
        .unwrap()
}

pub async fn transfer(
    contract: &MultiSig,
    to: Identity,
    asset_id: ContractId,
    value: u64,
    data: Bits256,
    signatures_data: Vec<SignatureInfo>,
) -> FuelCallResponse<()> {
    contract
        .methods()
        .transfer(asset_id, data, signatures_data, to, value)
        .append_variable_outputs(1)
        .call()
        .await
        .unwrap()
}
