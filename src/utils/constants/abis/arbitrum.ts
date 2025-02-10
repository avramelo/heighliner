export const ARBITRUM_CONTRACTS_ABIS = {
  VAULT: [
    {
      inputs: [
        {
          internalType: "contract IUniswapV3Factory",
          name: "factory_",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "burnAmount0",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "burnAmount1",
          type: "uint256",
        },
      ],
      name: "LPBurned",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint24[]",
          name: "feeTiers",
          type: "uint24[]",
        },
      ],
      name: "LogAddPools",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address[]",
          name: "routers",
          type: "address[]",
        },
      ],
      name: "LogBlacklistRouters",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "receiver",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "burnAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0Out",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1Out",
          type: "uint256",
        },
      ],
      name: "LogBurn",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "fee0",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fee1",
          type: "uint256",
        },
      ],
      name: "LogCollectedFees",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "receiver",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "mintAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0In",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1In",
          type: "uint256",
        },
      ],
      name: "LogMint",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              components: [
                { internalType: "uint128", name: "liquidity", type: "uint128" },
                {
                  components: [
                    { internalType: "int24", name: "lowerTick", type: "int24" },
                    { internalType: "int24", name: "upperTick", type: "int24" },
                    { internalType: "uint24", name: "feeTier", type: "uint24" },
                  ],
                  internalType: "struct Range",
                  name: "range",
                  type: "tuple",
                },
              ],
              internalType: "struct PositionLiquidity[]",
              name: "burns",
              type: "tuple[]",
            },
            {
              components: [
                { internalType: "uint128", name: "liquidity", type: "uint128" },
                {
                  components: [
                    { internalType: "int24", name: "lowerTick", type: "int24" },
                    { internalType: "int24", name: "upperTick", type: "int24" },
                    { internalType: "uint24", name: "feeTier", type: "uint24" },
                  ],
                  internalType: "struct Range",
                  name: "range",
                  type: "tuple",
                },
              ],
              internalType: "struct PositionLiquidity[]",
              name: "mints",
              type: "tuple[]",
            },
            {
              components: [
                { internalType: "bytes", name: "payload", type: "bytes" },
                { internalType: "address", name: "router", type: "address" },
                { internalType: "uint256", name: "amountIn", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "expectedMinReturn",
                  type: "uint256",
                },
                { internalType: "bool", name: "zeroForOne", type: "bool" },
              ],
              internalType: "struct SwapPayload",
              name: "swap",
              type: "tuple",
            },
            { internalType: "uint256", name: "minBurn0", type: "uint256" },
            { internalType: "uint256", name: "minBurn1", type: "uint256" },
            { internalType: "uint256", name: "minDeposit0", type: "uint256" },
            { internalType: "uint256", name: "minDeposit1", type: "uint256" },
          ],
          indexed: false,
          internalType: "struct Rebalance",
          name: "rebalanceParams",
          type: "tuple",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "swapDelta0",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "swapDelta1",
          type: "uint256",
        },
      ],
      name: "LogRebalance",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address[]",
          name: "pools",
          type: "address[]",
        },
      ],
      name: "LogRemovePools",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "minter",
          type: "address",
        },
      ],
      name: "LogRestrictedMint",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "init0",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "init1",
          type: "uint256",
        },
      ],
      name: "LogSetInits",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "newManager",
          type: "address",
        },
      ],
      name: "LogSetManager",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint16",
          name: "managerFeeBPS",
          type: "uint16",
        },
      ],
      name: "LogSetManagerFeeBPS",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address[]",
          name: "routers",
          type: "address[]",
        },
      ],
      name: "LogWhitelistRouters",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1",
          type: "uint256",
        },
      ],
      name: "LogWithdrawManagerBalance",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [{ internalType: "uint24[]", name: "feeTiers_", type: "uint24[]" }],
      name: "addPools",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address[]", name: "routers_", type: "address[]" }],
      name: "blacklistRouters",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "burnAmount_", type: "uint256" },
        { internalType: "address", name: "receiver_", type: "address" },
      ],
      name: "burn",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "subtractedValue", type: "uint256" },
      ],
      name: "decreaseAllowance",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "factory",
      outputs: [
        {
          internalType: "contract IUniswapV3Factory",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getPools",
      outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getRanges",
      outputs: [
        {
          components: [
            { internalType: "int24", name: "lowerTick", type: "int24" },
            { internalType: "int24", name: "upperTick", type: "int24" },
            { internalType: "uint24", name: "feeTier", type: "uint24" },
          ],
          internalType: "struct Range[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getRouters",
      outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "addedValue", type: "uint256" },
      ],
      name: "increaseAllowance",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "init0",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "init1",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "name_", type: "string" },
        { internalType: "string", name: "symbol_", type: "string" },
        {
          components: [
            { internalType: "uint24[]", name: "feeTiers", type: "uint24[]" },
            { internalType: "address", name: "token0", type: "address" },
            { internalType: "address", name: "token1", type: "address" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "init0", type: "uint256" },
            { internalType: "uint256", name: "init1", type: "uint256" },
            { internalType: "address", name: "manager", type: "address" },
            { internalType: "address[]", name: "routers", type: "address[]" },
          ],
          internalType: "struct InitializePayload",
          name: "params_",
          type: "tuple",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "manager",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "managerBalance0",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "managerBalance1",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "managerFeeBPS",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "mintAmount_", type: "uint256" },
        { internalType: "address", name: "receiver_", type: "address" },
      ],
      name: "mint",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                { internalType: "uint128", name: "liquidity", type: "uint128" },
                {
                  components: [
                    { internalType: "int24", name: "lowerTick", type: "int24" },
                    { internalType: "int24", name: "upperTick", type: "int24" },
                    { internalType: "uint24", name: "feeTier", type: "uint24" },
                  ],
                  internalType: "struct Range",
                  name: "range",
                  type: "tuple",
                },
              ],
              internalType: "struct PositionLiquidity[]",
              name: "burns",
              type: "tuple[]",
            },
            {
              components: [
                { internalType: "uint128", name: "liquidity", type: "uint128" },
                {
                  components: [
                    { internalType: "int24", name: "lowerTick", type: "int24" },
                    { internalType: "int24", name: "upperTick", type: "int24" },
                    { internalType: "uint24", name: "feeTier", type: "uint24" },
                  ],
                  internalType: "struct Range",
                  name: "range",
                  type: "tuple",
                },
              ],
              internalType: "struct PositionLiquidity[]",
              name: "mints",
              type: "tuple[]",
            },
            {
              components: [
                { internalType: "bytes", name: "payload", type: "bytes" },
                { internalType: "address", name: "router", type: "address" },
                { internalType: "uint256", name: "amountIn", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "expectedMinReturn",
                  type: "uint256",
                },
                { internalType: "bool", name: "zeroForOne", type: "bool" },
              ],
              internalType: "struct SwapPayload",
              name: "swap",
              type: "tuple",
            },
            { internalType: "uint256", name: "minBurn0", type: "uint256" },
            { internalType: "uint256", name: "minBurn1", type: "uint256" },
            { internalType: "uint256", name: "minDeposit0", type: "uint256" },
            { internalType: "uint256", name: "minDeposit1", type: "uint256" },
          ],
          internalType: "struct Rebalance",
          name: "rebalanceParams_",
          type: "tuple",
        },
      ],
      name: "rebalance",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address[]", name: "pools_", type: "address[]" }],
      name: "removePools",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "restrictedMint",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "init0_", type: "uint256" },
        { internalType: "uint256", name: "init1_", type: "uint256" },
      ],
      name: "setInits",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "manager_", type: "address" }],
      name: "setManager",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint16", name: "managerFeeBPS_", type: "uint16" }],
      name: "setManagerFeeBPS",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "minter_", type: "address" }],
      name: "setRestrictedMint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "token0",
      outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "token1",
      outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amount0Owed_", type: "uint256" },
        { internalType: "uint256", name: "amount1Owed_", type: "uint256" },
        { internalType: "bytes", name: "", type: "bytes" },
      ],
      name: "uniswapV3MintCallback",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address[]", name: "routers_", type: "address[]" }],
      name: "whitelistRouters",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdrawManagerBalance",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  HELPER: [
    {
      inputs: [
        {
          internalType: "contract IUniswapV3Factory",
          name: "factory_",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "factory",
      outputs: [
        {
          internalType: "contract IUniswapV3Factory",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "int24", name: "lowerTick", type: "int24" },
            { internalType: "int24", name: "upperTick", type: "int24" },
            { internalType: "uint24", name: "feeTier", type: "uint24" },
          ],
          internalType: "struct Range[]",
          name: "ranges_",
          type: "tuple[]",
        },
        { internalType: "address", name: "token0_", type: "address" },
        { internalType: "address", name: "token1_", type: "address" },
        { internalType: "address", name: "vaultV2_", type: "address" },
      ],
      name: "token0AndToken1ByRange",
      outputs: [
        {
          components: [
            {
              components: [
                { internalType: "int24", name: "lowerTick", type: "int24" },
                { internalType: "int24", name: "upperTick", type: "int24" },
                { internalType: "uint24", name: "feeTier", type: "uint24" },
              ],
              internalType: "struct Range",
              name: "range",
              type: "tuple",
            },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          internalType: "struct Amount[]",
          name: "amount0s",
          type: "tuple[]",
        },
        {
          components: [
            {
              components: [
                { internalType: "int24", name: "lowerTick", type: "int24" },
                { internalType: "int24", name: "upperTick", type: "int24" },
                { internalType: "uint24", name: "feeTier", type: "uint24" },
              ],
              internalType: "struct Range",
              name: "range",
              type: "tuple",
            },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          internalType: "struct Amount[]",
          name: "amount1s",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "int24", name: "lowerTick", type: "int24" },
            { internalType: "int24", name: "upperTick", type: "int24" },
            { internalType: "uint24", name: "feeTier", type: "uint24" },
          ],
          internalType: "struct Range[]",
          name: "ranges_",
          type: "tuple[]",
        },
        { internalType: "address", name: "token0_", type: "address" },
        { internalType: "address", name: "token1_", type: "address" },
        { internalType: "address", name: "vaultV2_", type: "address" },
      ],
      name: "token0AndToken1PlusFeesByRange",
      outputs: [
        {
          components: [
            {
              components: [
                { internalType: "int24", name: "lowerTick", type: "int24" },
                { internalType: "int24", name: "upperTick", type: "int24" },
                { internalType: "uint24", name: "feeTier", type: "uint24" },
              ],
              internalType: "struct Range",
              name: "range",
              type: "tuple",
            },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          internalType: "struct Amount[]",
          name: "amount0s",
          type: "tuple[]",
        },
        {
          components: [
            {
              components: [
                { internalType: "int24", name: "lowerTick", type: "int24" },
                { internalType: "int24", name: "upperTick", type: "int24" },
                { internalType: "uint24", name: "feeTier", type: "uint24" },
              ],
              internalType: "struct Range",
              name: "range",
              type: "tuple",
            },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          internalType: "struct Amount[]",
          name: "amount1s",
          type: "tuple[]",
        },
        {
          components: [
            {
              components: [
                { internalType: "int24", name: "lowerTick", type: "int24" },
                { internalType: "int24", name: "upperTick", type: "int24" },
                { internalType: "uint24", name: "feeTier", type: "uint24" },
              ],
              internalType: "struct Range",
              name: "range",
              type: "tuple",
            },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          internalType: "struct Amount[]",
          name: "fee0s",
          type: "tuple[]",
        },
        {
          components: [
            {
              components: [
                { internalType: "int24", name: "lowerTick", type: "int24" },
                { internalType: "int24", name: "upperTick", type: "int24" },
                { internalType: "uint24", name: "feeTier", type: "uint24" },
              ],
              internalType: "struct Range",
              name: "range",
              type: "tuple",
            },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          internalType: "struct Amount[]",
          name: "fee1s",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IArrakisV2",
          name: "vault_",
          type: "address",
        },
      ],
      name: "totalLiquidity",
      outputs: [
        {
          components: [
            { internalType: "uint128", name: "liquidity", type: "uint128" },
            {
              components: [
                { internalType: "int24", name: "lowerTick", type: "int24" },
                { internalType: "int24", name: "upperTick", type: "int24" },
                { internalType: "uint24", name: "feeTier", type: "uint24" },
              ],
              internalType: "struct Range",
              name: "range",
              type: "tuple",
            },
          ],
          internalType: "struct PositionLiquidity[]",
          name: "liquidities",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IArrakisV2",
          name: "vault_",
          type: "address",
        },
      ],
      name: "totalUnderlying",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IArrakisV2",
          name: "vault_",
          type: "address",
        },
        { internalType: "uint160", name: "sqrtPriceX96_", type: "uint160" },
      ],
      name: "totalUnderlyingAtPrice",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IArrakisV2",
          name: "vault_",
          type: "address",
        },
      ],
      name: "totalUnderlyingWithFees",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
        { internalType: "uint256", name: "fee0", type: "uint256" },
        { internalType: "uint256", name: "fee1", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IArrakisV2",
          name: "vault_",
          type: "address",
        },
      ],
      name: "totalUnderlyingWithFeesAndLeftOver",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "amount0", type: "uint256" },
            { internalType: "uint256", name: "amount1", type: "uint256" },
            { internalType: "uint256", name: "fee0", type: "uint256" },
            { internalType: "uint256", name: "fee1", type: "uint256" },
            { internalType: "uint256", name: "leftOver0", type: "uint256" },
            { internalType: "uint256", name: "leftOver1", type: "uint256" },
          ],
          internalType: "struct UnderlyingOutput",
          name: "underlying",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  ROUTER: [
    {
      inputs: [
        { internalType: "address", name: "weth_", type: "address" },
        { internalType: "address", name: "resolver_", type: "address" },
        { internalType: "address", name: "permit2_", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "vault",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address[]",
          name: "blacklisted",
          type: "address[]",
        },
      ],
      name: "LogBlacklist",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "vault",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "supplyCap",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "hasWhitelist",
          type: "bool",
        },
      ],
      name: "LogSetVault",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "vault",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address[]",
          name: "whitelisted",
          type: "address[]",
        },
      ],
      name: "LogWhitelist",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bool",
          name: "zeroForOne",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0Diff",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1Diff",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amountOutSwap",
          type: "uint256",
        },
      ],
      name: "Swapped",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Unpaused",
      type: "event",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "uint256", name: "amount0Max", type: "uint256" },
            { internalType: "uint256", name: "amount1Max", type: "uint256" },
            { internalType: "uint256", name: "amount0Min", type: "uint256" },
            { internalType: "uint256", name: "amount1Min", type: "uint256" },
            {
              internalType: "uint256",
              name: "amountSharesMin",
              type: "uint256",
            },
            { internalType: "address", name: "vault", type: "address" },
            { internalType: "address", name: "receiver", type: "address" },
            { internalType: "address", name: "gauge", type: "address" },
          ],
          internalType: "struct AddLiquidityData",
          name: "params_",
          type: "tuple",
        },
      ],
      name: "addLiquidity",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
        { internalType: "uint256", name: "sharesReceived", type: "uint256" },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "amount0Max",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1Max",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount0Min",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1Min",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountSharesMin",
                  type: "uint256",
                },
                { internalType: "address", name: "vault", type: "address" },
                { internalType: "address", name: "receiver", type: "address" },
                { internalType: "address", name: "gauge", type: "address" },
              ],
              internalType: "struct AddLiquidityData",
              name: "addData",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    { internalType: "address", name: "token", type: "address" },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct TokenPermissions[]",
                  name: "permitted",
                  type: "tuple[]",
                },
                { internalType: "uint256", name: "nonce", type: "uint256" },
                { internalType: "uint256", name: "deadline", type: "uint256" },
              ],
              internalType: "struct PermitBatchTransferFrom",
              name: "permit",
              type: "tuple",
            },
            { internalType: "bytes", name: "signature", type: "bytes" },
          ],
          internalType: "struct AddLiquidityPermit2Data",
          name: "params_",
          type: "tuple",
        },
      ],
      name: "addLiquidityPermit2",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
        { internalType: "uint256", name: "sharesReceived", type: "uint256" },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "vault_", type: "address" },
        { internalType: "address[]", name: "toBlacklist_", type: "address[]" },
      ],
      name: "blacklist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "vault_", type: "address" }],
      name: "getWhitelist",
      outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner_", type: "address" }],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "mintRestrictedVaults",
      outputs: [
        { internalType: "uint256", name: "supplyCap", type: "uint256" },
        { internalType: "bool", name: "hasWhitelist", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "permit2",
      outputs: [{ internalType: "contract IPermit2", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "uint256", name: "burnAmount", type: "uint256" },
            { internalType: "uint256", name: "amount0Min", type: "uint256" },
            { internalType: "uint256", name: "amount1Min", type: "uint256" },
            { internalType: "address", name: "vault", type: "address" },
            {
              internalType: "address payable",
              name: "receiver",
              type: "address",
            },
            { internalType: "address", name: "gauge", type: "address" },
            { internalType: "bool", name: "receiveETH", type: "bool" },
          ],
          internalType: "struct RemoveLiquidityData",
          name: "params_",
          type: "tuple",
        },
      ],
      name: "removeLiquidity",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "burnAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount0Min",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1Min",
                  type: "uint256",
                },
                { internalType: "address", name: "vault", type: "address" },
                {
                  internalType: "address payable",
                  name: "receiver",
                  type: "address",
                },
                { internalType: "address", name: "gauge", type: "address" },
                { internalType: "bool", name: "receiveETH", type: "bool" },
              ],
              internalType: "struct RemoveLiquidityData",
              name: "removeData",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    { internalType: "address", name: "token", type: "address" },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct TokenPermissions",
                  name: "permitted",
                  type: "tuple",
                },
                { internalType: "uint256", name: "nonce", type: "uint256" },
                { internalType: "uint256", name: "deadline", type: "uint256" },
              ],
              internalType: "struct PermitTransferFrom",
              name: "permit",
              type: "tuple",
            },
            { internalType: "bytes", name: "signature", type: "bytes" },
          ],
          internalType: "struct RemoveLiquidityPermit2Data",
          name: "params_",
          type: "tuple",
        },
      ],
      name: "removeLiquidityPermit2",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "resolver",
      outputs: [
        {
          internalType: "contract IArrakisV2Resolver",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "vault_", type: "address" },
        { internalType: "uint256", name: "supplyCap_", type: "uint256" },
        { internalType: "bool", name: "hasWhitelist_", type: "bool" },
      ],
      name: "setMintRules",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                { internalType: "bytes", name: "swapPayload", type: "bytes" },
                {
                  internalType: "uint256",
                  name: "amountInSwap",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountOutSwap",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "swapRouter",
                  type: "address",
                },
                { internalType: "bool", name: "zeroForOne", type: "bool" },
              ],
              internalType: "struct SwapData",
              name: "swapData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "amount0Max",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1Max",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount0Min",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1Min",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountSharesMin",
                  type: "uint256",
                },
                { internalType: "address", name: "vault", type: "address" },
                { internalType: "address", name: "receiver", type: "address" },
                { internalType: "address", name: "gauge", type: "address" },
              ],
              internalType: "struct AddLiquidityData",
              name: "addData",
              type: "tuple",
            },
          ],
          internalType: "struct SwapAndAddData",
          name: "params_",
          type: "tuple",
        },
      ],
      name: "swapAndAddLiquidity",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
        { internalType: "uint256", name: "sharesReceived", type: "uint256" },
        { internalType: "uint256", name: "amount0Diff", type: "uint256" },
        { internalType: "uint256", name: "amount1Diff", type: "uint256" },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "bytes",
                      name: "swapPayload",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "amountInSwap",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amountOutSwap",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "swapRouter",
                      type: "address",
                    },
                    { internalType: "bool", name: "zeroForOne", type: "bool" },
                  ],
                  internalType: "struct SwapData",
                  name: "swapData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "amount0Max",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount1Max",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount0Min",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount1Min",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amountSharesMin",
                      type: "uint256",
                    },
                    { internalType: "address", name: "vault", type: "address" },
                    {
                      internalType: "address",
                      name: "receiver",
                      type: "address",
                    },
                    { internalType: "address", name: "gauge", type: "address" },
                  ],
                  internalType: "struct AddLiquidityData",
                  name: "addData",
                  type: "tuple",
                },
              ],
              internalType: "struct SwapAndAddData",
              name: "swapAndAddData",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    { internalType: "address", name: "token", type: "address" },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct TokenPermissions[]",
                  name: "permitted",
                  type: "tuple[]",
                },
                { internalType: "uint256", name: "nonce", type: "uint256" },
                { internalType: "uint256", name: "deadline", type: "uint256" },
              ],
              internalType: "struct PermitBatchTransferFrom",
              name: "permit",
              type: "tuple",
            },
            { internalType: "bytes", name: "signature", type: "bytes" },
          ],
          internalType: "struct SwapAndAddPermit2Data",
          name: "params_",
          type: "tuple",
        },
      ],
      name: "swapAndAddLiquidityPermit2",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
        { internalType: "uint256", name: "sharesReceived", type: "uint256" },
        { internalType: "uint256", name: "amount0Diff", type: "uint256" },
        { internalType: "uint256", name: "amount1Diff", type: "uint256" },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "swapper",
      outputs: [
        {
          internalType: "contract IRouterSwapExecutor",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "unpause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "swapper_", type: "address" }],
      name: "updateSwapExecutor",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "weth",
      outputs: [{ internalType: "contract IWETH", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "vault_", type: "address" },
        { internalType: "address[]", name: "toWhitelist_", type: "address[]" },
      ],
      name: "whitelist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    { stateMutability: "payable", type: "receive" },
  ],
  RESOLVER: [
    {
      inputs: [
        {
          internalType: "contract IUniswapV3Factory",
          name: "factory_",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "factory",
      outputs: [
        {
          internalType: "contract IUniswapV3Factory",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint160", name: "sqrtPriceX96_", type: "uint160" },
        { internalType: "int24", name: "lowerTick_", type: "int24" },
        { internalType: "int24", name: "upperTick_", type: "int24" },
        { internalType: "int128", name: "liquidity_", type: "int128" },
      ],
      name: "getAmountsForLiquidity",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IArrakisV2",
          name: "vaultV2_",
          type: "address",
        },
        { internalType: "uint256", name: "amount0Max_", type: "uint256" },
        { internalType: "uint256", name: "amount1Max_", type: "uint256" },
      ],
      name: "getMintAmounts",
      outputs: [
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
        { internalType: "uint256", name: "mintAmount", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "addr_", type: "address" },
        { internalType: "int24", name: "lowerTick_", type: "int24" },
        { internalType: "int24", name: "upperTick_", type: "int24" },
      ],
      name: "getPositionId",
      outputs: [{ internalType: "bytes32", name: "positionId", type: "bytes32" }],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                { internalType: "int24", name: "lowerTick", type: "int24" },
                { internalType: "int24", name: "upperTick", type: "int24" },
                { internalType: "uint24", name: "feeTier", type: "uint24" },
              ],
              internalType: "struct Range",
              name: "range",
              type: "tuple",
            },
            { internalType: "uint256", name: "weight", type: "uint256" },
          ],
          internalType: "struct RangeWeight[]",
          name: "rangeWeights_",
          type: "tuple[]",
        },
        {
          internalType: "contract IArrakisV2",
          name: "vaultV2_",
          type: "address",
        },
      ],
      name: "standardRebalance",
      outputs: [
        {
          components: [
            {
              components: [
                { internalType: "uint128", name: "liquidity", type: "uint128" },
                {
                  components: [
                    { internalType: "int24", name: "lowerTick", type: "int24" },
                    { internalType: "int24", name: "upperTick", type: "int24" },
                    { internalType: "uint24", name: "feeTier", type: "uint24" },
                  ],
                  internalType: "struct Range",
                  name: "range",
                  type: "tuple",
                },
              ],
              internalType: "struct PositionLiquidity[]",
              name: "burns",
              type: "tuple[]",
            },
            {
              components: [
                { internalType: "uint128", name: "liquidity", type: "uint128" },
                {
                  components: [
                    { internalType: "int24", name: "lowerTick", type: "int24" },
                    { internalType: "int24", name: "upperTick", type: "int24" },
                    { internalType: "uint24", name: "feeTier", type: "uint24" },
                  ],
                  internalType: "struct Range",
                  name: "range",
                  type: "tuple",
                },
              ],
              internalType: "struct PositionLiquidity[]",
              name: "mints",
              type: "tuple[]",
            },
            {
              components: [
                { internalType: "bytes", name: "payload", type: "bytes" },
                { internalType: "address", name: "router", type: "address" },
                { internalType: "uint256", name: "amountIn", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "expectedMinReturn",
                  type: "uint256",
                },
                { internalType: "bool", name: "zeroForOne", type: "bool" },
              ],
              internalType: "struct SwapPayload",
              name: "swap",
              type: "tuple",
            },
            { internalType: "uint256", name: "minBurn0", type: "uint256" },
            { internalType: "uint256", name: "minBurn1", type: "uint256" },
            { internalType: "uint256", name: "minDeposit0", type: "uint256" },
            { internalType: "uint256", name: "minDeposit1", type: "uint256" },
          ],
          internalType: "struct Rebalance",
          name: "rebalanceParams",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};
