// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup9: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup16: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup19: frame_system::EventRecord<unique_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup24: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup25: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null'
    }
  },
  /**
   * Lookup26: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup27: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup28: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup29: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup30: pallet_state_trie_migration::pallet::Event<T>
   **/
  PalletStateTrieMigrationEvent: {
    _enum: {
      Migrated: {
        top: 'u32',
        child: 'u32',
        compute: 'PalletStateTrieMigrationMigrationCompute',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      AutoMigrationFinished: 'Null',
      Halted: {
        error: 'PalletStateTrieMigrationError'
      }
    }
  },
  /**
   * Lookup31: pallet_state_trie_migration::pallet::MigrationCompute
   **/
  PalletStateTrieMigrationMigrationCompute: {
    _enum: ['Signed', 'Auto']
  },
  /**
   * Lookup32: pallet_state_trie_migration::pallet::Error<T>
   **/
  PalletStateTrieMigrationError: {
    _enum: ['MaxSignedLimits', 'KeyTooLong', 'NotEnoughFunds', 'BadWitness', 'SignedMigrationNotAllowed', 'BadChildRoot']
  },
  /**
   * Lookup33: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      UpgradeAuthorized: {
        codeHash: 'H256',
      },
      DownwardMessagesReceived: {
        count: 'u32',
      },
      DownwardMessagesProcessed: {
        weightUsed: 'SpWeightsWeightV2Weight',
        dmqHead: 'H256',
      },
      UpwardMessageSent: {
        messageHash: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup35: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup36: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup37: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup38: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128'
      }
    }
  },
  /**
   * Lookup39: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup43: orml_vesting::module::Event<T>
   **/
  OrmlVestingModuleEvent: {
    _enum: {
      VestingScheduleAdded: {
        from: 'AccountId32',
        to: 'AccountId32',
        vestingSchedule: 'OrmlVestingVestingSchedule',
      },
      Claimed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      VestingSchedulesUpdated: {
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup44: orml_vesting::VestingSchedule<BlockNumber, Balance>
   **/
  OrmlVestingVestingSchedule: {
    start: 'u32',
    period: 'u32',
    periodCount: 'u32',
    perPeriod: 'Compact<u128>'
  },
  /**
   * Lookup46: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: 'AccountId32',
        assets: 'StagingXcmV3MultiassetMultiAssets',
        fee: 'StagingXcmV3MultiAsset',
        dest: 'StagingXcmV3MultiLocation'
      }
    }
  },
  /**
   * Lookup47: staging_xcm::v3::multiasset::MultiAssets
   **/
  StagingXcmV3MultiassetMultiAssets: 'Vec<StagingXcmV3MultiAsset>',
  /**
   * Lookup49: staging_xcm::v3::multiasset::MultiAsset
   **/
  StagingXcmV3MultiAsset: {
    id: 'StagingXcmV3MultiassetAssetId',
    fun: 'StagingXcmV3MultiassetFungibility'
  },
  /**
   * Lookup50: staging_xcm::v3::multiasset::AssetId
   **/
  StagingXcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup51: staging_xcm::v3::multilocation::MultiLocation
   **/
  StagingXcmV3MultiLocation: {
    parents: 'u8',
    interior: 'StagingXcmV3Junctions'
  },
  /**
   * Lookup52: staging_xcm::v3::junctions::Junctions
   **/
  StagingXcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'StagingXcmV3Junction',
      X2: '(StagingXcmV3Junction,StagingXcmV3Junction)',
      X3: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X4: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X5: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X6: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X7: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X8: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)'
    }
  },
  /**
   * Lookup53: staging_xcm::v3::junction::Junction
   **/
  StagingXcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'StagingXcmV3JunctionBodyId',
        part: 'StagingXcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'StagingXcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup56: staging_xcm::v3::junction::NetworkId
   **/
  StagingXcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null'
    }
  },
  /**
   * Lookup58: staging_xcm::v3::junction::BodyId
   **/
  StagingXcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup59: staging_xcm::v3::junction::BodyPart
   **/
  StagingXcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup60: staging_xcm::v3::multiasset::Fungibility
   **/
  StagingXcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup61: staging_xcm::v3::multiasset::AssetInstance
   **/
  StagingXcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup64: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'PalletForeignAssetsAssetId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'PalletForeignAssetsAssetId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'PalletForeignAssetsAssetId',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
      },
      Locked: {
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        currencyId: 'PalletForeignAssetsAssetId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Issued: {
        currencyId: 'PalletForeignAssetsAssetId',
        amount: 'u128',
      },
      Rescinded: {
        currencyId: 'PalletForeignAssetsAssetId',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup65: pallet_foreign_assets::AssetId
   **/
  PalletForeignAssetsAssetId: {
    _enum: {
      ForeignAssetId: 'u32',
      NativeAssetId: 'PalletForeignAssetsNativeCurrency'
    }
  },
  /**
   * Lookup66: pallet_foreign_assets::NativeCurrency
   **/
  PalletForeignAssetsNativeCurrency: {
    _enum: ['Here', 'Parent']
  },
  /**
   * Lookup67: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        weight: 'SpWeightsWeightV2Weight',
      },
      Fail: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        error: 'StagingXcmV3TraitsError',
        weight: 'SpWeightsWeightV2Weight',
      },
      BadVersion: {
        messageHash: '[u8;32]',
      },
      BadFormat: {
        messageHash: '[u8;32]',
      },
      XcmpMessageSent: {
        messageHash: '[u8;32]',
      },
      OverweightEnqueued: {
        sender: 'u32',
        sentAt: 'u32',
        index: 'u64',
        required: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        index: 'u64',
        used: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup68: staging_xcm::v3::traits::Error
   **/
  StagingXcmV3TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup70: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: {
        outcome: 'StagingXcmV3TraitsOutcome',
      },
      Sent: {
        origin: 'StagingXcmV3MultiLocation',
        destination: 'StagingXcmV3MultiLocation',
        message: 'StagingXcmV3Xcm',
        messageId: '[u8;32]',
      },
      UnexpectedResponse: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseReady: {
        queryId: 'u64',
        response: 'StagingXcmV3Response',
      },
      Notified: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyOverweight: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
        actualWeight: 'SpWeightsWeightV2Weight',
        maxBudgetedWeight: 'SpWeightsWeightV2Weight',
      },
      NotifyDispatchError: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyDecodeFailed: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      InvalidResponder: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        expectedLocation: 'Option<StagingXcmV3MultiLocation>',
      },
      InvalidResponderVersion: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseTaken: {
        queryId: 'u64',
      },
      AssetsTrapped: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV3MultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
      },
      VersionChangeNotified: {
        destination: 'StagingXcmV3MultiLocation',
        result: 'u32',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      SupportedVersionChanged: {
        location: 'StagingXcmV3MultiLocation',
        version: 'u32',
      },
      NotifyTargetSendFail: {
        location: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        error: 'StagingXcmV3TraitsError',
      },
      NotifyTargetMigrationFail: {
        location: 'StagingXcmVersionedMultiLocation',
        queryId: 'u64',
      },
      InvalidQuerierVersion: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      InvalidQuerier: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        expectedQuerier: 'StagingXcmV3MultiLocation',
        maybeActualQuerier: 'Option<StagingXcmV3MultiLocation>',
      },
      VersionNotifyStarted: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyRequested: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyUnrequested: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      FeesPaid: {
        paying: 'StagingXcmV3MultiLocation',
        fees: 'StagingXcmV3MultiassetMultiAssets',
      },
      AssetsClaimed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV3MultiLocation',
        assets: 'StagingXcmVersionedMultiAssets'
      }
    }
  },
  /**
   * Lookup71: staging_xcm::v3::traits::Outcome
   **/
  StagingXcmV3TraitsOutcome: {
    _enum: {
      Complete: 'SpWeightsWeightV2Weight',
      Incomplete: '(SpWeightsWeightV2Weight,StagingXcmV3TraitsError)',
      Error: 'StagingXcmV3TraitsError'
    }
  },
  /**
   * Lookup72: staging_xcm::v3::Xcm<Call>
   **/
  StagingXcmV3Xcm: 'Vec<StagingXcmV3Instruction>',
  /**
   * Lookup74: staging_xcm::v3::Instruction<Call>
   **/
  StagingXcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'StagingXcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'StagingXcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssets',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssets',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      Transact: {
        originKind: 'StagingXcmV2OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'StagingXcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'StagingXcmV3Junctions',
      ReportError: 'StagingXcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV3MultiassetMultiAssetFilter',
        want: 'StagingXcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'StagingXcmV3QueryResponseInfo',
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'StagingXcmV3MultiAsset',
        weightLimit: 'StagingXcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV3Xcm',
      SetAppendix: 'StagingXcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssets',
        ticket: 'StagingXcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'StagingXcmV3MultiassetMultiAssets',
      ExpectAsset: 'StagingXcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<StagingXcmV3MultiLocation>',
      ExpectError: 'Option<(u32,StagingXcmV3TraitsError)>',
      ExpectTransactStatus: 'StagingXcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'StagingXcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'StagingXcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'StagingXcmV3Junction',
      ExportMessage: {
        network: 'StagingXcmV3JunctionNetworkId',
        destination: 'StagingXcmV3Junctions',
        xcm: 'StagingXcmV3Xcm',
      },
      LockAsset: {
        asset: 'StagingXcmV3MultiAsset',
        unlocker: 'StagingXcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'StagingXcmV3MultiAsset',
        target: 'StagingXcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'StagingXcmV3MultiAsset',
        owner: 'StagingXcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'StagingXcmV3MultiAsset',
        locker: 'StagingXcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'StagingXcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup75: staging_xcm::v3::Response
   **/
  StagingXcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,StagingXcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<StagingXcmV3PalletInfo>',
      DispatchResult: 'StagingXcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup79: staging_xcm::v3::PalletInfo
   **/
  StagingXcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup82: staging_xcm::v3::MaybeErrorCode
   **/
  StagingXcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup85: staging_xcm::v2::OriginKind
   **/
  StagingXcmV2OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup86: staging_xcm::double_encoded::DoubleEncoded<T>
   **/
  StagingXcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup87: staging_xcm::v3::QueryResponseInfo
   **/
  StagingXcmV3QueryResponseInfo: {
    destination: 'StagingXcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup88: staging_xcm::v3::multiasset::MultiAssetFilter
   **/
  StagingXcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV3MultiassetMultiAssets',
      Wild: 'StagingXcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup89: staging_xcm::v3::multiasset::WildMultiAsset
   **/
  StagingXcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV3MultiassetAssetId',
        fun: 'StagingXcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'StagingXcmV3MultiassetAssetId',
        fun: 'StagingXcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup90: staging_xcm::v3::multiasset::WildFungibility
   **/
  StagingXcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup92: staging_xcm::v3::WeightLimit
   **/
  StagingXcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup93: staging_xcm::VersionedMultiAssets
   **/
  StagingXcmVersionedMultiAssets: {
    _enum: {
      __Unused0: 'Null',
      V2: 'StagingXcmV2MultiassetMultiAssets',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiassetMultiAssets'
    }
  },
  /**
   * Lookup94: staging_xcm::v2::multiasset::MultiAssets
   **/
  StagingXcmV2MultiassetMultiAssets: 'Vec<StagingXcmV2MultiAsset>',
  /**
   * Lookup96: staging_xcm::v2::multiasset::MultiAsset
   **/
  StagingXcmV2MultiAsset: {
    id: 'StagingXcmV2MultiassetAssetId',
    fun: 'StagingXcmV2MultiassetFungibility'
  },
  /**
   * Lookup97: staging_xcm::v2::multiasset::AssetId
   **/
  StagingXcmV2MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV2MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup98: staging_xcm::v2::multilocation::MultiLocation
   **/
  StagingXcmV2MultiLocation: {
    parents: 'u8',
    interior: 'StagingXcmV2MultilocationJunctions'
  },
  /**
   * Lookup99: staging_xcm::v2::multilocation::Junctions
   **/
  StagingXcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'StagingXcmV2Junction',
      X2: '(StagingXcmV2Junction,StagingXcmV2Junction)',
      X3: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X4: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X5: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X6: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X7: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X8: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)'
    }
  },
  /**
   * Lookup100: staging_xcm::v2::junction::Junction
   **/
  StagingXcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'StagingXcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'StagingXcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'StagingXcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'StagingXcmV2BodyId',
        part: 'StagingXcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup101: staging_xcm::v2::NetworkId
   **/
  StagingXcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup103: staging_xcm::v2::BodyId
   **/
  StagingXcmV2BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup104: staging_xcm::v2::BodyPart
   **/
  StagingXcmV2BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup105: staging_xcm::v2::multiasset::Fungibility
   **/
  StagingXcmV2MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV2MultiassetAssetInstance'
    }
  },
  /**
   * Lookup106: staging_xcm::v2::multiasset::AssetInstance
   **/
  StagingXcmV2MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup107: staging_xcm::VersionedMultiLocation
   **/
  StagingXcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'StagingXcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup108: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;32]',
      UnsupportedVersion: '[u8;32]',
      ExecutedDownward: '([u8;32],StagingXcmV3TraitsOutcome)'
    }
  },
  /**
   * Lookup109: cumulus_pallet_dmp_queue::pallet::Event<T>
   **/
  CumulusPalletDmpQueueEvent: {
    _enum: {
      InvalidFormat: {
        messageHash: '[u8;32]',
      },
      UnsupportedVersion: {
        messageHash: '[u8;32]',
      },
      ExecutedDownward: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        outcome: 'StagingXcmV3TraitsOutcome',
      },
      WeightExhausted: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        remainingWeight: 'SpWeightsWeightV2Weight',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightEnqueued: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        overweightIndex: 'u64',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        overweightIndex: 'u64',
        weightUsed: 'SpWeightsWeightV2Weight',
      },
      MaxMessagesExhausted: {
        messageHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup110: pallet_configuration::pallet::Event<T>
   **/
  PalletConfigurationEvent: {
    _enum: {
      NewDesiredCollators: {
        desiredCollators: 'Option<u32>',
      },
      NewCollatorLicenseBond: {
        bondCost: 'Option<u128>',
      },
      NewCollatorKickThreshold: {
        lengthInBlocks: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup113: pallet_common::pallet::Event<T>
   **/
  PalletCommonEvent: {
    _enum: {
      CollectionCreated: '(u32,u8,AccountId32)',
      CollectionDestroyed: 'u32',
      ItemCreated: '(u32,u32,PalletEvmAccountBasicCrossAccountIdRepr,u128)',
      ItemDestroyed: '(u32,u32,PalletEvmAccountBasicCrossAccountIdRepr,u128)',
      Transfer: '(u32,u32,PalletEvmAccountBasicCrossAccountIdRepr,PalletEvmAccountBasicCrossAccountIdRepr,u128)',
      Approved: '(u32,u32,PalletEvmAccountBasicCrossAccountIdRepr,PalletEvmAccountBasicCrossAccountIdRepr,u128)',
      ApprovedForAll: '(u32,PalletEvmAccountBasicCrossAccountIdRepr,PalletEvmAccountBasicCrossAccountIdRepr,bool)',
      CollectionPropertySet: '(u32,Bytes)',
      CollectionPropertyDeleted: '(u32,Bytes)',
      TokenPropertySet: '(u32,u32,Bytes)',
      TokenPropertyDeleted: '(u32,u32,Bytes)',
      PropertyPermissionSet: '(u32,Bytes)',
      AllowListAddressAdded: '(u32,PalletEvmAccountBasicCrossAccountIdRepr)',
      AllowListAddressRemoved: '(u32,PalletEvmAccountBasicCrossAccountIdRepr)',
      CollectionAdminAdded: '(u32,PalletEvmAccountBasicCrossAccountIdRepr)',
      CollectionAdminRemoved: '(u32,PalletEvmAccountBasicCrossAccountIdRepr)',
      CollectionLimitSet: 'u32',
      CollectionOwnerChanged: '(u32,AccountId32)',
      CollectionPermissionSet: 'u32',
      CollectionSponsorSet: '(u32,AccountId32)',
      SponsorshipConfirmed: '(u32,AccountId32)',
      CollectionSponsorRemoved: 'u32'
    }
  },
  /**
   * Lookup116: pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>
   **/
  PalletEvmAccountBasicCrossAccountIdRepr: {
    _enum: {
      Substrate: 'AccountId32',
      Ethereum: 'H160'
    }
  },
  /**
   * Lookup119: pallet_structure::pallet::Event<T>
   **/
  PalletStructureEvent: {
    _enum: {
      Executed: 'Result<Null, SpRuntimeDispatchError>'
    }
  },
  /**
   * Lookup120: pallet_app_promotion::pallet::Event<T>
   **/
  PalletAppPromotionEvent: {
    _enum: {
      StakingRecalculation: '(AccountId32,u128,u128)',
      Stake: '(AccountId32,u128)',
      Unstake: '(AccountId32,u128)',
      SetAdmin: 'AccountId32'
    }
  },
  /**
   * Lookup121: pallet_foreign_assets::module::Event<T>
   **/
  PalletForeignAssetsModuleEvent: {
    _enum: {
      ForeignAssetRegistered: {
        assetId: 'u32',
        assetAddress: 'StagingXcmV3MultiLocation',
        metadata: 'PalletForeignAssetsModuleAssetMetadata',
      },
      ForeignAssetUpdated: {
        assetId: 'u32',
        assetAddress: 'StagingXcmV3MultiLocation',
        metadata: 'PalletForeignAssetsModuleAssetMetadata',
      },
      AssetRegistered: {
        assetId: 'PalletForeignAssetsAssetId',
        metadata: 'PalletForeignAssetsModuleAssetMetadata',
      },
      AssetUpdated: {
        assetId: 'PalletForeignAssetsAssetId',
        metadata: 'PalletForeignAssetsModuleAssetMetadata'
      }
    }
  },
  /**
   * Lookup122: pallet_foreign_assets::module::AssetMetadata<Balance>
   **/
  PalletForeignAssetsModuleAssetMetadata: {
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    minimalBalance: 'u128'
  },
  /**
   * Lookup125: pallet_evm::pallet::Event<T>
   **/
  PalletEvmEvent: {
    _enum: {
      Log: {
        log: 'EthereumLog',
      },
      Created: {
        address: 'H160',
      },
      CreatedFailed: {
        address: 'H160',
      },
      Executed: {
        address: 'H160',
      },
      ExecutedFailed: {
        address: 'H160'
      }
    }
  },
  /**
   * Lookup126: ethereum::log::Log
   **/
  EthereumLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes'
  },
  /**
   * Lookup128: pallet_ethereum::pallet::Event
   **/
  PalletEthereumEvent: {
    _enum: {
      Executed: {
        from: 'H160',
        to: 'H160',
        transactionHash: 'H256',
        exitReason: 'EvmCoreErrorExitReason',
        extraData: 'Bytes'
      }
    }
  },
  /**
   * Lookup129: evm_core::error::ExitReason
   **/
  EvmCoreErrorExitReason: {
    _enum: {
      Succeed: 'EvmCoreErrorExitSucceed',
      Error: 'EvmCoreErrorExitError',
      Revert: 'EvmCoreErrorExitRevert',
      Fatal: 'EvmCoreErrorExitFatal'
    }
  },
  /**
   * Lookup130: evm_core::error::ExitSucceed
   **/
  EvmCoreErrorExitSucceed: {
    _enum: ['Stopped', 'Returned', 'Suicided']
  },
  /**
   * Lookup131: evm_core::error::ExitError
   **/
  EvmCoreErrorExitError: {
    _enum: {
      StackUnderflow: 'Null',
      StackOverflow: 'Null',
      InvalidJump: 'Null',
      InvalidRange: 'Null',
      DesignatedInvalid: 'Null',
      CallTooDeep: 'Null',
      CreateCollision: 'Null',
      CreateContractLimit: 'Null',
      OutOfOffset: 'Null',
      OutOfGas: 'Null',
      OutOfFund: 'Null',
      PCUnderflow: 'Null',
      CreateEmpty: 'Null',
      Other: 'Text',
      MaxNonce: 'Null',
      InvalidCode: 'u8'
    }
  },
  /**
   * Lookup135: evm_core::error::ExitRevert
   **/
  EvmCoreErrorExitRevert: {
    _enum: ['Reverted']
  },
  /**
   * Lookup136: evm_core::error::ExitFatal
   **/
  EvmCoreErrorExitFatal: {
    _enum: {
      NotSupported: 'Null',
      UnhandledInterrupt: 'Null',
      CallErrorAsFatal: 'EvmCoreErrorExitError',
      Other: 'Text'
    }
  },
  /**
   * Lookup137: pallet_evm_contract_helpers::pallet::Event<T>
   **/
  PalletEvmContractHelpersEvent: {
    _enum: {
      ContractSponsorSet: '(H160,AccountId32)',
      ContractSponsorshipConfirmed: '(H160,AccountId32)',
      ContractSponsorRemoved: 'H160'
    }
  },
  /**
   * Lookup138: pallet_evm_migration::pallet::Event<T>
   **/
  PalletEvmMigrationEvent: {
    _enum: ['TestEvent']
  },
  /**
   * Lookup139: pallet_maintenance::pallet::Event<T>
   **/
  PalletMaintenanceEvent: {
    _enum: ['MaintenanceEnabled', 'MaintenanceDisabled']
  },
  /**
   * Lookup140: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup141: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup144: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup145: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup149: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup150: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup151: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup153: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup154: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup155: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup156: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup161: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup162: pallet_state_trie_migration::pallet::MigrationTask<T>
   **/
  PalletStateTrieMigrationMigrationTask: {
    _alias: {
      size_: 'size'
    },
    progressTop: 'PalletStateTrieMigrationProgress',
    progressChild: 'PalletStateTrieMigrationProgress',
    size_: 'u32',
    topItems: 'u32',
    childItems: 'u32'
  },
  /**
   * Lookup163: pallet_state_trie_migration::pallet::Progress<MaxKeyLen>
   **/
  PalletStateTrieMigrationProgress: {
    _enum: {
      ToStart: 'Null',
      LastKey: 'Bytes',
      Complete: 'Null'
    }
  },
  /**
   * Lookup166: pallet_state_trie_migration::pallet::MigrationLimits
   **/
  PalletStateTrieMigrationMigrationLimits: {
    _alias: {
      size_: 'size'
    },
    size_: 'u32',
    item: 'u32'
  },
  /**
   * Lookup167: pallet_state_trie_migration::pallet::Call<T>
   **/
  PalletStateTrieMigrationCall: {
    _enum: {
      control_auto_migration: {
        maybeConfig: 'Option<PalletStateTrieMigrationMigrationLimits>',
      },
      continue_migrate: {
        limits: 'PalletStateTrieMigrationMigrationLimits',
        realSizeUpper: 'u32',
        witnessTask: 'PalletStateTrieMigrationMigrationTask',
      },
      migrate_custom_top: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
        witnessSize: 'u32',
      },
      migrate_custom_child: {
        root: 'Bytes',
        childKeys: 'Vec<Bytes>',
        totalSize: 'u32',
      },
      set_signed_max_limits: {
        limits: 'PalletStateTrieMigrationMigrationLimits',
      },
      force_set_progress: {
        progressTop: 'PalletStateTrieMigrationProgress',
        progressChild: 'PalletStateTrieMigrationProgress'
      }
    }
  },
  /**
   * Lookup169: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentAncestor: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    paraHeadHash: 'Option<H256>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV5UpgradeGoAhead>'
  },
  /**
   * Lookup170: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
   **/
  CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
    umpMsgCount: 'u32',
    umpTotalBytes: 'u32',
    hrmpOutgoing: 'BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>'
  },
  /**
   * Lookup172: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
   **/
  CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
    msgCount: 'u32',
    totalBytes: 'u32'
  },
  /**
   * Lookup177: polkadot_primitives::v5::UpgradeGoAhead
   **/
  PolkadotPrimitivesV5UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup178: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    hrmpWatermark: 'Option<u32>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV5UpgradeGoAhead>'
  },
  /**
   * Lookup179: polkadot_primitives::v5::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV5PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup182: polkadot_primitives::v5::UpgradeRestriction
   **/
  PolkadotPrimitivesV5UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup183: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup185: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueRemainingCapacity: 'CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV5AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV5AbridgedHrmpChannel)>'
  },
  /**
   * Lookup186: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
   **/
  CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
    remainingCount: 'u32',
    remainingSize: 'u32'
  },
  /**
   * Lookup189: polkadot_primitives::v5::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV5AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup190: polkadot_primitives::v5::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV5AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesVstagingAsyncBackingParams'
  },
  /**
   * Lookup191: polkadot_primitives::vstaging::AsyncBackingParams
   **/
  PolkadotPrimitivesVstagingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup197: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup198: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
   **/
  CumulusPalletParachainSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup199: cumulus_pallet_parachain_system::pallet::Call<T>
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPrimitivesParachainInherentParachainInherentData',
      },
      sudo_send_upward_message: {
        message: 'Bytes',
      },
      authorize_upgrade: {
        codeHash: 'H256',
        checkVersion: 'bool',
      },
      enact_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup200: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV5PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
   * Lookup202: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup205: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup208: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup209: parachain_info::pallet::Call<T>
   **/
  ParachainInfoCall: 'Null',
  /**
   * Lookup211: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup212: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup217: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup218: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup221: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;16]',
    amount: 'u128'
  },
  /**
   * Lookup225: unique_runtime::RuntimeHoldReason
   **/
  UniqueRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      CollatorSelection: 'PalletCollatorSelectionHoldReason'
    }
  },
  /**
   * Lookup226: pallet_collator_selection::pallet::HoldReason
   **/
  PalletCollatorSelectionHoldReason: {
    _enum: ['LicenseBond']
  },
  /**
   * Lookup229: pallet_balances::types::IdAmount<Id, Balance>
   **/
  PalletBalancesIdAmount: {
    id: '[u8;16]',
    amount: 'u128'
  },
  /**
   * Lookup231: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance_deprecated: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        oldReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup235: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes']
  },
  /**
   * Lookup236: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup238: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup239: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup242: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup244: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup245: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup246: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup248: orml_vesting::module::Call<T>
   **/
  OrmlVestingModuleCall: {
    _enum: {
      claim: 'Null',
      vested_transfer: {
        dest: 'MultiAddress',
        schedule: 'OrmlVestingVestingSchedule',
      },
      update_vesting_schedules: {
        who: 'MultiAddress',
        vestingSchedules: 'Vec<OrmlVestingVestingSchedule>',
      },
      claim_for: {
        dest: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup250: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'PalletForeignAssetsAssetId',
        amount: 'u128',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multiasset: {
        asset: 'StagingXcmVersionedMultiAsset',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'PalletForeignAssetsAssetId',
        amount: 'u128',
        fee: 'u128',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'StagingXcmVersionedMultiAsset',
        fee: 'StagingXcmVersionedMultiAsset',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(PalletForeignAssetsAssetId,u128)>',
        feeItem: 'u32',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multiassets: {
        assets: 'StagingXcmVersionedMultiAssets',
        feeItem: 'u32',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit'
      }
    }
  },
  /**
   * Lookup251: staging_xcm::VersionedMultiAsset
   **/
  StagingXcmVersionedMultiAsset: {
    _enum: {
      __Unused0: 'Null',
      V2: 'StagingXcmV2MultiAsset',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiAsset'
    }
  },
  /**
   * Lookup254: orml_tokens::module::Call<T>
   **/
  OrmlTokensModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'PalletForeignAssetsAssetId',
        amount: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        currencyId: 'PalletForeignAssetsAssetId',
        keepAlive: 'bool',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        currencyId: 'PalletForeignAssetsAssetId',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        currencyId: 'PalletForeignAssetsAssetId',
        amount: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        currencyId: 'PalletForeignAssetsAssetId',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup255: cumulus_pallet_xcmp_queue::pallet::Call<T>
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'SpWeightsWeightV2Weight',
      },
      suspend_xcm_execution: 'Null',
      resume_xcm_execution: 'Null',
      update_suspend_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_drop_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_resume_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_threshold_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight',
      },
      update_weight_restrict_decay: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight',
      },
      update_xcmp_max_individual_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup256: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'StagingXcmVersionedMultiLocation',
        message: 'StagingXcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'StagingXcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'StagingXcmV3MultiLocation',
        version: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'StagingXcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'StagingXcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'StagingXcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'StagingXcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool'
      }
    }
  },
  /**
   * Lookup257: staging_xcm::VersionedXcm<RuntimeCall>
   **/
  StagingXcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'StagingXcmV2Xcm',
      V3: 'StagingXcmV3Xcm'
    }
  },
  /**
   * Lookup258: staging_xcm::v2::Xcm<RuntimeCall>
   **/
  StagingXcmV2Xcm: 'Vec<StagingXcmV2Instruction>',
  /**
   * Lookup260: staging_xcm::v2::Instruction<RuntimeCall>
   **/
  StagingXcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV2MultiassetMultiAssets',
      ReserveAssetDeposited: 'StagingXcmV2MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'StagingXcmV2MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssets',
        beneficiary: 'StagingXcmV2MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssets',
        dest: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      Transact: {
        originType: 'StagingXcmV2OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'StagingXcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'StagingXcmV2MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'StagingXcmV2MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'StagingXcmV2MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV2MultiassetMultiAssetFilter',
        receive: 'StagingXcmV2MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        dest: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'StagingXcmV2MultiLocation',
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'StagingXcmV2MultiAsset',
        weightLimit: 'StagingXcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV2Xcm',
      SetAppendix: 'StagingXcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssets',
        ticket: 'StagingXcmV2MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup261: staging_xcm::v2::Response
   **/
  StagingXcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV2MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,StagingXcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup264: staging_xcm::v2::traits::Error
   **/
  StagingXcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup265: staging_xcm::v2::multiasset::MultiAssetFilter
   **/
  StagingXcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV2MultiassetMultiAssets',
      Wild: 'StagingXcmV2MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup266: staging_xcm::v2::multiasset::WildMultiAsset
   **/
  StagingXcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV2MultiassetAssetId',
        fun: 'StagingXcmV2MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup267: staging_xcm::v2::multiasset::WildFungibility
   **/
  StagingXcmV2MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup268: staging_xcm::v2::WeightLimit
   **/
  StagingXcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup277: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup278: cumulus_pallet_dmp_queue::pallet::Call<T>
   **/
  CumulusPalletDmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup279: pallet_inflation::pallet::Call<T>
   **/
  PalletInflationCall: {
    _enum: {
      start_inflation: {
        inflationStartRelayBlock: 'u32'
      }
    }
  },
  /**
   * Lookup280: pallet_unique::pallet::Call<T>
   **/
  PalletUniqueCall: {
    _enum: {
      create_collection: {
        collectionName: 'Vec<u16>',
        collectionDescription: 'Vec<u16>',
        tokenPrefix: 'Bytes',
        mode: 'UpDataStructsCollectionMode',
      },
      create_collection_ex: {
        data: 'UpDataStructsCreateCollectionData',
      },
      destroy_collection: {
        collectionId: 'u32',
      },
      add_to_allow_list: {
        collectionId: 'u32',
        address: 'PalletEvmAccountBasicCrossAccountIdRepr',
      },
      remove_from_allow_list: {
        collectionId: 'u32',
        address: 'PalletEvmAccountBasicCrossAccountIdRepr',
      },
      change_collection_owner: {
        collectionId: 'u32',
        newOwner: 'AccountId32',
      },
      add_collection_admin: {
        collectionId: 'u32',
        newAdminId: 'PalletEvmAccountBasicCrossAccountIdRepr',
      },
      remove_collection_admin: {
        collectionId: 'u32',
        accountId: 'PalletEvmAccountBasicCrossAccountIdRepr',
      },
      set_collection_sponsor: {
        collectionId: 'u32',
        newSponsor: 'AccountId32',
      },
      confirm_sponsorship: {
        collectionId: 'u32',
      },
      remove_collection_sponsor: {
        collectionId: 'u32',
      },
      create_item: {
        collectionId: 'u32',
        owner: 'PalletEvmAccountBasicCrossAccountIdRepr',
        data: 'UpDataStructsCreateItemData',
      },
      create_multiple_items: {
        collectionId: 'u32',
        owner: 'PalletEvmAccountBasicCrossAccountIdRepr',
        itemsData: 'Vec<UpDataStructsCreateItemData>',
      },
      set_collection_properties: {
        collectionId: 'u32',
        properties: 'Vec<UpDataStructsProperty>',
      },
      delete_collection_properties: {
        collectionId: 'u32',
        propertyKeys: 'Vec<Bytes>',
      },
      set_token_properties: {
        collectionId: 'u32',
        tokenId: 'u32',
        properties: 'Vec<UpDataStructsProperty>',
      },
      delete_token_properties: {
        collectionId: 'u32',
        tokenId: 'u32',
        propertyKeys: 'Vec<Bytes>',
      },
      set_token_property_permissions: {
        collectionId: 'u32',
        propertyPermissions: 'Vec<UpDataStructsPropertyKeyPermission>',
      },
      create_multiple_items_ex: {
        collectionId: 'u32',
        data: 'UpDataStructsCreateItemExData',
      },
      set_transfers_enabled_flag: {
        collectionId: 'u32',
        value: 'bool',
      },
      burn_item: {
        collectionId: 'u32',
        itemId: 'u32',
        value: 'u128',
      },
      burn_from: {
        collectionId: 'u32',
        from: 'PalletEvmAccountBasicCrossAccountIdRepr',
        itemId: 'u32',
        value: 'u128',
      },
      transfer: {
        recipient: 'PalletEvmAccountBasicCrossAccountIdRepr',
        collectionId: 'u32',
        itemId: 'u32',
        value: 'u128',
      },
      approve: {
        spender: 'PalletEvmAccountBasicCrossAccountIdRepr',
        collectionId: 'u32',
        itemId: 'u32',
        amount: 'u128',
      },
      approve_from: {
        from: 'PalletEvmAccountBasicCrossAccountIdRepr',
        to: 'PalletEvmAccountBasicCrossAccountIdRepr',
        collectionId: 'u32',
        itemId: 'u32',
        amount: 'u128',
      },
      transfer_from: {
        from: 'PalletEvmAccountBasicCrossAccountIdRepr',
        recipient: 'PalletEvmAccountBasicCrossAccountIdRepr',
        collectionId: 'u32',
        itemId: 'u32',
        value: 'u128',
      },
      set_collection_limits: {
        collectionId: 'u32',
        newLimit: 'UpDataStructsCollectionLimits',
      },
      set_collection_permissions: {
        collectionId: 'u32',
        newPermission: 'UpDataStructsCollectionPermissions',
      },
      repartition: {
        collectionId: 'u32',
        tokenId: 'u32',
        amount: 'u128',
      },
      set_allowance_for_all: {
        collectionId: 'u32',
        operator: 'PalletEvmAccountBasicCrossAccountIdRepr',
        approve: 'bool',
      },
      force_repair_collection: {
        collectionId: 'u32',
      },
      force_repair_item: {
        collectionId: 'u32',
        itemId: 'u32'
      }
    }
  },
  /**
   * Lookup285: up_data_structs::CollectionMode
   **/
  UpDataStructsCollectionMode: {
    _enum: {
      NFT: 'Null',
      Fungible: 'u8',
      ReFungible: 'Null'
    }
  },
  /**
   * Lookup286: up_data_structs::CreateCollectionData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
   **/
  UpDataStructsCreateCollectionData: {
    mode: 'UpDataStructsCollectionMode',
    access: 'Option<UpDataStructsAccessMode>',
    name: 'Vec<u16>',
    description: 'Vec<u16>',
    tokenPrefix: 'Bytes',
    limits: 'Option<UpDataStructsCollectionLimits>',
    permissions: 'Option<UpDataStructsCollectionPermissions>',
    tokenPropertyPermissions: 'Vec<UpDataStructsPropertyKeyPermission>',
    properties: 'Vec<UpDataStructsProperty>',
    adminList: 'Vec<PalletEvmAccountBasicCrossAccountIdRepr>',
    pendingSponsor: 'Option<PalletEvmAccountBasicCrossAccountIdRepr>',
    flags: '[u8;1]'
  },
  /**
   * Lookup288: up_data_structs::AccessMode
   **/
  UpDataStructsAccessMode: {
    _enum: ['Normal', 'AllowList']
  },
  /**
   * Lookup290: up_data_structs::CollectionLimits
   **/
  UpDataStructsCollectionLimits: {
    accountTokenOwnershipLimit: 'Option<u32>',
    sponsoredDataSize: 'Option<u32>',
    sponsoredDataRateLimit: 'Option<UpDataStructsSponsoringRateLimit>',
    tokenLimit: 'Option<u32>',
    sponsorTransferTimeout: 'Option<u32>',
    sponsorApproveTimeout: 'Option<u32>',
    ownerCanTransfer: 'Option<bool>',
    ownerCanDestroy: 'Option<bool>',
    transfersEnabled: 'Option<bool>'
  },
  /**
   * Lookup292: up_data_structs::SponsoringRateLimit
   **/
  UpDataStructsSponsoringRateLimit: {
    _enum: {
      SponsoringDisabled: 'Null',
      Blocks: 'u32'
    }
  },
  /**
   * Lookup295: up_data_structs::CollectionPermissions
   **/
  UpDataStructsCollectionPermissions: {
    access: 'Option<UpDataStructsAccessMode>',
    mintMode: 'Option<bool>',
    nesting: 'Option<UpDataStructsNestingPermissions>'
  },
  /**
   * Lookup297: up_data_structs::NestingPermissions
   **/
  UpDataStructsNestingPermissions: {
    tokenOwner: 'bool',
    collectionAdmin: 'bool',
    restricted: 'Option<UpDataStructsOwnerRestrictedSet>'
  },
  /**
   * Lookup299: up_data_structs::OwnerRestrictedSet
   **/
  UpDataStructsOwnerRestrictedSet: 'BTreeSet<u32>',
  /**
   * Lookup304: up_data_structs::PropertyKeyPermission
   **/
  UpDataStructsPropertyKeyPermission: {
    key: 'Bytes',
    permission: 'UpDataStructsPropertyPermission'
  },
  /**
   * Lookup305: up_data_structs::PropertyPermission
   **/
  UpDataStructsPropertyPermission: {
    mutable: 'bool',
    collectionAdmin: 'bool',
    tokenOwner: 'bool'
  },
  /**
   * Lookup308: up_data_structs::Property
   **/
  UpDataStructsProperty: {
    key: 'Bytes',
    value: 'Bytes'
  },
  /**
   * Lookup314: up_data_structs::CreateItemData
   **/
  UpDataStructsCreateItemData: {
    _enum: {
      NFT: 'UpDataStructsCreateNftData',
      Fungible: 'UpDataStructsCreateFungibleData',
      ReFungible: 'UpDataStructsCreateReFungibleData'
    }
  },
  /**
   * Lookup315: up_data_structs::CreateNftData
   **/
  UpDataStructsCreateNftData: {
    properties: 'Vec<UpDataStructsProperty>'
  },
  /**
   * Lookup316: up_data_structs::CreateFungibleData
   **/
  UpDataStructsCreateFungibleData: {
    value: 'u128'
  },
  /**
   * Lookup317: up_data_structs::CreateReFungibleData
   **/
  UpDataStructsCreateReFungibleData: {
    pieces: 'u128',
    properties: 'Vec<UpDataStructsProperty>'
  },
  /**
   * Lookup320: up_data_structs::CreateItemExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
   **/
  UpDataStructsCreateItemExData: {
    _enum: {
      NFT: 'Vec<UpDataStructsCreateNftExData>',
      Fungible: 'BTreeMap<PalletEvmAccountBasicCrossAccountIdRepr, u128>',
      RefungibleMultipleItems: 'Vec<UpDataStructsCreateRefungibleExSingleOwner>',
      RefungibleMultipleOwners: 'UpDataStructsCreateRefungibleExMultipleOwners'
    }
  },
  /**
   * Lookup322: up_data_structs::CreateNftExData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
   **/
  UpDataStructsCreateNftExData: {
    properties: 'Vec<UpDataStructsProperty>',
    owner: 'PalletEvmAccountBasicCrossAccountIdRepr'
  },
  /**
   * Lookup329: up_data_structs::CreateRefungibleExSingleOwner<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
   **/
  UpDataStructsCreateRefungibleExSingleOwner: {
    user: 'PalletEvmAccountBasicCrossAccountIdRepr',
    pieces: 'u128',
    properties: 'Vec<UpDataStructsProperty>'
  },
  /**
   * Lookup331: up_data_structs::CreateRefungibleExMultipleOwners<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
   **/
  UpDataStructsCreateRefungibleExMultipleOwners: {
    users: 'BTreeMap<PalletEvmAccountBasicCrossAccountIdRepr, u128>',
    properties: 'Vec<UpDataStructsProperty>'
  },
  /**
   * Lookup332: pallet_configuration::pallet::Call<T>
   **/
  PalletConfigurationCall: {
    _enum: {
      set_weight_to_fee_coefficient_override: {
        coeff: 'Option<u64>',
      },
      set_min_gas_price_override: {
        coeff: 'Option<u64>',
      },
      __Unused2: 'Null',
      set_app_promotion_configuration_override: {
        configuration: 'PalletConfigurationAppPromotionConfiguration',
      },
      set_collator_selection_desired_collators: {
        max: 'Option<u32>',
      },
      set_collator_selection_license_bond: {
        amount: 'Option<u128>',
      },
      set_collator_selection_kick_threshold: {
        threshold: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup334: pallet_configuration::AppPromotionConfiguration<BlockNumber>
   **/
  PalletConfigurationAppPromotionConfiguration: {
    recalculationInterval: 'Option<u32>',
    pendingInterval: 'Option<u32>',
    intervalIncome: 'Option<Perbill>',
    maxStakersPerCalculation: 'Option<u8>'
  },
  /**
   * Lookup338: pallet_structure::pallet::Call<T>
   **/
  PalletStructureCall: 'Null',
  /**
   * Lookup339: pallet_app_promotion::pallet::Call<T>
   **/
  PalletAppPromotionCall: {
    _enum: {
      set_admin_address: {
        admin: 'PalletEvmAccountBasicCrossAccountIdRepr',
      },
      stake: {
        amount: 'u128',
      },
      unstake_all: 'Null',
      sponsor_collection: {
        collectionId: 'u32',
      },
      stop_sponsoring_collection: {
        collectionId: 'u32',
      },
      sponsor_contract: {
        contractId: 'H160',
      },
      stop_sponsoring_contract: {
        contractId: 'H160',
      },
      payout_stakers: {
        stakersNumber: 'Option<u8>',
      },
      unstake_partial: {
        amount: 'u128',
      },
      force_unstake: {
        pendingBlocks: 'Vec<u32>'
      }
    }
  },
  /**
   * Lookup340: pallet_foreign_assets::module::Call<T>
   **/
  PalletForeignAssetsModuleCall: {
    _enum: {
      register_foreign_asset: {
        owner: 'AccountId32',
        location: 'StagingXcmVersionedMultiLocation',
        metadata: 'PalletForeignAssetsModuleAssetMetadata',
      },
      update_foreign_asset: {
        foreignAssetId: 'u32',
        location: 'StagingXcmVersionedMultiLocation',
        metadata: 'PalletForeignAssetsModuleAssetMetadata'
      }
    }
  },
  /**
   * Lookup341: pallet_evm::pallet::Call<T>
   **/
  PalletEvmCall: {
    _enum: {
      withdraw: {
        address: 'H160',
        value: 'u128',
      },
      call: {
        source: 'H160',
        target: 'H160',
        input: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create: {
        source: 'H160',
        init: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create2: {
        source: 'H160',
        init: 'Bytes',
        salt: 'H256',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>'
      }
    }
  },
  /**
   * Lookup347: pallet_ethereum::pallet::Call<T>
   **/
  PalletEthereumCall: {
    _enum: {
      transact: {
        transaction: 'EthereumTransactionTransactionV2'
      }
    }
  },
  /**
   * Lookup348: ethereum::transaction::TransactionV2
   **/
  EthereumTransactionTransactionV2: {
    _enum: {
      Legacy: 'EthereumTransactionLegacyTransaction',
      EIP2930: 'EthereumTransactionEip2930Transaction',
      EIP1559: 'EthereumTransactionEip1559Transaction'
    }
  },
  /**
   * Lookup349: ethereum::transaction::LegacyTransaction
   **/
  EthereumTransactionLegacyTransaction: {
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    signature: 'EthereumTransactionTransactionSignature'
  },
  /**
   * Lookup350: ethereum::transaction::TransactionAction
   **/
  EthereumTransactionTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  /**
   * Lookup351: ethereum::transaction::TransactionSignature
   **/
  EthereumTransactionTransactionSignature: {
    v: 'u64',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup353: ethereum::transaction::EIP2930Transaction
   **/
  EthereumTransactionEip2930Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup355: ethereum::transaction::AccessListItem
   **/
  EthereumTransactionAccessListItem: {
    address: 'H160',
    storageKeys: 'Vec<H256>'
  },
  /**
   * Lookup356: ethereum::transaction::EIP1559Transaction
   **/
  EthereumTransactionEip1559Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    maxPriorityFeePerGas: 'U256',
    maxFeePerGas: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup357: pallet_evm_contract_helpers::pallet::Call<T>
   **/
  PalletEvmContractHelpersCall: {
    _enum: {
      migrate_from_self_sponsoring: {
        addresses: 'Vec<H160>'
      }
    }
  },
  /**
   * Lookup359: pallet_evm_migration::pallet::Call<T>
   **/
  PalletEvmMigrationCall: {
    _enum: {
      begin: {
        address: 'H160',
      },
      set_data: {
        address: 'H160',
        data: 'Vec<(H256,H256)>',
      },
      finish: {
        address: 'H160',
        code: 'Bytes',
      },
      insert_eth_logs: {
        logs: 'Vec<EthereumLog>',
      },
      insert_events: {
        events: 'Vec<Bytes>',
      },
      remove_rmrk_data: 'Null'
    }
  },
  /**
   * Lookup363: pallet_maintenance::pallet::Call<T>
   **/
  PalletMaintenanceCall: {
    _enum: ['enable', 'disable']
  },
  /**
   * Lookup364: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'UniqueRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup366: unique_runtime::OriginCaller
   **/
  UniqueRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Void: 'SpCoreVoid',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      PolkadotXcm: 'PalletXcmOrigin',
      CumulusXcm: 'CumulusPalletXcmOrigin',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      __Unused99: 'Null',
      __Unused100: 'Null',
      Ethereum: 'PalletEthereumRawOrigin'
    }
  },
  /**
   * Lookup367: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup368: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'StagingXcmV3MultiLocation',
      Response: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup369: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup370: pallet_ethereum::RawOrigin
   **/
  PalletEthereumRawOrigin: {
    _enum: {
      EthereumTransaction: 'H160'
    }
  },
  /**
   * Lookup371: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup372: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup374: orml_vesting::module::Error<T>
   **/
  OrmlVestingModuleError: {
    _enum: ['ZeroVestingPeriod', 'ZeroVestingPeriodCount', 'InsufficientBalanceToLock', 'TooManyVestingSchedules', 'AmountLow', 'MaxVestingSchedulesExceeded']
  },
  /**
   * Lookup375: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
  },
  /**
   * Lookup378: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup380: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup382: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup384: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup386: cumulus_pallet_xcmp_queue::InboundChannelDetails
   **/
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: 'u32',
    state: 'CumulusPalletXcmpQueueInboundState',
    messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat)>'
  },
  /**
   * Lookup387: cumulus_pallet_xcmp_queue::InboundState
   **/
  CumulusPalletXcmpQueueInboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup390: polkadot_parachain_primitives::primitives::XcmpMessageFormat
   **/
  PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  /**
   * Lookup393: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup394: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup396: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32',
    thresholdWeight: 'SpWeightsWeightV2Weight',
    weightRestrictDecay: 'SpWeightsWeightV2Weight',
    xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup398: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
  },
  /**
   * Lookup399: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'StagingXcmVersionedMultiLocation',
        maybeMatchQuerier: 'Option<StagingXcmVersionedMultiLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'StagingXcmVersionedMultiLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'StagingXcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup403: staging_xcm::VersionedResponse
   **/
  StagingXcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'StagingXcmV2Response',
      V3: 'StagingXcmV3Response'
    }
  },
  /**
   * Lookup409: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup412: staging_xcm::VersionedAssetId
   **/
  StagingXcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiassetAssetId'
    }
  },
  /**
   * Lookup413: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'StagingXcmVersionedMultiLocation',
    locker: 'StagingXcmVersionedMultiLocation',
    consumers: 'Vec<(Null,u128)>'
  },
  /**
   * Lookup420: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
  },
  /**
   * Lookup421: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup422: cumulus_pallet_dmp_queue::ConfigData
   **/
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup423: cumulus_pallet_dmp_queue::PageIndexData
   **/
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: 'u32',
    endUsed: 'u32',
    overweightCount: 'u64'
  },
  /**
   * Lookup426: cumulus_pallet_dmp_queue::pallet::Error<T>
   **/
  CumulusPalletDmpQueueError: {
    _enum: ['Unknown', 'OverLimit']
  },
  /**
   * Lookup430: pallet_unique::pallet::Error<T>
   **/
  PalletUniqueError: {
    _enum: ['CollectionDecimalPointLimitExceeded', 'EmptyArgument', 'RepartitionCalledOnNonRefungibleCollection']
  },
  /**
   * Lookup431: pallet_configuration::pallet::Error<T>
   **/
  PalletConfigurationError: {
    _enum: ['InconsistentConfiguration']
  },
  /**
   * Lookup432: up_data_structs::Collection<sp_core::crypto::AccountId32>
   **/
  UpDataStructsCollection: {
    owner: 'AccountId32',
    mode: 'UpDataStructsCollectionMode',
    name: 'Vec<u16>',
    description: 'Vec<u16>',
    tokenPrefix: 'Bytes',
    sponsorship: 'UpDataStructsSponsorshipStateAccountId32',
    limits: 'UpDataStructsCollectionLimits',
    permissions: 'UpDataStructsCollectionPermissions',
    flags: '[u8;1]'
  },
  /**
   * Lookup433: up_data_structs::SponsorshipState<sp_core::crypto::AccountId32>
   **/
  UpDataStructsSponsorshipStateAccountId32: {
    _enum: {
      Disabled: 'Null',
      Unconfirmed: 'AccountId32',
      Confirmed: 'AccountId32'
    }
  },
  /**
   * Lookup434: up_data_structs::Properties
   **/
  UpDataStructsProperties: {
    map: 'UpDataStructsPropertiesMapBoundedVec',
    consumedSpace: 'u32',
    reserved: 'u32'
  },
  /**
   * Lookup435: up_data_structs::PropertiesMap<bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  UpDataStructsPropertiesMapBoundedVec: 'BTreeMap<Bytes, Bytes>',
  /**
   * Lookup440: up_data_structs::PropertiesMap<up_data_structs::PropertyPermission>
   **/
  UpDataStructsPropertiesMapPropertyPermission: 'BTreeMap<Bytes, UpDataStructsPropertyPermission>',
  /**
   * Lookup447: up_data_structs::CollectionStats
   **/
  UpDataStructsCollectionStats: {
    created: 'u32',
    destroyed: 'u32',
    alive: 'u32'
  },
  /**
   * Lookup448: up_data_structs::TokenChild
   **/
  UpDataStructsTokenChild: {
    token: 'u32',
    collection: 'u32'
  },
  /**
   * Lookup449: PhantomType::up_data_structs<T>
   **/
  PhantomTypeUpDataStructs: '[(UpDataStructsTokenData,UpDataStructsRpcCollection,UpPovEstimateRpcPovInfo);0]',
  /**
   * Lookup451: up_data_structs::TokenData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
   **/
  UpDataStructsTokenData: {
    properties: 'Vec<UpDataStructsProperty>',
    owner: 'Option<PalletEvmAccountBasicCrossAccountIdRepr>',
    pieces: 'u128'
  },
  /**
   * Lookup452: up_data_structs::RpcCollection<sp_core::crypto::AccountId32>
   **/
  UpDataStructsRpcCollection: {
    owner: 'AccountId32',
    mode: 'UpDataStructsCollectionMode',
    name: 'Vec<u16>',
    description: 'Vec<u16>',
    tokenPrefix: 'Bytes',
    sponsorship: 'UpDataStructsSponsorshipStateAccountId32',
    limits: 'UpDataStructsCollectionLimits',
    permissions: 'UpDataStructsCollectionPermissions',
    tokenPropertyPermissions: 'Vec<UpDataStructsPropertyKeyPermission>',
    properties: 'Vec<UpDataStructsProperty>',
    readOnly: 'bool',
    flags: 'UpDataStructsRpcCollectionFlags'
  },
  /**
   * Lookup453: up_data_structs::RpcCollectionFlags
   **/
  UpDataStructsRpcCollectionFlags: {
    foreign: 'bool',
    erc721metadata: 'bool'
  },
  /**
   * Lookup454: up_pov_estimate_rpc::PovInfo
   **/
  UpPovEstimateRpcPovInfo: {
    proofSize: 'u64',
    compactProofSize: 'u64',
    compressedProofSize: 'u64',
    results: 'Vec<Result<Result<Null, SpRuntimeDispatchError>, SpRuntimeTransactionValidityTransactionValidityError>>',
    keyValues: 'Vec<UpPovEstimateRpcTrieKeyValue>'
  },
  /**
   * Lookup457: sp_runtime::transaction_validity::TransactionValidityError
   **/
  SpRuntimeTransactionValidityTransactionValidityError: {
    _enum: {
      Invalid: 'SpRuntimeTransactionValidityInvalidTransaction',
      Unknown: 'SpRuntimeTransactionValidityUnknownTransaction'
    }
  },
  /**
   * Lookup458: sp_runtime::transaction_validity::InvalidTransaction
   **/
  SpRuntimeTransactionValidityInvalidTransaction: {
    _enum: {
      Call: 'Null',
      Payment: 'Null',
      Future: 'Null',
      Stale: 'Null',
      BadProof: 'Null',
      AncientBirthBlock: 'Null',
      ExhaustsResources: 'Null',
      Custom: 'u8',
      BadMandatory: 'Null',
      MandatoryValidation: 'Null',
      BadSigner: 'Null'
    }
  },
  /**
   * Lookup459: sp_runtime::transaction_validity::UnknownTransaction
   **/
  SpRuntimeTransactionValidityUnknownTransaction: {
    _enum: {
      CannotLookup: 'Null',
      NoUnsignedValidator: 'Null',
      Custom: 'u8'
    }
  },
  /**
   * Lookup461: up_pov_estimate_rpc::TrieKeyValue
   **/
  UpPovEstimateRpcTrieKeyValue: {
    key: 'Bytes',
    value: 'Bytes'
  },
  /**
   * Lookup463: pallet_common::pallet::Error<T>
   **/
  PalletCommonError: {
    _enum: ['CollectionNotFound', 'MustBeTokenOwner', 'NoPermission', 'CantDestroyNotEmptyCollection', 'PublicMintingNotAllowed', 'AddressNotInAllowlist', 'CollectionNameLimitExceeded', 'CollectionDescriptionLimitExceeded', 'CollectionTokenPrefixLimitExceeded', 'TotalCollectionsLimitExceeded', 'CollectionAdminCountExceeded', 'CollectionLimitBoundsExceeded', 'OwnerPermissionsCantBeReverted', 'TransferNotAllowed', 'AccountTokenLimitExceeded', 'CollectionTokenLimitExceeded', 'MetadataFlagFrozen', 'TokenNotFound', 'TokenValueTooLow', 'ApprovedValueTooLow', 'CantApproveMoreThanOwned', 'AddressIsNotEthMirror', 'AddressIsZero', 'UnsupportedOperation', 'NotSufficientFounds', 'UserIsNotAllowedToNest', 'SourceCollectionIsNotAllowedToNest', 'CollectionFieldSizeExceeded', 'NoSpaceForProperty', 'PropertyLimitReached', 'PropertyKeyIsTooLong', 'InvalidCharacterInPropertyKey', 'EmptyPropertyKey', 'CollectionIsExternal', 'CollectionIsInternal', 'ConfirmSponsorshipFail', 'UserIsNotCollectionAdmin']
  },
  /**
   * Lookup465: pallet_fungible::pallet::Error<T>
   **/
  PalletFungibleError: {
    _enum: ['NotFungibleDataUsedToMintFungibleCollectionToken', 'FungibleItemsHaveNoId', 'FungibleItemsDontHaveData', 'FungibleDisallowsNesting', 'SettingPropertiesNotAllowed', 'SettingAllowanceForAllNotAllowed', 'FungibleTokensAreAlwaysValid']
  },
  /**
   * Lookup470: pallet_refungible::pallet::Error<T>
   **/
  PalletRefungibleError: {
    _enum: ['NotRefungibleDataUsedToMintFungibleCollectionToken', 'WrongRefungiblePieces', 'RepartitionWhileNotOwningAllPieces', 'RefungibleDisallowsNesting', 'SettingPropertiesNotAllowed']
  },
  /**
   * Lookup471: pallet_nonfungible::ItemData<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
   **/
  PalletNonfungibleItemData: {
    owner: 'PalletEvmAccountBasicCrossAccountIdRepr'
  },
  /**
   * Lookup473: up_data_structs::PropertyScope
   **/
  UpDataStructsPropertyScope: {
    _enum: ['None', 'Rmrk']
  },
  /**
   * Lookup476: pallet_nonfungible::pallet::Error<T>
   **/
  PalletNonfungibleError: {
    _enum: ['NotNonfungibleDataUsedToMintFungibleCollectionToken', 'NonfungibleItemsHaveNoAmount', 'CantBurnNftWithChildren']
  },
  /**
   * Lookup477: pallet_structure::pallet::Error<T>
   **/
  PalletStructureError: {
    _enum: ['OuroborosDetected', 'DepthLimit', 'BreadthLimit', 'TokenNotFound', 'CantNestTokenUnderCollection']
  },
  /**
   * Lookup483: pallet_app_promotion::pallet::Error<T>
   **/
  PalletAppPromotionError: {
    _enum: ['AdminNotSet', 'NoPermission', 'NotSufficientFunds', 'PendingForBlockOverflow', 'SponsorNotSet', 'InsufficientStakedBalance', 'InconsistencyState']
  },
  /**
   * Lookup484: pallet_foreign_assets::module::Error<T>
   **/
  PalletForeignAssetsModuleError: {
    _enum: ['BadLocation', 'MultiLocationExisted', 'AssetIdNotExists', 'AssetIdExisted']
  },
  /**
   * Lookup485: pallet_evm::CodeMetadata
   **/
  PalletEvmCodeMetadata: {
    _alias: {
      size_: 'size',
      hash_: 'hash'
    },
    size_: 'u64',
    hash_: 'H256'
  },
  /**
   * Lookup487: pallet_evm::pallet::Error<T>
   **/
  PalletEvmError: {
    _enum: ['BalanceLow', 'FeeOverflow', 'PaymentOverflow', 'WithdrawFailed', 'GasPriceTooLow', 'InvalidNonce', 'GasLimitTooLow', 'GasLimitTooHigh', 'Undefined', 'Reentrancy', 'TransactionMustComeFromEOA']
  },
  /**
   * Lookup490: fp_rpc::TransactionStatus
   **/
  FpRpcTransactionStatus: {
    transactionHash: 'H256',
    transactionIndex: 'u32',
    from: 'H160',
    to: 'Option<H160>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthereumLog>',
    logsBloom: 'EthbloomBloom'
  },
  /**
   * Lookup492: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup494: ethereum::receipt::ReceiptV3
   **/
  EthereumReceiptReceiptV3: {
    _enum: {
      Legacy: 'EthereumReceiptEip658ReceiptData',
      EIP2930: 'EthereumReceiptEip658ReceiptData',
      EIP1559: 'EthereumReceiptEip658ReceiptData'
    }
  },
  /**
   * Lookup495: ethereum::receipt::EIP658ReceiptData
   **/
  EthereumReceiptEip658ReceiptData: {
    statusCode: 'u8',
    usedGas: 'U256',
    logsBloom: 'EthbloomBloom',
    logs: 'Vec<EthereumLog>'
  },
  /**
   * Lookup496: ethereum::block::Block<ethereum::transaction::TransactionV2>
   **/
  EthereumBlock: {
    header: 'EthereumHeader',
    transactions: 'Vec<EthereumTransactionTransactionV2>',
    ommers: 'Vec<EthereumHeader>'
  },
  /**
   * Lookup497: ethereum::header::Header
   **/
  EthereumHeader: {
    parentHash: 'H256',
    ommersHash: 'H256',
    beneficiary: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    logsBloom: 'EthbloomBloom',
    difficulty: 'U256',
    number: 'U256',
    gasLimit: 'U256',
    gasUsed: 'U256',
    timestamp: 'u64',
    extraData: 'Bytes',
    mixHash: 'H256',
    nonce: 'EthereumTypesHashH64'
  },
  /**
   * Lookup498: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup503: pallet_ethereum::pallet::Error<T>
   **/
  PalletEthereumError: {
    _enum: ['InvalidSignature', 'PreLogExists']
  },
  /**
   * Lookup504: pallet_evm_coder_substrate::pallet::Error<T>
   **/
  PalletEvmCoderSubstrateError: {
    _enum: ['OutOfGas', 'OutOfFund']
  },
  /**
   * Lookup505: up_data_structs::SponsorshipState<pallet_evm::account::BasicCrossAccountIdRepr<sp_core::crypto::AccountId32>>
   **/
  UpDataStructsSponsorshipStateBasicCrossAccountIdRepr: {
    _enum: {
      Disabled: 'Null',
      Unconfirmed: 'PalletEvmAccountBasicCrossAccountIdRepr',
      Confirmed: 'PalletEvmAccountBasicCrossAccountIdRepr'
    }
  },
  /**
   * Lookup506: pallet_evm_contract_helpers::SponsoringModeT
   **/
  PalletEvmContractHelpersSponsoringModeT: {
    _enum: ['Disabled', 'Allowlisted', 'Generous']
  },
  /**
   * Lookup512: pallet_evm_contract_helpers::pallet::Error<T>
   **/
  PalletEvmContractHelpersError: {
    _enum: ['NoPermission', 'NoPendingSponsor', 'TooManyMethodsHaveSponsoredLimit']
  },
  /**
   * Lookup513: pallet_evm_migration::pallet::Error<T>
   **/
  PalletEvmMigrationError: {
    _enum: ['AccountNotEmpty', 'AccountIsNotMigrating', 'BadEvent']
  },
  /**
   * Lookup514: pallet_maintenance::pallet::Error<T>
   **/
  PalletMaintenanceError: 'Null',
  /**
   * Lookup515: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup517: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup518: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup520: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup521: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup524: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup525: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup526: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup529: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup530: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup531: unique_runtime::runtime_common::maintenance::CheckMaintenance
   **/
  UniqueRuntimeRuntimeCommonMaintenanceCheckMaintenance: 'Null',
  /**
   * Lookup532: unique_runtime::runtime_common::identity::DisableIdentityCalls
   **/
  UniqueRuntimeRuntimeCommonIdentityDisableIdentityCalls: 'Null',
  /**
   * Lookup533: pallet_template_transaction_payment::ChargeTransactionPayment<unique_runtime::Runtime>
   **/
  PalletTemplateTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup534: unique_runtime::Runtime
   **/
  UniqueRuntimeRuntime: 'Null',
  /**
   * Lookup535: pallet_ethereum::FakeTransactionFinalizer<unique_runtime::Runtime>
   **/
  PalletEthereumFakeTransactionFinalizer: 'Null'
};
