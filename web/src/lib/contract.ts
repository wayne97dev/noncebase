import type { Address } from "viem";

// Nonce ERC-20 token + V4 hook + PoW miner — Base mainnet.
// Deployed via Deploy.s.sol on 2026-05-18, verified on Basescan.
// Hook bits validated: lower 14 bits of address == 0x20CC
// (0x4f20cc & 0x3fff == 0x20CC).
// tx: 0x78942602a6da121bc3f1bf073dc69336bcd1d8bede25929b21f9c6298041dc07
// block: 46167098
//
// Note: a first deploy at 0x891CF78c…60cC was abandoned after we added
// the website + X banner to the contract header. The bytecode is
// immutable, so we redeployed to surface the correct source on Basescan.
export const NONCE_ADDRESS: Address =
  "0xE7bADd12bdf070e925A55A98c981f3aBAB4f20cc";

export const NONCE_DECIMALS = 18;
export const NONCE_SYMBOL = "NONCE";

// MinerAgent ERC-721 contract address. Filled in after MinerAgent
// deploys against the Nonce token above. See CLAIM_LIVE in MinerAgent.tsx.
export const MINER_AGENT_ADDRESS: Address =
  "0x0000000000000000000000000000000000000000";

// V4 PoolManager on Base mainnet — used to display pool info, not
// required for contract reads. Verify against current Uniswap V4
// deployments docs before relying on this value.
export const POOL_MANAGER_ADDRESS: Address =
  "0x498581fF718922c3f8e6A244956aF099B2652b2b";
