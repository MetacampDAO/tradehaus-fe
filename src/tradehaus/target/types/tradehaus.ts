export type Tradehaus = {
  "version": "0.1.0",
  "name": "tradehaus",
  "instructions": [
    {
      "name": "createGame",
      "accounts": [
        {
          "name": "gameConfig",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "host",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "hostRewardAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "join",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "u64"
        },
        {
          "name": "end",
          "type": "u64"
        },
        {
          "name": "startUsd",
          "type": "u64"
        },
        {
          "name": "winners",
          "type": "u8"
        },
        {
          "name": "maxPlayers",
          "type": "u64"
        },
        {
          "name": "rewardAmount",
          "type": "u64"
        },
        {
          "name": "rewardEscrowBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "joinGame",
      "accounts": [
        {
          "name": "gameConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "playerFund",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fundBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "swapItems",
      "accounts": [
        {
          "name": "playerFund",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gameConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u128"
        },
        {
          "name": "sellCoin",
          "type": "u8"
        },
        {
          "name": "buyCoin",
          "type": "u8"
        }
      ]
    },
    {
      "name": "distributeRewards",
      "accounts": [
        {
          "name": "player",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "playerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "host",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gameConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "fund",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "btcQty",
            "type": "u128"
          },
          {
            "name": "ethQty",
            "type": "u128"
          },
          {
            "name": "linkQty",
            "type": "u128"
          },
          {
            "name": "solQty",
            "type": "u128"
          },
          {
            "name": "usdQty",
            "type": "u128"
          },
          {
            "name": "fundBump",
            "type": "u8"
          },
          {
            "name": "gameConfig",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "host",
            "type": "publicKey"
          },
          {
            "name": "hostRewardAccount",
            "type": "publicKey"
          },
          {
            "name": "rewardAmount",
            "type": "u64"
          },
          {
            "name": "joinTime",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          },
          {
            "name": "startUsd",
            "type": "u128"
          },
          {
            "name": "currentCap",
            "type": "u64"
          },
          {
            "name": "maxCap",
            "type": "u64"
          },
          {
            "name": "winners",
            "type": "u8"
          },
          {
            "name": "rewardMint",
            "type": "publicKey"
          },
          {
            "name": "rewardEscrow",
            "type": "publicKey"
          },
          {
            "name": "rewardEscrowBump",
            "type": "u8"
          },
          {
            "name": "gameEnded",
            "type": "bool"
          }
        ]
      }
    }
  ]
};

export const IDL: Tradehaus = {
  "version": "0.1.0",
  "name": "tradehaus",
  "instructions": [
    {
      "name": "createGame",
      "accounts": [
        {
          "name": "gameConfig",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "host",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "hostRewardAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "join",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "u64"
        },
        {
          "name": "end",
          "type": "u64"
        },
        {
          "name": "startUsd",
          "type": "u64"
        },
        {
          "name": "winners",
          "type": "u8"
        },
        {
          "name": "maxPlayers",
          "type": "u64"
        },
        {
          "name": "rewardAmount",
          "type": "u64"
        },
        {
          "name": "rewardEscrowBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "joinGame",
      "accounts": [
        {
          "name": "gameConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "playerFund",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fundBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "swapItems",
      "accounts": [
        {
          "name": "playerFund",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gameConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u128"
        },
        {
          "name": "sellCoin",
          "type": "u8"
        },
        {
          "name": "buyCoin",
          "type": "u8"
        }
      ]
    },
    {
      "name": "distributeRewards",
      "accounts": [
        {
          "name": "player",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "playerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "host",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gameConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "fund",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "btcQty",
            "type": "u128"
          },
          {
            "name": "ethQty",
            "type": "u128"
          },
          {
            "name": "linkQty",
            "type": "u128"
          },
          {
            "name": "solQty",
            "type": "u128"
          },
          {
            "name": "usdQty",
            "type": "u128"
          },
          {
            "name": "fundBump",
            "type": "u8"
          },
          {
            "name": "gameConfig",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "host",
            "type": "publicKey"
          },
          {
            "name": "hostRewardAccount",
            "type": "publicKey"
          },
          {
            "name": "rewardAmount",
            "type": "u64"
          },
          {
            "name": "joinTime",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          },
          {
            "name": "startUsd",
            "type": "u128"
          },
          {
            "name": "currentCap",
            "type": "u64"
          },
          {
            "name": "maxCap",
            "type": "u64"
          },
          {
            "name": "winners",
            "type": "u8"
          },
          {
            "name": "rewardMint",
            "type": "publicKey"
          },
          {
            "name": "rewardEscrow",
            "type": "publicKey"
          },
          {
            "name": "rewardEscrowBump",
            "type": "u8"
          },
          {
            "name": "gameEnded",
            "type": "bool"
          }
        ]
      }
    }
  ]
};
