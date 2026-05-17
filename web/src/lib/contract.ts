import type { Address } from "viem";

// Daemon ERC-20 token + V4 hook + PoW miner — Base mainnet.
// Filled in after the Deploy.s.sol broadcast. Until then the frontend
// reads from the zero address and Stats renders the "Contract not
// reachable" placeholder.
export const DAEMON_ADDRESS: Address =
  "0x0000000000000000000000000000000000000000";

export const DAEMON_DECIMALS = 18;
export const DAEMON_SYMBOL = "DMN";

// MinerAgent ERC-721 contract address. Filled in after MinerAgent
// deploys against the Daemon above. See CLAIM_LIVE in MinerAgent.tsx.
export const MINER_AGENT_ADDRESS: Address =
  "0x0000000000000000000000000000000000000000";

// V4 PoolManager on Base mainnet — used to display pool info, not
// required for contract reads. Verify against current Uniswap V4
// deployments docs before relying on this value.
export const POOL_MANAGER_ADDRESS: Address =
  "0x498581fF718922c3f8e6A244956aF099B2652b2b";
