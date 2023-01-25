library interface;

dep data_structures;

use data_structures::{SignatureInfo, User};

abi MultiSignatureWallet {
    /// Adds users which are able to vote on the execution of transactions.
    ///
    /// # Arguments
    ///
    /// * `data` - The data field of the transaction.
    /// * `signatures` - The information for each user's signature for a specific transaction.
    /// * `users` - The users of the multisig, who can sign transactions to add their approval.
    ///
    /// # Reverts
    ///
    /// * When the constructor has not been called to initialize the contract.
    /// * When the public key cannot be recovered from a signature.
    /// * When the recovered addresses are not in ascending order (0x1 < 0x2 < 0x3...).
    /// * When the user address is the 0th address (0x00000...).
    /// * When an owner has an approval weight of 0.
    /// * When the address of a new user clashes with an existing owner address
    #[storage(read, write)]
    fn add_owners(data: b256, signatures: Vec<SignatureInfo>, users: Vec<User>);

    /// Cancel the next transaction by spending the current nonce.
    ///
    /// # Reverts
    ///
    /// * When the caller is not setup as an owner.
    #[storage(read, write)]
    fn cancel_transaction();

    /// The constructor initializes the necessary values and unlocks further functionality.
    ///
    /// # Arguments
    ///
    /// * `users` - The users of the multisig, who can sign transactions to add their approval.
    ///
    /// # Reverts
    ///
    /// * When the constructor is called more than once.
    /// * When the user address is the 0th address (0x00000...).
    /// * When the threshold is set to 0.
    /// * When an owner has an approval weight of 0.
    /// * When the threshold is a value greater than the sum of the weights.
    #[storage(read, write)]
    fn constructor(users: Vec<User>);

    /// Execute a transaction formed from the `to`, `value` and `data` parameters if the signatures meet the
    /// threshold requirement.
    ///
    /// # Arguments
    ///
    /// * `data` - The data field of the transaction.
    /// * `signatures` - The information for each user's signature for a specific transaction.
    /// * `to` - The recipient of the transaction.
    /// * `value` - The value sent in the transaction.
    ///
    /// # Reverts
    ///
    /// * When the constructor has not been called to initialize the contract.
    /// * When the amount of the asset being sent is greater than the balance in the contract.
    /// * When the public key cannot be recovered from a signature.
    /// * When the recovered addresses are not in ascending order (0x1 < 0x2 < 0x3...).
    /// * When the total approval count is less than the required threshold for execution.
    #[storage(read, write)]
    fn execute_transaction(data: b256, signatures: Vec<SignatureInfo>, to: Identity, value: u64);

    /// Updates the threshold required for execution
    ///
    /// # Arguments
    ///
    /// * `data` - The data field of the transaction.
    /// * `signatures` - The information for each user's signature for a specific transaction.
    /// * `threshold` - The number of approvals required to enable a transaction to be sent.
    ///
    /// # Reverts
    ///
    /// * When the constructor has not been called to initialize the contract.
    /// * When the threshold is a value greater than the sum of the weights.
    /// * When the public key cannot be recovered from a signature.
    /// * When the recovered addresses are not in ascending order (0x1 < 0x2 < 0x3...).
    /// * When the total approval count is less than the required threshold for execution.
    #[storage(read, write)]
    fn set_threshold(data: b256, signatures: Vec<SignatureInfo>, threshold: u64);

    /// Transfers assets to outputs & contracts if the signatures meet the threshold requirement.
    ///
    /// # Arguments
    ///
    /// * `asset_id` - The contract ID of the asset to be transferred.
    /// * `data` - The data field of the transaction.
    /// * `signatures` - The information for each user's signature for a specific transaction.
    /// * `to` - The recipient of the transaction.
    /// * `value` - The value sent in the transaction.
    ///
    /// # Reverts
    ///
    /// * When the constructor has not been called to initialize the contract.
    /// * When the amount of the asset being sent is greater than the balance in the contract.
    /// * When the public key cannot be recovered from a signature.
    /// * When the recovered addresses are not in ascending order (0x1 < 0x2 < 0x3...).
    /// * When the total approval count is less than the required threshold for execution.
    #[storage(read, write)]
    fn transfer(asset_id: ContractId, data: b256, signatures: Vec<SignatureInfo>, to: Identity, value: u64);
}

abi Info {
    /// Returns the contract's balance of the specified asset.
    ///
    /// # Arguments
    ///
    /// * `asset_id` - The contract ID of the asset to check that balance of.
    fn balance(asset_id: ContractId) -> u64;

    /// Returns the current nonce.
    #[storage(read)]
    fn nonce() -> u64;

    /// Returns a boolean indicating if the address is an owner in the contract.
    #[storage(read)]
    fn owner(user: b256) -> bool;

    /// Returns the current threshold.
    #[storage(read)]
    fn threshold() -> u64;

    /// Takes in transaction data and hashes it into a unique tx hash.
    ///
    /// # Arguments
    ///
    /// * `data` - The data field of the transaction.
    /// * `nonce` - The nonce field of the transaction.
    /// * `to` - The recipient of the transaction.
    /// * `value` - The value sent in the transaction.
    fn transaction_hash(data: b256, nonce: u64, to: Identity, value: u64) -> b256;

    /// Creates a hash which is used to make updates to the state of the contract
    ///
    /// Used to manage the contract while `transaction_hash()` is used for external calls
    ///
    /// # Arguments
    ///
    /// * `data` - The data field of the transaction.
    /// * `nonce` - The nonce field of the transaction.
    fn update_hash(data: b256, nonce: u64) -> b256;
}
