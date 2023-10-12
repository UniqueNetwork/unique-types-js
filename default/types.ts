//@ts-nocheck
// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256, MultiAddress, Perbill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

/** @name CumulusPalletDmpQueueCall */
export interface CumulusPalletDmpQueueCall extends Enum {
  readonly isServiceOverweight: boolean;
  readonly asServiceOverweight: {
    readonly index: u64;
    readonly weightLimit: SpWeightsWeightV2Weight;
  } & Struct;
  readonly type: 'ServiceOverweight';
}

/** @name CumulusPalletDmpQueueConfigData */
export interface CumulusPalletDmpQueueConfigData extends Struct {
  readonly maxIndividual: SpWeightsWeightV2Weight;
}

/** @name CumulusPalletDmpQueueError */
export interface CumulusPalletDmpQueueError extends Enum {
  readonly isUnknown: boolean;
  readonly isOverLimit: boolean;
  readonly type: 'Unknown' | 'OverLimit';
}

/** @name CumulusPalletDmpQueueEvent */
export interface CumulusPalletDmpQueueEvent extends Enum {
  readonly isInvalidFormat: boolean;
  readonly asInvalidFormat: {
    readonly messageHash: U8aFixed;
  } & Struct;
  readonly isUnsupportedVersion: boolean;
  readonly asUnsupportedVersion: {
    readonly messageHash: U8aFixed;
  } & Struct;
  readonly isExecutedDownward: boolean;
  readonly asExecutedDownward: {
    readonly messageHash: U8aFixed;
    readonly messageId: U8aFixed;
    readonly outcome: StagingXcmV3TraitsOutcome;
  } & Struct;
  readonly isWeightExhausted: boolean;
  readonly asWeightExhausted: {
    readonly messageHash: U8aFixed;
    readonly messageId: U8aFixed;
    readonly remainingWeight: SpWeightsWeightV2Weight;
    readonly requiredWeight: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isOverweightEnqueued: boolean;
  readonly asOverweightEnqueued: {
    readonly messageHash: U8aFixed;
    readonly messageId: U8aFixed;
    readonly overweightIndex: u64;
    readonly requiredWeight: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isOverweightServiced: boolean;
  readonly asOverweightServiced: {
    readonly overweightIndex: u64;
    readonly weightUsed: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isMaxMessagesExhausted: boolean;
  readonly asMaxMessagesExhausted: {
    readonly messageHash: U8aFixed;
  } & Struct;
  readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
}

/** @name CumulusPalletDmpQueuePageIndexData */
export interface CumulusPalletDmpQueuePageIndexData extends Struct {
  readonly beginUsed: u32;
  readonly endUsed: u32;
  readonly overweightCount: u64;
}

/** @name CumulusPalletParachainSystemCall */
export interface CumulusPalletParachainSystemCall extends Enum {
  readonly isSetValidationData: boolean;
  readonly asSetValidationData: {
    readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
  } & Struct;
  readonly isSudoSendUpwardMessage: boolean;
  readonly asSudoSendUpwardMessage: {
    readonly message: Bytes;
  } & Struct;
  readonly isAuthorizeUpgrade: boolean;
  readonly asAuthorizeUpgrade: {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  } & Struct;
  readonly isEnactAuthorizedUpgrade: boolean;
  readonly asEnactAuthorizedUpgrade: {
    readonly code: Bytes;
  } & Struct;
  readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
}

/** @name CumulusPalletParachainSystemCodeUpgradeAuthorization */
export interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
  readonly codeHash: H256;
  readonly checkVersion: bool;
}

/** @name CumulusPalletParachainSystemError */
export interface CumulusPalletParachainSystemError extends Enum {
  readonly isOverlappingUpgrades: boolean;
  readonly isProhibitedByPolkadot: boolean;
  readonly isTooBig: boolean;
  readonly isValidationDataNotAvailable: boolean;
  readonly isHostConfigurationNotAvailable: boolean;
  readonly isNotScheduled: boolean;
  readonly isNothingAuthorized: boolean;
  readonly isUnauthorized: boolean;
  readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
}

/** @name CumulusPalletParachainSystemEvent */
export interface CumulusPalletParachainSystemEvent extends Enum {
  readonly isValidationFunctionStored: boolean;
  readonly isValidationFunctionApplied: boolean;
  readonly asValidationFunctionApplied: {
    readonly relayChainBlockNum: u32;
  } & Struct;
  readonly isValidationFunctionDiscarded: boolean;
  readonly isUpgradeAuthorized: boolean;
  readonly asUpgradeAuthorized: {
    readonly codeHash: H256;
  } & Struct;
  readonly isDownwardMessagesReceived: boolean;
  readonly asDownwardMessagesReceived: {
    readonly count: u32;
  } & Struct;
  readonly isDownwardMessagesProcessed: boolean;
  readonly asDownwardMessagesProcessed: {
    readonly weightUsed: SpWeightsWeightV2Weight;
    readonly dmqHead: H256;
  } & Struct;
  readonly isUpwardMessageSent: boolean;
  readonly asUpwardMessageSent: {
    readonly messageHash: Option<U8aFixed>;
  } & Struct;
  readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
}

/** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot */
export interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
  readonly dmqMqcHead: H256;
  readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
  readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV5AbridgedHrmpChannel]>>;
  readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV5AbridgedHrmpChannel]>>;
}

/** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity */
export interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
  readonly remainingCount: u32;
  readonly remainingSize: u32;
}

/** @name CumulusPalletParachainSystemUnincludedSegmentAncestor */
export interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
  readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
  readonly paraHeadHash: Option<H256>;
  readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV5UpgradeGoAhead>;
}

/** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate */
export interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
  readonly msgCount: u32;
  readonly totalBytes: u32;
}

/** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker */
export interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
  readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
  readonly hrmpWatermark: Option<u32>;
  readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV5UpgradeGoAhead>;
}

/** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth */
export interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
  readonly umpMsgCount: u32;
  readonly umpTotalBytes: u32;
  readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
}

/** @name CumulusPalletXcmCall */
export interface CumulusPalletXcmCall extends Null {}

/** @name CumulusPalletXcmError */
export interface CumulusPalletXcmError extends Null {}

/** @name CumulusPalletXcmEvent */
export interface CumulusPalletXcmEvent extends Enum {
  readonly isInvalidFormat: boolean;
  readonly asInvalidFormat: U8aFixed;
  readonly isUnsupportedVersion: boolean;
  readonly asUnsupportedVersion: U8aFixed;
  readonly isExecutedDownward: boolean;
  readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV3TraitsOutcome]>;
  readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
}

/** @name CumulusPalletXcmOrigin */
export interface CumulusPalletXcmOrigin extends Enum {
  readonly isRelay: boolean;
  readonly isSiblingParachain: boolean;
  readonly asSiblingParachain: u32;
  readonly type: 'Relay' | 'SiblingParachain';
}

/** @name CumulusPalletXcmpQueueCall */
export interface CumulusPalletXcmpQueueCall extends Enum {
  readonly isServiceOverweight: boolean;
  readonly asServiceOverweight: {
    readonly index: u64;
    readonly weightLimit: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isSuspendXcmExecution: boolean;
  readonly isResumeXcmExecution: boolean;
  readonly isUpdateSuspendThreshold: boolean;
  readonly asUpdateSuspendThreshold: {
    readonly new_: u32;
  } & Struct;
  readonly isUpdateDropThreshold: boolean;
  readonly asUpdateDropThreshold: {
    readonly new_: u32;
  } & Struct;
  readonly isUpdateResumeThreshold: boolean;
  readonly asUpdateResumeThreshold: {
    readonly new_: u32;
  } & Struct;
  readonly isUpdateThresholdWeight: boolean;
  readonly asUpdateThresholdWeight: {
    readonly new_: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isUpdateWeightRestrictDecay: boolean;
  readonly asUpdateWeightRestrictDecay: {
    readonly new_: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isUpdateXcmpMaxIndividualWeight: boolean;
  readonly asUpdateXcmpMaxIndividualWeight: {
    readonly new_: SpWeightsWeightV2Weight;
  } & Struct;
  readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
}

/** @name CumulusPalletXcmpQueueError */
export interface CumulusPalletXcmpQueueError extends Enum {
  readonly isFailedToSend: boolean;
  readonly isBadXcmOrigin: boolean;
  readonly isBadXcm: boolean;
  readonly isBadOverweightIndex: boolean;
  readonly isWeightOverLimit: boolean;
  readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
}

/** @name CumulusPalletXcmpQueueEvent */
export interface CumulusPalletXcmpQueueEvent extends Enum {
  readonly isSuccess: boolean;
  readonly asSuccess: {
    readonly messageHash: U8aFixed;
    readonly messageId: U8aFixed;
    readonly weight: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isFail: boolean;
  readonly asFail: {
    readonly messageHash: U8aFixed;
    readonly messageId: U8aFixed;
    readonly error: StagingXcmV3TraitsError;
    readonly weight: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isBadVersion: boolean;
  readonly asBadVersion: {
    readonly messageHash: U8aFixed;
  } & Struct;
  readonly isBadFormat: boolean;
  readonly asBadFormat: {
    readonly messageHash: U8aFixed;
  } & Struct;
  readonly isXcmpMessageSent: boolean;
  readonly asXcmpMessageSent: {
    readonly messageHash: U8aFixed;
  } & Struct;
  readonly isOverweightEnqueued: boolean;
  readonly asOverweightEnqueued: {
    readonly sender: u32;
    readonly sentAt: u32;
    readonly index: u64;
    readonly required: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isOverweightServiced: boolean;
  readonly asOverweightServiced: {
    readonly index: u64;
    readonly used: SpWeightsWeightV2Weight;
  } & Struct;
  readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
}

/** @name CumulusPalletXcmpQueueInboundChannelDetails */
export interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
  readonly sender: u32;
  readonly state: CumulusPalletXcmpQueueInboundState;
  readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat]>>;
}

/** @name CumulusPalletXcmpQueueInboundState */
export interface CumulusPalletXcmpQueueInboundState extends Enum {
  readonly isOk: boolean;
  readonly isSuspended: boolean;
  readonly type: 'Ok' | 'Suspended';
}

/** @name CumulusPalletXcmpQueueOutboundChannelDetails */
export interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
  readonly recipient: u32;
  readonly state: CumulusPalletXcmpQueueOutboundState;
  readonly signalsExist: bool;
  readonly firstIndex: u16;
  readonly lastIndex: u16;
}

/** @name CumulusPalletXcmpQueueOutboundState */
export interface CumulusPalletXcmpQueueOutboundState extends Enum {
  readonly isOk: boolean;
  readonly isSuspended: boolean;
  readonly type: 'Ok' | 'Suspended';
}

/** @name CumulusPalletXcmpQueueQueueConfigData */
export interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
  readonly suspendThreshold: u32;
  readonly dropThreshold: u32;
  readonly resumeThreshold: u32;
  readonly thresholdWeight: SpWeightsWeightV2Weight;
  readonly weightRestrictDecay: SpWeightsWeightV2Weight;
  readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
}

/** @name CumulusPrimitivesParachainInherentParachainInherentData */
export interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
  readonly validationData: PolkadotPrimitivesV5PersistedValidationData;
  readonly relayChainState: SpTrieStorageProof;
  readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
  readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
}

/** @name EthbloomBloom */
export interface EthbloomBloom extends U8aFixed {}

/** @name EthereumBlock */
export interface EthereumBlock extends Struct {
  readonly header: EthereumHeader;
  readonly transactions: Vec<EthereumTransactionTransactionV2>;
  readonly ommers: Vec<EthereumHeader>;
}

/** @name EthereumHeader */
export interface EthereumHeader extends Struct {
  readonly parentHash: H256;
  readonly ommersHash: H256;
  readonly beneficiary: H160;
  readonly stateRoot: H256;
  readonly transactionsRoot: H256;
  readonly receiptsRoot: H256;
  readonly logsBloom: EthbloomBloom;
  readonly difficulty: U256;
  readonly number: U256;
  readonly gasLimit: U256;
  readonly gasUsed: U256;
  readonly timestamp: u64;
  readonly extraData: Bytes;
  readonly mixHash: H256;
  readonly nonce: EthereumTypesHashH64;
}

/** @name EthereumLog */
export interface EthereumLog extends Struct {
  readonly address: H160;
  readonly topics: Vec<H256>;
  readonly data: Bytes;
}

/** @name EthereumReceiptEip658ReceiptData */
export interface EthereumReceiptEip658ReceiptData extends Struct {
  readonly statusCode: u8;
  readonly usedGas: U256;
  readonly logsBloom: EthbloomBloom;
  readonly logs: Vec<EthereumLog>;
}

/** @name EthereumReceiptReceiptV3 */
export interface EthereumReceiptReceiptV3 extends Enum {
  readonly isLegacy: boolean;
  readonly asLegacy: EthereumReceiptEip658ReceiptData;
  readonly isEip2930: boolean;
  readonly asEip2930: EthereumReceiptEip658ReceiptData;
  readonly isEip1559: boolean;
  readonly asEip1559: EthereumReceiptEip658ReceiptData;
  readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
}

/** @name EthereumTransactionAccessListItem */
export interface EthereumTransactionAccessListItem extends Struct {
  readonly address: H160;
  readonly storageKeys: Vec<H256>;
}

/** @name EthereumTransactionEip1559Transaction */
export interface EthereumTransactionEip1559Transaction extends Struct {
  readonly chainId: u64;
  readonly nonce: U256;
  readonly maxPriorityFeePerGas: U256;
  readonly maxFeePerGas: U256;
  readonly gasLimit: U256;
  readonly action: EthereumTransactionTransactionAction;
  readonly value: U256;
  readonly input: Bytes;
  readonly accessList: Vec<EthereumTransactionAccessListItem>;
  readonly oddYParity: bool;
  readonly r: H256;
  readonly s: H256;
}

/** @name EthereumTransactionEip2930Transaction */
export interface EthereumTransactionEip2930Transaction extends Struct {
  readonly chainId: u64;
  readonly nonce: U256;
  readonly gasPrice: U256;
  readonly gasLimit: U256;
  readonly action: EthereumTransactionTransactionAction;
  readonly value: U256;
  readonly input: Bytes;
  readonly accessList: Vec<EthereumTransactionAccessListItem>;
  readonly oddYParity: bool;
  readonly r: H256;
  readonly s: H256;
}

/** @name EthereumTransactionLegacyTransaction */
export interface EthereumTransactionLegacyTransaction extends Struct {
  readonly nonce: U256;
  readonly gasPrice: U256;
  readonly gasLimit: U256;
  readonly action: EthereumTransactionTransactionAction;
  readonly value: U256;
  readonly input: Bytes;
  readonly signature: EthereumTransactionTransactionSignature;
}

/** @name EthereumTransactionTransactionAction */
export interface EthereumTransactionTransactionAction extends Enum {
  readonly isCall: boolean;
  readonly asCall: H160;
  readonly isCreate: boolean;
  readonly type: 'Call' | 'Create';
}

/** @name EthereumTransactionTransactionSignature */
export interface EthereumTransactionTransactionSignature extends Struct {
  readonly v: u64;
  readonly r: H256;
  readonly s: H256;
}

/** @name EthereumTransactionTransactionV2 */
export interface EthereumTransactionTransactionV2 extends Enum {
  readonly isLegacy: boolean;
  readonly asLegacy: EthereumTransactionLegacyTransaction;
  readonly isEip2930: boolean;
  readonly asEip2930: EthereumTransactionEip2930Transaction;
  readonly isEip1559: boolean;
  readonly asEip1559: EthereumTransactionEip1559Transaction;
  readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
}

/** @name EthereumTypesHashH64 */
export interface EthereumTypesHashH64 extends U8aFixed {}

/** @name EvmCoreErrorExitError */
export interface EvmCoreErrorExitError extends Enum {
  readonly isStackUnderflow: boolean;
  readonly isStackOverflow: boolean;
  readonly isInvalidJump: boolean;
  readonly isInvalidRange: boolean;
  readonly isDesignatedInvalid: boolean;
  readonly isCallTooDeep: boolean;
  readonly isCreateCollision: boolean;
  readonly isCreateContractLimit: boolean;
  readonly isOutOfOffset: boolean;
  readonly isOutOfGas: boolean;
  readonly isOutOfFund: boolean;
  readonly isPcUnderflow: boolean;
  readonly isCreateEmpty: boolean;
  readonly isOther: boolean;
  readonly asOther: Text;
  readonly isMaxNonce: boolean;
  readonly isInvalidCode: boolean;
  readonly asInvalidCode: u8;
  readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other' | 'MaxNonce' | 'InvalidCode';
}

/** @name EvmCoreErrorExitFatal */
export interface EvmCoreErrorExitFatal extends Enum {
  readonly isNotSupported: boolean;
  readonly isUnhandledInterrupt: boolean;
  readonly isCallErrorAsFatal: boolean;
  readonly asCallErrorAsFatal: EvmCoreErrorExitError;
  readonly isOther: boolean;
  readonly asOther: Text;
  readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
}

/** @name EvmCoreErrorExitReason */
export interface EvmCoreErrorExitReason extends Enum {
  readonly isSucceed: boolean;
  readonly asSucceed: EvmCoreErrorExitSucceed;
  readonly isError: boolean;
  readonly asError: EvmCoreErrorExitError;
  readonly isRevert: boolean;
  readonly asRevert: EvmCoreErrorExitRevert;
  readonly isFatal: boolean;
  readonly asFatal: EvmCoreErrorExitFatal;
  readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
}

/** @name EvmCoreErrorExitRevert */
export interface EvmCoreErrorExitRevert extends Enum {
  readonly isReverted: boolean;
  readonly type: 'Reverted';
}

/** @name EvmCoreErrorExitSucceed */
export interface EvmCoreErrorExitSucceed extends Enum {
  readonly isStopped: boolean;
  readonly isReturned: boolean;
  readonly isSuicided: boolean;
  readonly type: 'Stopped' | 'Returned' | 'Suicided';
}

/** @name FpRpcTransactionStatus */
export interface FpRpcTransactionStatus extends Struct {
  readonly transactionHash: H256;
  readonly transactionIndex: u32;
  readonly from: H160;
  readonly to: Option<H160>;
  readonly contractAddress: Option<H160>;
  readonly logs: Vec<EthereumLog>;
  readonly logsBloom: EthbloomBloom;
}

/** @name FrameSupportDispatchDispatchClass */
export interface FrameSupportDispatchDispatchClass extends Enum {
  readonly isNormal: boolean;
  readonly isOperational: boolean;
  readonly isMandatory: boolean;
  readonly type: 'Normal' | 'Operational' | 'Mandatory';
}

/** @name FrameSupportDispatchDispatchInfo */
export interface FrameSupportDispatchDispatchInfo extends Struct {
  readonly weight: SpWeightsWeightV2Weight;
  readonly class: FrameSupportDispatchDispatchClass;
  readonly paysFee: FrameSupportDispatchPays;
}

/** @name FrameSupportDispatchPays */
export interface FrameSupportDispatchPays extends Enum {
  readonly isYes: boolean;
  readonly isNo: boolean;
  readonly type: 'Yes' | 'No';
}

/** @name FrameSupportDispatchPerDispatchClassU32 */
export interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
  readonly normal: u32;
  readonly operational: u32;
  readonly mandatory: u32;
}

/** @name FrameSupportDispatchPerDispatchClassWeight */
export interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
  readonly normal: SpWeightsWeightV2Weight;
  readonly operational: SpWeightsWeightV2Weight;
  readonly mandatory: SpWeightsWeightV2Weight;
}

/** @name FrameSupportDispatchPerDispatchClassWeightsPerClass */
export interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
  readonly normal: FrameSystemLimitsWeightsPerClass;
  readonly operational: FrameSystemLimitsWeightsPerClass;
  readonly mandatory: FrameSystemLimitsWeightsPerClass;
}

/** @name FrameSupportDispatchRawOrigin */
export interface FrameSupportDispatchRawOrigin extends Enum {
  readonly isRoot: boolean;
  readonly isSigned: boolean;
  readonly asSigned: AccountId32;
  readonly isNone: boolean;
  readonly type: 'Root' | 'Signed' | 'None';
}

/** @name FrameSupportPalletId */
export interface FrameSupportPalletId extends U8aFixed {}

/** @name FrameSupportTokensMiscBalanceStatus */
export interface FrameSupportTokensMiscBalanceStatus extends Enum {
  readonly isFree: boolean;
  readonly isReserved: boolean;
  readonly type: 'Free' | 'Reserved';
}

/** @name FrameSystemAccountInfo */
export interface FrameSystemAccountInfo extends Struct {
  readonly nonce: u32;
  readonly consumers: u32;
  readonly providers: u32;
  readonly sufficients: u32;
  readonly data: PalletBalancesAccountData;
}

/** @name FrameSystemCall */
export interface FrameSystemCall extends Enum {
  readonly isRemark: boolean;
  readonly asRemark: {
    readonly remark: Bytes;
  } & Struct;
  readonly isSetHeapPages: boolean;
  readonly asSetHeapPages: {
    readonly pages: u64;
  } & Struct;
  readonly isSetCode: boolean;
  readonly asSetCode: {
    readonly code: Bytes;
  } & Struct;
  readonly isSetCodeWithoutChecks: boolean;
  readonly asSetCodeWithoutChecks: {
    readonly code: Bytes;
  } & Struct;
  readonly isSetStorage: boolean;
  readonly asSetStorage: {
    readonly items: Vec<ITuple<[Bytes, Bytes]>>;
  } & Struct;
  readonly isKillStorage: boolean;
  readonly asKillStorage: {
    readonly keys_: Vec<Bytes>;
  } & Struct;
  readonly isKillPrefix: boolean;
  readonly asKillPrefix: {
    readonly prefix: Bytes;
    readonly subkeys: u32;
  } & Struct;
  readonly isRemarkWithEvent: boolean;
  readonly asRemarkWithEvent: {
    readonly remark: Bytes;
  } & Struct;
  readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
}

/** @name FrameSystemError */
export interface FrameSystemError extends Enum {
  readonly isInvalidSpecName: boolean;
  readonly isSpecVersionNeedsToIncrease: boolean;
  readonly isFailedToExtractRuntimeVersion: boolean;
  readonly isNonDefaultComposite: boolean;
  readonly isNonZeroRefCount: boolean;
  readonly isCallFiltered: boolean;
  readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
}

/** @name FrameSystemEvent */
export interface FrameSystemEvent extends Enum {
  readonly isExtrinsicSuccess: boolean;
  readonly asExtrinsicSuccess: {
    readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
  } & Struct;
  readonly isExtrinsicFailed: boolean;
  readonly asExtrinsicFailed: {
    readonly dispatchError: SpRuntimeDispatchError;
    readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
  } & Struct;
  readonly isCodeUpdated: boolean;
  readonly isNewAccount: boolean;
  readonly asNewAccount: {
    readonly account: AccountId32;
  } & Struct;
  readonly isKilledAccount: boolean;
  readonly asKilledAccount: {
    readonly account: AccountId32;
  } & Struct;
  readonly isRemarked: boolean;
  readonly asRemarked: {
    readonly sender: AccountId32;
    readonly hash_: H256;
  } & Struct;
  readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
}

/** @name FrameSystemEventRecord */
export interface FrameSystemEventRecord extends Struct {
  readonly phase: FrameSystemPhase;
  readonly event: Event;
  readonly topics: Vec<H256>;
}

/** @name FrameSystemExtensionsCheckGenesis */
export interface FrameSystemExtensionsCheckGenesis extends Null {}

/** @name FrameSystemExtensionsCheckNonce */
export interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

/** @name FrameSystemExtensionsCheckSpecVersion */
export interface FrameSystemExtensionsCheckSpecVersion extends Null {}

/** @name FrameSystemExtensionsCheckTxVersion */
export interface FrameSystemExtensionsCheckTxVersion extends Null {}

/** @name FrameSystemExtensionsCheckWeight */
export interface FrameSystemExtensionsCheckWeight extends Null {}

/** @name FrameSystemLastRuntimeUpgradeInfo */
export interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
  readonly specVersion: Compact<u32>;
  readonly specName: Text;
}

/** @name FrameSystemLimitsBlockLength */
export interface FrameSystemLimitsBlockLength extends Struct {
  readonly max: FrameSupportDispatchPerDispatchClassU32;
}

/** @name FrameSystemLimitsBlockWeights */
export interface FrameSystemLimitsBlockWeights extends Struct {
  readonly baseBlock: SpWeightsWeightV2Weight;
  readonly maxBlock: SpWeightsWeightV2Weight;
  readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
}

/** @name FrameSystemLimitsWeightsPerClass */
export interface FrameSystemLimitsWeightsPerClass extends Struct {
  readonly baseExtrinsic: SpWeightsWeightV2Weight;
  readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
  readonly maxTotal: Option<SpWeightsWeightV2Weight>;
  readonly reserved: Option<SpWeightsWeightV2Weight>;
}

/** @name FrameSystemPhase */
export interface FrameSystemPhase extends Enum {
  readonly isApplyExtrinsic: boolean;
  readonly asApplyExtrinsic: u32;
  readonly isFinalization: boolean;
  readonly isInitialization: boolean;
  readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
}

/** @name OrmlTokensAccountData */
export interface OrmlTokensAccountData extends Struct {
  readonly free: u128;
  readonly reserved: u128;
  readonly frozen: u128;
}

/** @name OrmlTokensBalanceLock */
export interface OrmlTokensBalanceLock extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
}

/** @name OrmlTokensModuleCall */
export interface OrmlTokensModuleCall extends Enum {
  readonly isTransfer: boolean;
  readonly asTransfer: {
    readonly dest: MultiAddress;
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly amount: Compact<u128>;
  } & Struct;
  readonly isTransferAll: boolean;
  readonly asTransferAll: {
    readonly dest: MultiAddress;
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly keepAlive: bool;
  } & Struct;
  readonly isTransferKeepAlive: boolean;
  readonly asTransferKeepAlive: {
    readonly dest: MultiAddress;
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly amount: Compact<u128>;
  } & Struct;
  readonly isForceTransfer: boolean;
  readonly asForceTransfer: {
    readonly source: MultiAddress;
    readonly dest: MultiAddress;
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly amount: Compact<u128>;
  } & Struct;
  readonly isSetBalance: boolean;
  readonly asSetBalance: {
    readonly who: MultiAddress;
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly newFree: Compact<u128>;
    readonly newReserved: Compact<u128>;
  } & Struct;
  readonly type: 'Transfer' | 'TransferAll' | 'TransferKeepAlive' | 'ForceTransfer' | 'SetBalance';
}

/** @name OrmlTokensModuleError */
export interface OrmlTokensModuleError extends Enum {
  readonly isBalanceTooLow: boolean;
  readonly isAmountIntoBalanceFailed: boolean;
  readonly isLiquidityRestrictions: boolean;
  readonly isMaxLocksExceeded: boolean;
  readonly isKeepAlive: boolean;
  readonly isExistentialDeposit: boolean;
  readonly isDeadAccount: boolean;
  readonly isTooManyReserves: boolean;
  readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TooManyReserves';
}

/** @name OrmlTokensModuleEvent */
export interface OrmlTokensModuleEvent extends Enum {
  readonly isEndowed: boolean;
  readonly asEndowed: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isDustLost: boolean;
  readonly asDustLost: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isTransfer: boolean;
  readonly asTransfer: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly from: AccountId32;
    readonly to: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isReserved: boolean;
  readonly asReserved: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isUnreserved: boolean;
  readonly asUnreserved: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isReserveRepatriated: boolean;
  readonly asReserveRepatriated: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly from: AccountId32;
    readonly to: AccountId32;
    readonly amount: u128;
    readonly status: FrameSupportTokensMiscBalanceStatus;
  } & Struct;
  readonly isBalanceSet: boolean;
  readonly asBalanceSet: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly free: u128;
    readonly reserved: u128;
  } & Struct;
  readonly isTotalIssuanceSet: boolean;
  readonly asTotalIssuanceSet: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly amount: u128;
  } & Struct;
  readonly isWithdrawn: boolean;
  readonly asWithdrawn: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isSlashed: boolean;
  readonly asSlashed: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly freeAmount: u128;
    readonly reservedAmount: u128;
  } & Struct;
  readonly isDeposited: boolean;
  readonly asDeposited: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isLockSet: boolean;
  readonly asLockSet: {
    readonly lockId: U8aFixed;
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isLockRemoved: boolean;
  readonly asLockRemoved: {
    readonly lockId: U8aFixed;
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
  } & Struct;
  readonly isLocked: boolean;
  readonly asLocked: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isUnlocked: boolean;
  readonly asUnlocked: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isIssued: boolean;
  readonly asIssued: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly amount: u128;
  } & Struct;
  readonly isRescinded: boolean;
  readonly asRescinded: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly amount: u128;
  } & Struct;
  readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Locked' | 'Unlocked' | 'Issued' | 'Rescinded';
}

/** @name OrmlTokensReserveData */
export interface OrmlTokensReserveData extends Struct {
  readonly id: Null;
  readonly amount: u128;
}

/** @name OrmlVestingModuleCall */
export interface OrmlVestingModuleCall extends Enum {
  readonly isClaim: boolean;
  readonly isVestedTransfer: boolean;
  readonly asVestedTransfer: {
    readonly dest: MultiAddress;
    readonly schedule: OrmlVestingVestingSchedule;
  } & Struct;
  readonly isUpdateVestingSchedules: boolean;
  readonly asUpdateVestingSchedules: {
    readonly who: MultiAddress;
    readonly vestingSchedules: Vec<OrmlVestingVestingSchedule>;
  } & Struct;
  readonly isClaimFor: boolean;
  readonly asClaimFor: {
    readonly dest: MultiAddress;
  } & Struct;
  readonly type: 'Claim' | 'VestedTransfer' | 'UpdateVestingSchedules' | 'ClaimFor';
}

/** @name OrmlVestingModuleError */
export interface OrmlVestingModuleError extends Enum {
  readonly isZeroVestingPeriod: boolean;
  readonly isZeroVestingPeriodCount: boolean;
  readonly isInsufficientBalanceToLock: boolean;
  readonly isTooManyVestingSchedules: boolean;
  readonly isAmountLow: boolean;
  readonly isMaxVestingSchedulesExceeded: boolean;
  readonly type: 'ZeroVestingPeriod' | 'ZeroVestingPeriodCount' | 'InsufficientBalanceToLock' | 'TooManyVestingSchedules' | 'AmountLow' | 'MaxVestingSchedulesExceeded';
}

/** @name OrmlVestingModuleEvent */
export interface OrmlVestingModuleEvent extends Enum {
  readonly isVestingScheduleAdded: boolean;
  readonly asVestingScheduleAdded: {
    readonly from: AccountId32;
    readonly to: AccountId32;
    readonly vestingSchedule: OrmlVestingVestingSchedule;
  } & Struct;
  readonly isClaimed: boolean;
  readonly asClaimed: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isVestingSchedulesUpdated: boolean;
  readonly asVestingSchedulesUpdated: {
    readonly who: AccountId32;
  } & Struct;
  readonly type: 'VestingScheduleAdded' | 'Claimed' | 'VestingSchedulesUpdated';
}

/** @name OrmlVestingVestingSchedule */
export interface OrmlVestingVestingSchedule extends Struct {
  readonly start: u32;
  readonly period: u32;
  readonly periodCount: u32;
  readonly perPeriod: Compact<u128>;
}

/** @name OrmlXtokensModuleCall */
export interface OrmlXtokensModuleCall extends Enum {
  readonly isTransfer: boolean;
  readonly asTransfer: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly amount: u128;
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly destWeightLimit: StagingXcmV3WeightLimit;
  } & Struct;
  readonly isTransferMultiasset: boolean;
  readonly asTransferMultiasset: {
    readonly asset: StagingXcmVersionedMultiAsset;
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly destWeightLimit: StagingXcmV3WeightLimit;
  } & Struct;
  readonly isTransferWithFee: boolean;
  readonly asTransferWithFee: {
    readonly currencyId: PalletForeignAssetsAssetId;
    readonly amount: u128;
    readonly fee: u128;
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly destWeightLimit: StagingXcmV3WeightLimit;
  } & Struct;
  readonly isTransferMultiassetWithFee: boolean;
  readonly asTransferMultiassetWithFee: {
    readonly asset: StagingXcmVersionedMultiAsset;
    readonly fee: StagingXcmVersionedMultiAsset;
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly destWeightLimit: StagingXcmV3WeightLimit;
  } & Struct;
  readonly isTransferMulticurrencies: boolean;
  readonly asTransferMulticurrencies: {
    readonly currencies: Vec<ITuple<[PalletForeignAssetsAssetId, u128]>>;
    readonly feeItem: u32;
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly destWeightLimit: StagingXcmV3WeightLimit;
  } & Struct;
  readonly isTransferMultiassets: boolean;
  readonly asTransferMultiassets: {
    readonly assets: StagingXcmVersionedMultiAssets;
    readonly feeItem: u32;
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly destWeightLimit: StagingXcmV3WeightLimit;
  } & Struct;
  readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
}

/** @name OrmlXtokensModuleError */
export interface OrmlXtokensModuleError extends Enum {
  readonly isAssetHasNoReserve: boolean;
  readonly isNotCrossChainTransfer: boolean;
  readonly isInvalidDest: boolean;
  readonly isNotCrossChainTransferableCurrency: boolean;
  readonly isUnweighableMessage: boolean;
  readonly isXcmExecutionFailed: boolean;
  readonly isCannotReanchor: boolean;
  readonly isInvalidAncestry: boolean;
  readonly isInvalidAsset: boolean;
  readonly isDestinationNotInvertible: boolean;
  readonly isBadVersion: boolean;
  readonly isDistinctReserveForAssetAndFee: boolean;
  readonly isZeroFee: boolean;
  readonly isZeroAmount: boolean;
  readonly isTooManyAssetsBeingSent: boolean;
  readonly isAssetIndexNonExistent: boolean;
  readonly isFeeNotEnough: boolean;
  readonly isNotSupportedMultiLocation: boolean;
  readonly isMinXcmFeeNotDefined: boolean;
  readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedMultiLocation' | 'MinXcmFeeNotDefined';
}

/** @name OrmlXtokensModuleEvent */
export interface OrmlXtokensModuleEvent extends Enum {
  readonly isTransferredMultiAssets: boolean;
  readonly asTransferredMultiAssets: {
    readonly sender: AccountId32;
    readonly assets: StagingXcmV3MultiassetMultiAssets;
    readonly fee: StagingXcmV3MultiAsset;
    readonly dest: StagingXcmV3MultiLocation;
  } & Struct;
  readonly type: 'TransferredMultiAssets';
}

/** @name PalletAppPromotionCall */
export interface PalletAppPromotionCall extends Enum {
  readonly isSetAdminAddress: boolean;
  readonly asSetAdminAddress: {
    readonly admin: PalletEvmAccountBasicCrossAccountIdRepr;
  } & Struct;
  readonly isStake: boolean;
  readonly asStake: {
    readonly amount: u128;
  } & Struct;
  readonly isUnstakeAll: boolean;
  readonly isSponsorCollection: boolean;
  readonly asSponsorCollection: {
    readonly collectionId: u32;
  } & Struct;
  readonly isStopSponsoringCollection: boolean;
  readonly asStopSponsoringCollection: {
    readonly collectionId: u32;
  } & Struct;
  readonly isSponsorContract: boolean;
  readonly asSponsorContract: {
    readonly contractId: H160;
  } & Struct;
  readonly isStopSponsoringContract: boolean;
  readonly asStopSponsoringContract: {
    readonly contractId: H160;
  } & Struct;
  readonly isPayoutStakers: boolean;
  readonly asPayoutStakers: {
    readonly stakersNumber: Option<u8>;
  } & Struct;
  readonly isUnstakePartial: boolean;
  readonly asUnstakePartial: {
    readonly amount: u128;
  } & Struct;
  readonly isForceUnstake: boolean;
  readonly asForceUnstake: {
    readonly pendingBlocks: Vec<u32>;
  } & Struct;
  readonly type: 'SetAdminAddress' | 'Stake' | 'UnstakeAll' | 'SponsorCollection' | 'StopSponsoringCollection' | 'SponsorContract' | 'StopSponsoringContract' | 'PayoutStakers' | 'UnstakePartial' | 'ForceUnstake';
}

/** @name PalletAppPromotionError */
export interface PalletAppPromotionError extends Enum {
  readonly isAdminNotSet: boolean;
  readonly isNoPermission: boolean;
  readonly isNotSufficientFunds: boolean;
  readonly isPendingForBlockOverflow: boolean;
  readonly isSponsorNotSet: boolean;
  readonly isInsufficientStakedBalance: boolean;
  readonly isInconsistencyState: boolean;
  readonly type: 'AdminNotSet' | 'NoPermission' | 'NotSufficientFunds' | 'PendingForBlockOverflow' | 'SponsorNotSet' | 'InsufficientStakedBalance' | 'InconsistencyState';
}

/** @name PalletAppPromotionEvent */
export interface PalletAppPromotionEvent extends Enum {
  readonly isStakingRecalculation: boolean;
  readonly asStakingRecalculation: ITuple<[AccountId32, u128, u128]>;
  readonly isStake: boolean;
  readonly asStake: ITuple<[AccountId32, u128]>;
  readonly isUnstake: boolean;
  readonly asUnstake: ITuple<[AccountId32, u128]>;
  readonly isSetAdmin: boolean;
  readonly asSetAdmin: AccountId32;
  readonly type: 'StakingRecalculation' | 'Stake' | 'Unstake' | 'SetAdmin';
}

/** @name PalletBalancesAccountData */
export interface PalletBalancesAccountData extends Struct {
  readonly free: u128;
  readonly reserved: u128;
  readonly frozen: u128;
  readonly flags: u128;
}

/** @name PalletBalancesBalanceLock */
export interface PalletBalancesBalanceLock extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
  readonly reasons: PalletBalancesReasons;
}

/** @name PalletBalancesCall */
export interface PalletBalancesCall extends Enum {
  readonly isTransferAllowDeath: boolean;
  readonly asTransferAllowDeath: {
    readonly dest: MultiAddress;
    readonly value: Compact<u128>;
  } & Struct;
  readonly isSetBalanceDeprecated: boolean;
  readonly asSetBalanceDeprecated: {
    readonly who: MultiAddress;
    readonly newFree: Compact<u128>;
    readonly oldReserved: Compact<u128>;
  } & Struct;
  readonly isForceTransfer: boolean;
  readonly asForceTransfer: {
    readonly source: MultiAddress;
    readonly dest: MultiAddress;
    readonly value: Compact<u128>;
  } & Struct;
  readonly isTransferKeepAlive: boolean;
  readonly asTransferKeepAlive: {
    readonly dest: MultiAddress;
    readonly value: Compact<u128>;
  } & Struct;
  readonly isTransferAll: boolean;
  readonly asTransferAll: {
    readonly dest: MultiAddress;
    readonly keepAlive: bool;
  } & Struct;
  readonly isForceUnreserve: boolean;
  readonly asForceUnreserve: {
    readonly who: MultiAddress;
    readonly amount: u128;
  } & Struct;
  readonly isUpgradeAccounts: boolean;
  readonly asUpgradeAccounts: {
    readonly who: Vec<AccountId32>;
  } & Struct;
  readonly isTransfer: boolean;
  readonly asTransfer: {
    readonly dest: MultiAddress;
    readonly value: Compact<u128>;
  } & Struct;
  readonly isForceSetBalance: boolean;
  readonly asForceSetBalance: {
    readonly who: MultiAddress;
    readonly newFree: Compact<u128>;
  } & Struct;
  readonly type: 'TransferAllowDeath' | 'SetBalanceDeprecated' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'Transfer' | 'ForceSetBalance';
}

/** @name PalletBalancesError */
export interface PalletBalancesError extends Enum {
  readonly isVestingBalance: boolean;
  readonly isLiquidityRestrictions: boolean;
  readonly isInsufficientBalance: boolean;
  readonly isExistentialDeposit: boolean;
  readonly isExpendability: boolean;
  readonly isExistingVestingSchedule: boolean;
  readonly isDeadAccount: boolean;
  readonly isTooManyReserves: boolean;
  readonly isTooManyHolds: boolean;
  readonly isTooManyFreezes: boolean;
  readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes';
}

/** @name PalletBalancesEvent */
export interface PalletBalancesEvent extends Enum {
  readonly isEndowed: boolean;
  readonly asEndowed: {
    readonly account: AccountId32;
    readonly freeBalance: u128;
  } & Struct;
  readonly isDustLost: boolean;
  readonly asDustLost: {
    readonly account: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isTransfer: boolean;
  readonly asTransfer: {
    readonly from: AccountId32;
    readonly to: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isBalanceSet: boolean;
  readonly asBalanceSet: {
    readonly who: AccountId32;
    readonly free: u128;
  } & Struct;
  readonly isReserved: boolean;
  readonly asReserved: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isUnreserved: boolean;
  readonly asUnreserved: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isReserveRepatriated: boolean;
  readonly asReserveRepatriated: {
    readonly from: AccountId32;
    readonly to: AccountId32;
    readonly amount: u128;
    readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
  } & Struct;
  readonly isDeposit: boolean;
  readonly asDeposit: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isWithdraw: boolean;
  readonly asWithdraw: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isSlashed: boolean;
  readonly asSlashed: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isMinted: boolean;
  readonly asMinted: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isBurned: boolean;
  readonly asBurned: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isSuspended: boolean;
  readonly asSuspended: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isRestored: boolean;
  readonly asRestored: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isUpgraded: boolean;
  readonly asUpgraded: {
    readonly who: AccountId32;
  } & Struct;
  readonly isIssued: boolean;
  readonly asIssued: {
    readonly amount: u128;
  } & Struct;
  readonly isRescinded: boolean;
  readonly asRescinded: {
    readonly amount: u128;
  } & Struct;
  readonly isLocked: boolean;
  readonly asLocked: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isUnlocked: boolean;
  readonly asUnlocked: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isFrozen: boolean;
  readonly asFrozen: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isThawed: boolean;
  readonly asThawed: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed';
}

/** @name PalletBalancesIdAmount */
export interface PalletBalancesIdAmount extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
}

/** @name PalletBalancesReasons */
export interface PalletBalancesReasons extends Enum {
  readonly isFee: boolean;
  readonly isMisc: boolean;
  readonly isAll: boolean;
  readonly type: 'Fee' | 'Misc' | 'All';
}

/** @name PalletBalancesReserveData */
export interface PalletBalancesReserveData extends Struct {
  readonly id: U8aFixed;
  readonly amount: u128;
}

/** @name PalletCollatorSelectionHoldReason */
export interface PalletCollatorSelectionHoldReason extends Enum {
  readonly isLicenseBond: boolean;
  readonly type: 'LicenseBond';
}

/** @name PalletCommonError */
export interface PalletCommonError extends Enum {
  readonly isCollectionNotFound: boolean;
  readonly isMustBeTokenOwner: boolean;
  readonly isNoPermission: boolean;
  readonly isCantDestroyNotEmptyCollection: boolean;
  readonly isPublicMintingNotAllowed: boolean;
  readonly isAddressNotInAllowlist: boolean;
  readonly isCollectionNameLimitExceeded: boolean;
  readonly isCollectionDescriptionLimitExceeded: boolean;
  readonly isCollectionTokenPrefixLimitExceeded: boolean;
  readonly isTotalCollectionsLimitExceeded: boolean;
  readonly isCollectionAdminCountExceeded: boolean;
  readonly isCollectionLimitBoundsExceeded: boolean;
  readonly isOwnerPermissionsCantBeReverted: boolean;
  readonly isTransferNotAllowed: boolean;
  readonly isAccountTokenLimitExceeded: boolean;
  readonly isCollectionTokenLimitExceeded: boolean;
  readonly isMetadataFlagFrozen: boolean;
  readonly isTokenNotFound: boolean;
  readonly isTokenValueTooLow: boolean;
  readonly isApprovedValueTooLow: boolean;
  readonly isCantApproveMoreThanOwned: boolean;
  readonly isAddressIsNotEthMirror: boolean;
  readonly isAddressIsZero: boolean;
  readonly isUnsupportedOperation: boolean;
  readonly isNotSufficientFounds: boolean;
  readonly isUserIsNotAllowedToNest: boolean;
  readonly isSourceCollectionIsNotAllowedToNest: boolean;
  readonly isCollectionFieldSizeExceeded: boolean;
  readonly isNoSpaceForProperty: boolean;
  readonly isPropertyLimitReached: boolean;
  readonly isPropertyKeyIsTooLong: boolean;
  readonly isInvalidCharacterInPropertyKey: boolean;
  readonly isEmptyPropertyKey: boolean;
  readonly isCollectionIsExternal: boolean;
  readonly isCollectionIsInternal: boolean;
  readonly isConfirmSponsorshipFail: boolean;
  readonly isUserIsNotCollectionAdmin: boolean;
  readonly type: 'CollectionNotFound' | 'MustBeTokenOwner' | 'NoPermission' | 'CantDestroyNotEmptyCollection' | 'PublicMintingNotAllowed' | 'AddressNotInAllowlist' | 'CollectionNameLimitExceeded' | 'CollectionDescriptionLimitExceeded' | 'CollectionTokenPrefixLimitExceeded' | 'TotalCollectionsLimitExceeded' | 'CollectionAdminCountExceeded' | 'CollectionLimitBoundsExceeded' | 'OwnerPermissionsCantBeReverted' | 'TransferNotAllowed' | 'AccountTokenLimitExceeded' | 'CollectionTokenLimitExceeded' | 'MetadataFlagFrozen' | 'TokenNotFound' | 'TokenValueTooLow' | 'ApprovedValueTooLow' | 'CantApproveMoreThanOwned' | 'AddressIsNotEthMirror' | 'AddressIsZero' | 'UnsupportedOperation' | 'NotSufficientFounds' | 'UserIsNotAllowedToNest' | 'SourceCollectionIsNotAllowedToNest' | 'CollectionFieldSizeExceeded' | 'NoSpaceForProperty' | 'PropertyLimitReached' | 'PropertyKeyIsTooLong' | 'InvalidCharacterInPropertyKey' | 'EmptyPropertyKey' | 'CollectionIsExternal' | 'CollectionIsInternal' | 'ConfirmSponsorshipFail' | 'UserIsNotCollectionAdmin';
}

/** @name PalletCommonEvent */
export interface PalletCommonEvent extends Enum {
  readonly isCollectionCreated: boolean;
  readonly asCollectionCreated: ITuple<[u32, u8, AccountId32]>;
  readonly isCollectionDestroyed: boolean;
  readonly asCollectionDestroyed: u32;
  readonly isItemCreated: boolean;
  readonly asItemCreated: ITuple<[u32, u32, PalletEvmAccountBasicCrossAccountIdRepr, u128]>;
  readonly isItemDestroyed: boolean;
  readonly asItemDestroyed: ITuple<[u32, u32, PalletEvmAccountBasicCrossAccountIdRepr, u128]>;
  readonly isTransfer: boolean;
  readonly asTransfer: ITuple<[u32, u32, PalletEvmAccountBasicCrossAccountIdRepr, PalletEvmAccountBasicCrossAccountIdRepr, u128]>;
  readonly isApproved: boolean;
  readonly asApproved: ITuple<[u32, u32, PalletEvmAccountBasicCrossAccountIdRepr, PalletEvmAccountBasicCrossAccountIdRepr, u128]>;
  readonly isApprovedForAll: boolean;
  readonly asApprovedForAll: ITuple<[u32, PalletEvmAccountBasicCrossAccountIdRepr, PalletEvmAccountBasicCrossAccountIdRepr, bool]>;
  readonly isCollectionPropertySet: boolean;
  readonly asCollectionPropertySet: ITuple<[u32, Bytes]>;
  readonly isCollectionPropertyDeleted: boolean;
  readonly asCollectionPropertyDeleted: ITuple<[u32, Bytes]>;
  readonly isTokenPropertySet: boolean;
  readonly asTokenPropertySet: ITuple<[u32, u32, Bytes]>;
  readonly isTokenPropertyDeleted: boolean;
  readonly asTokenPropertyDeleted: ITuple<[u32, u32, Bytes]>;
  readonly isPropertyPermissionSet: boolean;
  readonly asPropertyPermissionSet: ITuple<[u32, Bytes]>;
  readonly isAllowListAddressAdded: boolean;
  readonly asAllowListAddressAdded: ITuple<[u32, PalletEvmAccountBasicCrossAccountIdRepr]>;
  readonly isAllowListAddressRemoved: boolean;
  readonly asAllowListAddressRemoved: ITuple<[u32, PalletEvmAccountBasicCrossAccountIdRepr]>;
  readonly isCollectionAdminAdded: boolean;
  readonly asCollectionAdminAdded: ITuple<[u32, PalletEvmAccountBasicCrossAccountIdRepr]>;
  readonly isCollectionAdminRemoved: boolean;
  readonly asCollectionAdminRemoved: ITuple<[u32, PalletEvmAccountBasicCrossAccountIdRepr]>;
  readonly isCollectionLimitSet: boolean;
  readonly asCollectionLimitSet: u32;
  readonly isCollectionOwnerChanged: boolean;
  readonly asCollectionOwnerChanged: ITuple<[u32, AccountId32]>;
  readonly isCollectionPermissionSet: boolean;
  readonly asCollectionPermissionSet: u32;
  readonly isCollectionSponsorSet: boolean;
  readonly asCollectionSponsorSet: ITuple<[u32, AccountId32]>;
  readonly isSponsorshipConfirmed: boolean;
  readonly asSponsorshipConfirmed: ITuple<[u32, AccountId32]>;
  readonly isCollectionSponsorRemoved: boolean;
  readonly asCollectionSponsorRemoved: u32;
  readonly type: 'CollectionCreated' | 'CollectionDestroyed' | 'ItemCreated' | 'ItemDestroyed' | 'Transfer' | 'Approved' | 'ApprovedForAll' | 'CollectionPropertySet' | 'CollectionPropertyDeleted' | 'TokenPropertySet' | 'TokenPropertyDeleted' | 'PropertyPermissionSet' | 'AllowListAddressAdded' | 'AllowListAddressRemoved' | 'CollectionAdminAdded' | 'CollectionAdminRemoved' | 'CollectionLimitSet' | 'CollectionOwnerChanged' | 'CollectionPermissionSet' | 'CollectionSponsorSet' | 'SponsorshipConfirmed' | 'CollectionSponsorRemoved';
}

/** @name PalletConfigurationAppPromotionConfiguration */
export interface PalletConfigurationAppPromotionConfiguration extends Struct {
  readonly recalculationInterval: Option<u32>;
  readonly pendingInterval: Option<u32>;
  readonly intervalIncome: Option<Perbill>;
  readonly maxStakersPerCalculation: Option<u8>;
}

/** @name PalletConfigurationCall */
export interface PalletConfigurationCall extends Enum {
  readonly isSetWeightToFeeCoefficientOverride: boolean;
  readonly asSetWeightToFeeCoefficientOverride: {
    readonly coeff: Option<u64>;
  } & Struct;
  readonly isSetMinGasPriceOverride: boolean;
  readonly asSetMinGasPriceOverride: {
    readonly coeff: Option<u64>;
  } & Struct;
  readonly isSetAppPromotionConfigurationOverride: boolean;
  readonly asSetAppPromotionConfigurationOverride: {
    readonly configuration: PalletConfigurationAppPromotionConfiguration;
  } & Struct;
  readonly isSetCollatorSelectionDesiredCollators: boolean;
  readonly asSetCollatorSelectionDesiredCollators: {
    readonly max: Option<u32>;
  } & Struct;
  readonly isSetCollatorSelectionLicenseBond: boolean;
  readonly asSetCollatorSelectionLicenseBond: {
    readonly amount: Option<u128>;
  } & Struct;
  readonly isSetCollatorSelectionKickThreshold: boolean;
  readonly asSetCollatorSelectionKickThreshold: {
    readonly threshold: Option<u32>;
  } & Struct;
  readonly type: 'SetWeightToFeeCoefficientOverride' | 'SetMinGasPriceOverride' | 'SetAppPromotionConfigurationOverride' | 'SetCollatorSelectionDesiredCollators' | 'SetCollatorSelectionLicenseBond' | 'SetCollatorSelectionKickThreshold';
}

/** @name PalletConfigurationError */
export interface PalletConfigurationError extends Enum {
  readonly isInconsistentConfiguration: boolean;
  readonly type: 'InconsistentConfiguration';
}

/** @name PalletConfigurationEvent */
export interface PalletConfigurationEvent extends Enum {
  readonly isNewDesiredCollators: boolean;
  readonly asNewDesiredCollators: {
    readonly desiredCollators: Option<u32>;
  } & Struct;
  readonly isNewCollatorLicenseBond: boolean;
  readonly asNewCollatorLicenseBond: {
    readonly bondCost: Option<u128>;
  } & Struct;
  readonly isNewCollatorKickThreshold: boolean;
  readonly asNewCollatorKickThreshold: {
    readonly lengthInBlocks: Option<u32>;
  } & Struct;
  readonly type: 'NewDesiredCollators' | 'NewCollatorLicenseBond' | 'NewCollatorKickThreshold';
}

/** @name PalletEthereumCall */
export interface PalletEthereumCall extends Enum {
  readonly isTransact: boolean;
  readonly asTransact: {
    readonly transaction: EthereumTransactionTransactionV2;
  } & Struct;
  readonly type: 'Transact';
}

/** @name PalletEthereumError */
export interface PalletEthereumError extends Enum {
  readonly isInvalidSignature: boolean;
  readonly isPreLogExists: boolean;
  readonly type: 'InvalidSignature' | 'PreLogExists';
}

/** @name PalletEthereumEvent */
export interface PalletEthereumEvent extends Enum {
  readonly isExecuted: boolean;
  readonly asExecuted: {
    readonly from: H160;
    readonly to: H160;
    readonly transactionHash: H256;
    readonly exitReason: EvmCoreErrorExitReason;
    readonly extraData: Bytes;
  } & Struct;
  readonly type: 'Executed';
}

/** @name PalletEthereumFakeTransactionFinalizer */
export interface PalletEthereumFakeTransactionFinalizer extends Null {}

/** @name PalletEthereumRawOrigin */
export interface PalletEthereumRawOrigin extends Enum {
  readonly isEthereumTransaction: boolean;
  readonly asEthereumTransaction: H160;
  readonly type: 'EthereumTransaction';
}

/** @name PalletEvmAccountBasicCrossAccountIdRepr */
export interface PalletEvmAccountBasicCrossAccountIdRepr extends Enum {
  readonly isSubstrate: boolean;
  readonly asSubstrate: AccountId32;
  readonly isEthereum: boolean;
  readonly asEthereum: H160;
  readonly type: 'Substrate' | 'Ethereum';
}

/** @name PalletEvmCall */
export interface PalletEvmCall extends Enum {
  readonly isWithdraw: boolean;
  readonly asWithdraw: {
    readonly address: H160;
    readonly value: u128;
  } & Struct;
  readonly isCall: boolean;
  readonly asCall: {
    readonly source: H160;
    readonly target: H160;
    readonly input: Bytes;
    readonly value: U256;
    readonly gasLimit: u64;
    readonly maxFeePerGas: U256;
    readonly maxPriorityFeePerGas: Option<U256>;
    readonly nonce: Option<U256>;
    readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
  } & Struct;
  readonly isCreate: boolean;
  readonly asCreate: {
    readonly source: H160;
    readonly init: Bytes;
    readonly value: U256;
    readonly gasLimit: u64;
    readonly maxFeePerGas: U256;
    readonly maxPriorityFeePerGas: Option<U256>;
    readonly nonce: Option<U256>;
    readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
  } & Struct;
  readonly isCreate2: boolean;
  readonly asCreate2: {
    readonly source: H160;
    readonly init: Bytes;
    readonly salt: H256;
    readonly value: U256;
    readonly gasLimit: u64;
    readonly maxFeePerGas: U256;
    readonly maxPriorityFeePerGas: Option<U256>;
    readonly nonce: Option<U256>;
    readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
  } & Struct;
  readonly type: 'Withdraw' | 'Call' | 'Create' | 'Create2';
}

/** @name PalletEvmCodeMetadata */
export interface PalletEvmCodeMetadata extends Struct {
  readonly size_: u64;
  readonly hash_: H256;
}

/** @name PalletEvmCoderSubstrateError */
export interface PalletEvmCoderSubstrateError extends Enum {
  readonly isOutOfGas: boolean;
  readonly isOutOfFund: boolean;
  readonly type: 'OutOfGas' | 'OutOfFund';
}

/** @name PalletEvmContractHelpersCall */
export interface PalletEvmContractHelpersCall extends Enum {
  readonly isMigrateFromSelfSponsoring: boolean;
  readonly asMigrateFromSelfSponsoring: {
    readonly addresses: Vec<H160>;
  } & Struct;
  readonly type: 'MigrateFromSelfSponsoring';
}

/** @name PalletEvmContractHelpersError */
export interface PalletEvmContractHelpersError extends Enum {
  readonly isNoPermission: boolean;
  readonly isNoPendingSponsor: boolean;
  readonly isTooManyMethodsHaveSponsoredLimit: boolean;
  readonly type: 'NoPermission' | 'NoPendingSponsor' | 'TooManyMethodsHaveSponsoredLimit';
}

/** @name PalletEvmContractHelpersEvent */
export interface PalletEvmContractHelpersEvent extends Enum {
  readonly isContractSponsorSet: boolean;
  readonly asContractSponsorSet: ITuple<[H160, AccountId32]>;
  readonly isContractSponsorshipConfirmed: boolean;
  readonly asContractSponsorshipConfirmed: ITuple<[H160, AccountId32]>;
  readonly isContractSponsorRemoved: boolean;
  readonly asContractSponsorRemoved: H160;
  readonly type: 'ContractSponsorSet' | 'ContractSponsorshipConfirmed' | 'ContractSponsorRemoved';
}

/** @name PalletEvmContractHelpersSponsoringModeT */
export interface PalletEvmContractHelpersSponsoringModeT extends Enum {
  readonly isDisabled: boolean;
  readonly isAllowlisted: boolean;
  readonly isGenerous: boolean;
  readonly type: 'Disabled' | 'Allowlisted' | 'Generous';
}

/** @name PalletEvmError */
export interface PalletEvmError extends Enum {
  readonly isBalanceLow: boolean;
  readonly isFeeOverflow: boolean;
  readonly isPaymentOverflow: boolean;
  readonly isWithdrawFailed: boolean;
  readonly isGasPriceTooLow: boolean;
  readonly isInvalidNonce: boolean;
  readonly isGasLimitTooLow: boolean;
  readonly isGasLimitTooHigh: boolean;
  readonly isUndefined: boolean;
  readonly isReentrancy: boolean;
  readonly isTransactionMustComeFromEOA: boolean;
  readonly type: 'BalanceLow' | 'FeeOverflow' | 'PaymentOverflow' | 'WithdrawFailed' | 'GasPriceTooLow' | 'InvalidNonce' | 'GasLimitTooLow' | 'GasLimitTooHigh' | 'Undefined' | 'Reentrancy' | 'TransactionMustComeFromEOA';
}

/** @name PalletEvmEvent */
export interface PalletEvmEvent extends Enum {
  readonly isLog: boolean;
  readonly asLog: {
    readonly log: EthereumLog;
  } & Struct;
  readonly isCreated: boolean;
  readonly asCreated: {
    readonly address: H160;
  } & Struct;
  readonly isCreatedFailed: boolean;
  readonly asCreatedFailed: {
    readonly address: H160;
  } & Struct;
  readonly isExecuted: boolean;
  readonly asExecuted: {
    readonly address: H160;
  } & Struct;
  readonly isExecutedFailed: boolean;
  readonly asExecutedFailed: {
    readonly address: H160;
  } & Struct;
  readonly type: 'Log' | 'Created' | 'CreatedFailed' | 'Executed' | 'ExecutedFailed';
}

/** @name PalletEvmMigrationCall */
export interface PalletEvmMigrationCall extends Enum {
  readonly isBegin: boolean;
  readonly asBegin: {
    readonly address: H160;
  } & Struct;
  readonly isSetData: boolean;
  readonly asSetData: {
    readonly address: H160;
    readonly data: Vec<ITuple<[H256, H256]>>;
  } & Struct;
  readonly isFinish: boolean;
  readonly asFinish: {
    readonly address: H160;
    readonly code: Bytes;
  } & Struct;
  readonly isInsertEthLogs: boolean;
  readonly asInsertEthLogs: {
    readonly logs: Vec<EthereumLog>;
  } & Struct;
  readonly isInsertEvents: boolean;
  readonly asInsertEvents: {
    readonly events: Vec<Bytes>;
  } & Struct;
  readonly isRemoveRmrkData: boolean;
  readonly type: 'Begin' | 'SetData' | 'Finish' | 'InsertEthLogs' | 'InsertEvents' | 'RemoveRmrkData';
}

/** @name PalletEvmMigrationError */
export interface PalletEvmMigrationError extends Enum {
  readonly isAccountNotEmpty: boolean;
  readonly isAccountIsNotMigrating: boolean;
  readonly isBadEvent: boolean;
  readonly type: 'AccountNotEmpty' | 'AccountIsNotMigrating' | 'BadEvent';
}

/** @name PalletEvmMigrationEvent */
export interface PalletEvmMigrationEvent extends Enum {
  readonly isTestEvent: boolean;
  readonly type: 'TestEvent';
}

/** @name PalletForeignAssetsAssetId */
export interface PalletForeignAssetsAssetId extends Enum {
  readonly isForeignAssetId: boolean;
  readonly asForeignAssetId: u32;
  readonly isNativeAssetId: boolean;
  readonly asNativeAssetId: PalletForeignAssetsNativeCurrency;
  readonly type: 'ForeignAssetId' | 'NativeAssetId';
}

/** @name PalletForeignAssetsModuleAssetMetadata */
export interface PalletForeignAssetsModuleAssetMetadata extends Struct {
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimals: u8;
  readonly minimalBalance: u128;
}

/** @name PalletForeignAssetsModuleCall */
export interface PalletForeignAssetsModuleCall extends Enum {
  readonly isRegisterForeignAsset: boolean;
  readonly asRegisterForeignAsset: {
    readonly owner: AccountId32;
    readonly location: StagingXcmVersionedMultiLocation;
    readonly metadata: PalletForeignAssetsModuleAssetMetadata;
  } & Struct;
  readonly isUpdateForeignAsset: boolean;
  readonly asUpdateForeignAsset: {
    readonly foreignAssetId: u32;
    readonly location: StagingXcmVersionedMultiLocation;
    readonly metadata: PalletForeignAssetsModuleAssetMetadata;
  } & Struct;
  readonly type: 'RegisterForeignAsset' | 'UpdateForeignAsset';
}

/** @name PalletForeignAssetsModuleError */
export interface PalletForeignAssetsModuleError extends Enum {
  readonly isBadLocation: boolean;
  readonly isMultiLocationExisted: boolean;
  readonly isAssetIdNotExists: boolean;
  readonly isAssetIdExisted: boolean;
  readonly type: 'BadLocation' | 'MultiLocationExisted' | 'AssetIdNotExists' | 'AssetIdExisted';
}

/** @name PalletForeignAssetsModuleEvent */
export interface PalletForeignAssetsModuleEvent extends Enum {
  readonly isForeignAssetRegistered: boolean;
  readonly asForeignAssetRegistered: {
    readonly assetId: u32;
    readonly assetAddress: StagingXcmV3MultiLocation;
    readonly metadata: PalletForeignAssetsModuleAssetMetadata;
  } & Struct;
  readonly isForeignAssetUpdated: boolean;
  readonly asForeignAssetUpdated: {
    readonly assetId: u32;
    readonly assetAddress: StagingXcmV3MultiLocation;
    readonly metadata: PalletForeignAssetsModuleAssetMetadata;
  } & Struct;
  readonly isAssetRegistered: boolean;
  readonly asAssetRegistered: {
    readonly assetId: PalletForeignAssetsAssetId;
    readonly metadata: PalletForeignAssetsModuleAssetMetadata;
  } & Struct;
  readonly isAssetUpdated: boolean;
  readonly asAssetUpdated: {
    readonly assetId: PalletForeignAssetsAssetId;
    readonly metadata: PalletForeignAssetsModuleAssetMetadata;
  } & Struct;
  readonly type: 'ForeignAssetRegistered' | 'ForeignAssetUpdated' | 'AssetRegistered' | 'AssetUpdated';
}

/** @name PalletForeignAssetsNativeCurrency */
export interface PalletForeignAssetsNativeCurrency extends Enum {
  readonly isHere: boolean;
  readonly isParent: boolean;
  readonly type: 'Here' | 'Parent';
}

/** @name PalletFungibleError */
export interface PalletFungibleError extends Enum {
  readonly isNotFungibleDataUsedToMintFungibleCollectionToken: boolean;
  readonly isFungibleItemsHaveNoId: boolean;
  readonly isFungibleItemsDontHaveData: boolean;
  readonly isFungibleDisallowsNesting: boolean;
  readonly isSettingPropertiesNotAllowed: boolean;
  readonly isSettingAllowanceForAllNotAllowed: boolean;
  readonly isFungibleTokensAreAlwaysValid: boolean;
  readonly type: 'NotFungibleDataUsedToMintFungibleCollectionToken' | 'FungibleItemsHaveNoId' | 'FungibleItemsDontHaveData' | 'FungibleDisallowsNesting' | 'SettingPropertiesNotAllowed' | 'SettingAllowanceForAllNotAllowed' | 'FungibleTokensAreAlwaysValid';
}

/** @name PalletInflationCall */
export interface PalletInflationCall extends Enum {
  readonly isStartInflation: boolean;
  readonly asStartInflation: {
    readonly inflationStartRelayBlock: u32;
  } & Struct;
  readonly type: 'StartInflation';
}

/** @name PalletMaintenanceCall */
export interface PalletMaintenanceCall extends Enum {
  readonly isEnable: boolean;
  readonly isDisable: boolean;
  readonly type: 'Enable' | 'Disable';
}

/** @name PalletMaintenanceError */
export interface PalletMaintenanceError extends Null {}

/** @name PalletMaintenanceEvent */
export interface PalletMaintenanceEvent extends Enum {
  readonly isMaintenanceEnabled: boolean;
  readonly isMaintenanceDisabled: boolean;
  readonly type: 'MaintenanceEnabled' | 'MaintenanceDisabled';
}

/** @name PalletNonfungibleError */
export interface PalletNonfungibleError extends Enum {
  readonly isNotNonfungibleDataUsedToMintFungibleCollectionToken: boolean;
  readonly isNonfungibleItemsHaveNoAmount: boolean;
  readonly isCantBurnNftWithChildren: boolean;
  readonly type: 'NotNonfungibleDataUsedToMintFungibleCollectionToken' | 'NonfungibleItemsHaveNoAmount' | 'CantBurnNftWithChildren';
}

/** @name PalletNonfungibleItemData */
export interface PalletNonfungibleItemData extends Struct {
  readonly owner: PalletEvmAccountBasicCrossAccountIdRepr;
}

/** @name PalletRefungibleError */
export interface PalletRefungibleError extends Enum {
  readonly isNotRefungibleDataUsedToMintFungibleCollectionToken: boolean;
  readonly isWrongRefungiblePieces: boolean;
  readonly isRepartitionWhileNotOwningAllPieces: boolean;
  readonly isRefungibleDisallowsNesting: boolean;
  readonly isSettingPropertiesNotAllowed: boolean;
  readonly type: 'NotRefungibleDataUsedToMintFungibleCollectionToken' | 'WrongRefungiblePieces' | 'RepartitionWhileNotOwningAllPieces' | 'RefungibleDisallowsNesting' | 'SettingPropertiesNotAllowed';
}

/** @name PalletStateTrieMigrationCall */
export interface PalletStateTrieMigrationCall extends Enum {
  readonly isControlAutoMigration: boolean;
  readonly asControlAutoMigration: {
    readonly maybeConfig: Option<PalletStateTrieMigrationMigrationLimits>;
  } & Struct;
  readonly isContinueMigrate: boolean;
  readonly asContinueMigrate: {
    readonly limits: PalletStateTrieMigrationMigrationLimits;
    readonly realSizeUpper: u32;
    readonly witnessTask: PalletStateTrieMigrationMigrationTask;
  } & Struct;
  readonly isMigrateCustomTop: boolean;
  readonly asMigrateCustomTop: {
    readonly keys_: Vec<Bytes>;
    readonly witnessSize: u32;
  } & Struct;
  readonly isMigrateCustomChild: boolean;
  readonly asMigrateCustomChild: {
    readonly root: Bytes;
    readonly childKeys: Vec<Bytes>;
    readonly totalSize: u32;
  } & Struct;
  readonly isSetSignedMaxLimits: boolean;
  readonly asSetSignedMaxLimits: {
    readonly limits: PalletStateTrieMigrationMigrationLimits;
  } & Struct;
  readonly isForceSetProgress: boolean;
  readonly asForceSetProgress: {
    readonly progressTop: PalletStateTrieMigrationProgress;
    readonly progressChild: PalletStateTrieMigrationProgress;
  } & Struct;
  readonly type: 'ControlAutoMigration' | 'ContinueMigrate' | 'MigrateCustomTop' | 'MigrateCustomChild' | 'SetSignedMaxLimits' | 'ForceSetProgress';
}

/** @name PalletStateTrieMigrationError */
export interface PalletStateTrieMigrationError extends Enum {
  readonly isMaxSignedLimits: boolean;
  readonly isKeyTooLong: boolean;
  readonly isNotEnoughFunds: boolean;
  readonly isBadWitness: boolean;
  readonly isSignedMigrationNotAllowed: boolean;
  readonly isBadChildRoot: boolean;
  readonly type: 'MaxSignedLimits' | 'KeyTooLong' | 'NotEnoughFunds' | 'BadWitness' | 'SignedMigrationNotAllowed' | 'BadChildRoot';
}

/** @name PalletStateTrieMigrationEvent */
export interface PalletStateTrieMigrationEvent extends Enum {
  readonly isMigrated: boolean;
  readonly asMigrated: {
    readonly top: u32;
    readonly child: u32;
    readonly compute: PalletStateTrieMigrationMigrationCompute;
  } & Struct;
  readonly isSlashed: boolean;
  readonly asSlashed: {
    readonly who: AccountId32;
    readonly amount: u128;
  } & Struct;
  readonly isAutoMigrationFinished: boolean;
  readonly isHalted: boolean;
  readonly asHalted: {
    readonly error: PalletStateTrieMigrationError;
  } & Struct;
  readonly type: 'Migrated' | 'Slashed' | 'AutoMigrationFinished' | 'Halted';
}

/** @name PalletStateTrieMigrationMigrationCompute */
export interface PalletStateTrieMigrationMigrationCompute extends Enum {
  readonly isSigned: boolean;
  readonly isAuto: boolean;
  readonly type: 'Signed' | 'Auto';
}

/** @name PalletStateTrieMigrationMigrationLimits */
export interface PalletStateTrieMigrationMigrationLimits extends Struct {
  readonly size_: u32;
  readonly item: u32;
}

/** @name PalletStateTrieMigrationMigrationTask */
export interface PalletStateTrieMigrationMigrationTask extends Struct {
  readonly progressTop: PalletStateTrieMigrationProgress;
  readonly progressChild: PalletStateTrieMigrationProgress;
  readonly size_: u32;
  readonly topItems: u32;
  readonly childItems: u32;
}

/** @name PalletStateTrieMigrationProgress */
export interface PalletStateTrieMigrationProgress extends Enum {
  readonly isToStart: boolean;
  readonly isLastKey: boolean;
  readonly asLastKey: Bytes;
  readonly isComplete: boolean;
  readonly type: 'ToStart' | 'LastKey' | 'Complete';
}

/** @name PalletStructureCall */
export interface PalletStructureCall extends Null {}

/** @name PalletStructureError */
export interface PalletStructureError extends Enum {
  readonly isOuroborosDetected: boolean;
  readonly isDepthLimit: boolean;
  readonly isBreadthLimit: boolean;
  readonly isTokenNotFound: boolean;
  readonly isCantNestTokenUnderCollection: boolean;
  readonly type: 'OuroborosDetected' | 'DepthLimit' | 'BreadthLimit' | 'TokenNotFound' | 'CantNestTokenUnderCollection';
}

/** @name PalletStructureEvent */
export interface PalletStructureEvent extends Enum {
  readonly isExecuted: boolean;
  readonly asExecuted: Result<Null, SpRuntimeDispatchError>;
  readonly type: 'Executed';
}

/** @name PalletSudoCall */
export interface PalletSudoCall extends Enum {
  readonly isSudo: boolean;
  readonly asSudo: {
    readonly call: Call;
  } & Struct;
  readonly isSudoUncheckedWeight: boolean;
  readonly asSudoUncheckedWeight: {
    readonly call: Call;
    readonly weight: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isSetKey: boolean;
  readonly asSetKey: {
    readonly new_: MultiAddress;
  } & Struct;
  readonly isSudoAs: boolean;
  readonly asSudoAs: {
    readonly who: MultiAddress;
    readonly call: Call;
  } & Struct;
  readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
}

/** @name PalletSudoError */
export interface PalletSudoError extends Enum {
  readonly isRequireSudo: boolean;
  readonly type: 'RequireSudo';
}

/** @name PalletSudoEvent */
export interface PalletSudoEvent extends Enum {
  readonly isSudid: boolean;
  readonly asSudid: {
    readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
  } & Struct;
  readonly isKeyChanged: boolean;
  readonly asKeyChanged: {
    readonly oldSudoer: Option<AccountId32>;
  } & Struct;
  readonly isSudoAsDone: boolean;
  readonly asSudoAsDone: {
    readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
  } & Struct;
  readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
}

/** @name PalletTemplateTransactionPaymentChargeTransactionPayment */
export interface PalletTemplateTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

/** @name PalletTimestampCall */
export interface PalletTimestampCall extends Enum {
  readonly isSet: boolean;
  readonly asSet: {
    readonly now: Compact<u64>;
  } & Struct;
  readonly type: 'Set';
}

/** @name PalletTransactionPaymentEvent */
export interface PalletTransactionPaymentEvent extends Enum {
  readonly isTransactionFeePaid: boolean;
  readonly asTransactionFeePaid: {
    readonly who: AccountId32;
    readonly actualFee: u128;
    readonly tip: u128;
  } & Struct;
  readonly type: 'TransactionFeePaid';
}

/** @name PalletTransactionPaymentReleases */
export interface PalletTransactionPaymentReleases extends Enum {
  readonly isV1Ancient: boolean;
  readonly isV2: boolean;
  readonly type: 'V1Ancient' | 'V2';
}

/** @name PalletTreasuryCall */
export interface PalletTreasuryCall extends Enum {
  readonly isProposeSpend: boolean;
  readonly asProposeSpend: {
    readonly value: Compact<u128>;
    readonly beneficiary: MultiAddress;
  } & Struct;
  readonly isRejectProposal: boolean;
  readonly asRejectProposal: {
    readonly proposalId: Compact<u32>;
  } & Struct;
  readonly isApproveProposal: boolean;
  readonly asApproveProposal: {
    readonly proposalId: Compact<u32>;
  } & Struct;
  readonly isSpend: boolean;
  readonly asSpend: {
    readonly amount: Compact<u128>;
    readonly beneficiary: MultiAddress;
  } & Struct;
  readonly isRemoveApproval: boolean;
  readonly asRemoveApproval: {
    readonly proposalId: Compact<u32>;
  } & Struct;
  readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
}

/** @name PalletTreasuryError */
export interface PalletTreasuryError extends Enum {
  readonly isInsufficientProposersBalance: boolean;
  readonly isInvalidIndex: boolean;
  readonly isTooManyApprovals: boolean;
  readonly isInsufficientPermission: boolean;
  readonly isProposalNotApproved: boolean;
  readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
}

/** @name PalletTreasuryEvent */
export interface PalletTreasuryEvent extends Enum {
  readonly isProposed: boolean;
  readonly asProposed: {
    readonly proposalIndex: u32;
  } & Struct;
  readonly isSpending: boolean;
  readonly asSpending: {
    readonly budgetRemaining: u128;
  } & Struct;
  readonly isAwarded: boolean;
  readonly asAwarded: {
    readonly proposalIndex: u32;
    readonly award: u128;
    readonly account: AccountId32;
  } & Struct;
  readonly isRejected: boolean;
  readonly asRejected: {
    readonly proposalIndex: u32;
    readonly slashed: u128;
  } & Struct;
  readonly isBurnt: boolean;
  readonly asBurnt: {
    readonly burntFunds: u128;
  } & Struct;
  readonly isRollover: boolean;
  readonly asRollover: {
    readonly rolloverBalance: u128;
  } & Struct;
  readonly isDeposit: boolean;
  readonly asDeposit: {
    readonly value: u128;
  } & Struct;
  readonly isSpendApproved: boolean;
  readonly asSpendApproved: {
    readonly proposalIndex: u32;
    readonly amount: u128;
    readonly beneficiary: AccountId32;
  } & Struct;
  readonly isUpdatedInactive: boolean;
  readonly asUpdatedInactive: {
    readonly reactivated: u128;
    readonly deactivated: u128;
  } & Struct;
  readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
}

/** @name PalletTreasuryProposal */
export interface PalletTreasuryProposal extends Struct {
  readonly proposer: AccountId32;
  readonly value: u128;
  readonly beneficiary: AccountId32;
  readonly bond: u128;
}

/** @name PalletUniqueCall */
export interface PalletUniqueCall extends Enum {
  readonly isCreateCollection: boolean;
  readonly asCreateCollection: {
    readonly collectionName: Vec<u16>;
    readonly collectionDescription: Vec<u16>;
    readonly tokenPrefix: Bytes;
    readonly mode: UpDataStructsCollectionMode;
  } & Struct;
  readonly isCreateCollectionEx: boolean;
  readonly asCreateCollectionEx: {
    readonly data: UpDataStructsCreateCollectionData;
  } & Struct;
  readonly isDestroyCollection: boolean;
  readonly asDestroyCollection: {
    readonly collectionId: u32;
  } & Struct;
  readonly isAddToAllowList: boolean;
  readonly asAddToAllowList: {
    readonly collectionId: u32;
    readonly address: PalletEvmAccountBasicCrossAccountIdRepr;
  } & Struct;
  readonly isRemoveFromAllowList: boolean;
  readonly asRemoveFromAllowList: {
    readonly collectionId: u32;
    readonly address: PalletEvmAccountBasicCrossAccountIdRepr;
  } & Struct;
  readonly isChangeCollectionOwner: boolean;
  readonly asChangeCollectionOwner: {
    readonly collectionId: u32;
    readonly newOwner: AccountId32;
  } & Struct;
  readonly isAddCollectionAdmin: boolean;
  readonly asAddCollectionAdmin: {
    readonly collectionId: u32;
    readonly newAdminId: PalletEvmAccountBasicCrossAccountIdRepr;
  } & Struct;
  readonly isRemoveCollectionAdmin: boolean;
  readonly asRemoveCollectionAdmin: {
    readonly collectionId: u32;
    readonly accountId: PalletEvmAccountBasicCrossAccountIdRepr;
  } & Struct;
  readonly isSetCollectionSponsor: boolean;
  readonly asSetCollectionSponsor: {
    readonly collectionId: u32;
    readonly newSponsor: AccountId32;
  } & Struct;
  readonly isConfirmSponsorship: boolean;
  readonly asConfirmSponsorship: {
    readonly collectionId: u32;
  } & Struct;
  readonly isRemoveCollectionSponsor: boolean;
  readonly asRemoveCollectionSponsor: {
    readonly collectionId: u32;
  } & Struct;
  readonly isCreateItem: boolean;
  readonly asCreateItem: {
    readonly collectionId: u32;
    readonly owner: PalletEvmAccountBasicCrossAccountIdRepr;
    readonly data: UpDataStructsCreateItemData;
  } & Struct;
  readonly isCreateMultipleItems: boolean;
  readonly asCreateMultipleItems: {
    readonly collectionId: u32;
    readonly owner: PalletEvmAccountBasicCrossAccountIdRepr;
    readonly itemsData: Vec<UpDataStructsCreateItemData>;
  } & Struct;
  readonly isSetCollectionProperties: boolean;
  readonly asSetCollectionProperties: {
    readonly collectionId: u32;
    readonly properties: Vec<UpDataStructsProperty>;
  } & Struct;
  readonly isDeleteCollectionProperties: boolean;
  readonly asDeleteCollectionProperties: {
    readonly collectionId: u32;
    readonly propertyKeys: Vec<Bytes>;
  } & Struct;
  readonly isSetTokenProperties: boolean;
  readonly asSetTokenProperties: {
    readonly collectionId: u32;
    readonly tokenId: u32;
    readonly properties: Vec<UpDataStructsProperty>;
  } & Struct;
  readonly isDeleteTokenProperties: boolean;
  readonly asDeleteTokenProperties: {
    readonly collectionId: u32;
    readonly tokenId: u32;
    readonly propertyKeys: Vec<Bytes>;
  } & Struct;
  readonly isSetTokenPropertyPermissions: boolean;
  readonly asSetTokenPropertyPermissions: {
    readonly collectionId: u32;
    readonly propertyPermissions: Vec<UpDataStructsPropertyKeyPermission>;
  } & Struct;
  readonly isCreateMultipleItemsEx: boolean;
  readonly asCreateMultipleItemsEx: {
    readonly collectionId: u32;
    readonly data: UpDataStructsCreateItemExData;
  } & Struct;
  readonly isSetTransfersEnabledFlag: boolean;
  readonly asSetTransfersEnabledFlag: {
    readonly collectionId: u32;
    readonly value: bool;
  } & Struct;
  readonly isBurnItem: boolean;
  readonly asBurnItem: {
    readonly collectionId: u32;
    readonly itemId: u32;
    readonly value: u128;
  } & Struct;
  readonly isBurnFrom: boolean;
  readonly asBurnFrom: {
    readonly collectionId: u32;
    readonly from: PalletEvmAccountBasicCrossAccountIdRepr;
    readonly itemId: u32;
    readonly value: u128;
  } & Struct;
  readonly isTransfer: boolean;
  readonly asTransfer: {
    readonly recipient: PalletEvmAccountBasicCrossAccountIdRepr;
    readonly collectionId: u32;
    readonly itemId: u32;
    readonly value: u128;
  } & Struct;
  readonly isApprove: boolean;
  readonly asApprove: {
    readonly spender: PalletEvmAccountBasicCrossAccountIdRepr;
    readonly collectionId: u32;
    readonly itemId: u32;
    readonly amount: u128;
  } & Struct;
  readonly isApproveFrom: boolean;
  readonly asApproveFrom: {
    readonly from: PalletEvmAccountBasicCrossAccountIdRepr;
    readonly to: PalletEvmAccountBasicCrossAccountIdRepr;
    readonly collectionId: u32;
    readonly itemId: u32;
    readonly amount: u128;
  } & Struct;
  readonly isTransferFrom: boolean;
  readonly asTransferFrom: {
    readonly from: PalletEvmAccountBasicCrossAccountIdRepr;
    readonly recipient: PalletEvmAccountBasicCrossAccountIdRepr;
    readonly collectionId: u32;
    readonly itemId: u32;
    readonly value: u128;
  } & Struct;
  readonly isSetCollectionLimits: boolean;
  readonly asSetCollectionLimits: {
    readonly collectionId: u32;
    readonly newLimit: UpDataStructsCollectionLimits;
  } & Struct;
  readonly isSetCollectionPermissions: boolean;
  readonly asSetCollectionPermissions: {
    readonly collectionId: u32;
    readonly newPermission: UpDataStructsCollectionPermissions;
  } & Struct;
  readonly isRepartition: boolean;
  readonly asRepartition: {
    readonly collectionId: u32;
    readonly tokenId: u32;
    readonly amount: u128;
  } & Struct;
  readonly isSetAllowanceForAll: boolean;
  readonly asSetAllowanceForAll: {
    readonly collectionId: u32;
    readonly operator: PalletEvmAccountBasicCrossAccountIdRepr;
    readonly approve: bool;
  } & Struct;
  readonly isForceRepairCollection: boolean;
  readonly asForceRepairCollection: {
    readonly collectionId: u32;
  } & Struct;
  readonly isForceRepairItem: boolean;
  readonly asForceRepairItem: {
    readonly collectionId: u32;
    readonly itemId: u32;
  } & Struct;
  readonly type: 'CreateCollection' | 'CreateCollectionEx' | 'DestroyCollection' | 'AddToAllowList' | 'RemoveFromAllowList' | 'ChangeCollectionOwner' | 'AddCollectionAdmin' | 'RemoveCollectionAdmin' | 'SetCollectionSponsor' | 'ConfirmSponsorship' | 'RemoveCollectionSponsor' | 'CreateItem' | 'CreateMultipleItems' | 'SetCollectionProperties' | 'DeleteCollectionProperties' | 'SetTokenProperties' | 'DeleteTokenProperties' | 'SetTokenPropertyPermissions' | 'CreateMultipleItemsEx' | 'SetTransfersEnabledFlag' | 'BurnItem' | 'BurnFrom' | 'Transfer' | 'Approve' | 'ApproveFrom' | 'TransferFrom' | 'SetCollectionLimits' | 'SetCollectionPermissions' | 'Repartition' | 'SetAllowanceForAll' | 'ForceRepairCollection' | 'ForceRepairItem';
}

/** @name PalletUniqueError */
export interface PalletUniqueError extends Enum {
  readonly isCollectionDecimalPointLimitExceeded: boolean;
  readonly isEmptyArgument: boolean;
  readonly isRepartitionCalledOnNonRefungibleCollection: boolean;
  readonly type: 'CollectionDecimalPointLimitExceeded' | 'EmptyArgument' | 'RepartitionCalledOnNonRefungibleCollection';
}

/** @name PalletUtilityCall */
export interface PalletUtilityCall extends Enum {
  readonly isBatch: boolean;
  readonly asBatch: {
    readonly calls: Vec<Call>;
  } & Struct;
  readonly isAsDerivative: boolean;
  readonly asAsDerivative: {
    readonly index: u16;
    readonly call: Call;
  } & Struct;
  readonly isBatchAll: boolean;
  readonly asBatchAll: {
    readonly calls: Vec<Call>;
  } & Struct;
  readonly isDispatchAs: boolean;
  readonly asDispatchAs: {
    readonly asOrigin: UniqueRuntimeOriginCaller;
    readonly call: Call;
  } & Struct;
  readonly isForceBatch: boolean;
  readonly asForceBatch: {
    readonly calls: Vec<Call>;
  } & Struct;
  readonly isWithWeight: boolean;
  readonly asWithWeight: {
    readonly call: Call;
    readonly weight: SpWeightsWeightV2Weight;
  } & Struct;
  readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
}

/** @name PalletUtilityError */
export interface PalletUtilityError extends Enum {
  readonly isTooManyCalls: boolean;
  readonly type: 'TooManyCalls';
}

/** @name PalletUtilityEvent */
export interface PalletUtilityEvent extends Enum {
  readonly isBatchInterrupted: boolean;
  readonly asBatchInterrupted: {
    readonly index: u32;
    readonly error: SpRuntimeDispatchError;
  } & Struct;
  readonly isBatchCompleted: boolean;
  readonly isBatchCompletedWithErrors: boolean;
  readonly isItemCompleted: boolean;
  readonly isItemFailed: boolean;
  readonly asItemFailed: {
    readonly error: SpRuntimeDispatchError;
  } & Struct;
  readonly isDispatchedAs: boolean;
  readonly asDispatchedAs: {
    readonly result: Result<Null, SpRuntimeDispatchError>;
  } & Struct;
  readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
}

/** @name PalletXcmCall */
export interface PalletXcmCall extends Enum {
  readonly isSend: boolean;
  readonly asSend: {
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly message: StagingXcmVersionedXcm;
  } & Struct;
  readonly isTeleportAssets: boolean;
  readonly asTeleportAssets: {
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly beneficiary: StagingXcmVersionedMultiLocation;
    readonly assets: StagingXcmVersionedMultiAssets;
    readonly feeAssetItem: u32;
  } & Struct;
  readonly isReserveTransferAssets: boolean;
  readonly asReserveTransferAssets: {
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly beneficiary: StagingXcmVersionedMultiLocation;
    readonly assets: StagingXcmVersionedMultiAssets;
    readonly feeAssetItem: u32;
  } & Struct;
  readonly isExecute: boolean;
  readonly asExecute: {
    readonly message: StagingXcmVersionedXcm;
    readonly maxWeight: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isForceXcmVersion: boolean;
  readonly asForceXcmVersion: {
    readonly location: StagingXcmV3MultiLocation;
    readonly version: u32;
  } & Struct;
  readonly isForceDefaultXcmVersion: boolean;
  readonly asForceDefaultXcmVersion: {
    readonly maybeXcmVersion: Option<u32>;
  } & Struct;
  readonly isForceSubscribeVersionNotify: boolean;
  readonly asForceSubscribeVersionNotify: {
    readonly location: StagingXcmVersionedMultiLocation;
  } & Struct;
  readonly isForceUnsubscribeVersionNotify: boolean;
  readonly asForceUnsubscribeVersionNotify: {
    readonly location: StagingXcmVersionedMultiLocation;
  } & Struct;
  readonly isLimitedReserveTransferAssets: boolean;
  readonly asLimitedReserveTransferAssets: {
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly beneficiary: StagingXcmVersionedMultiLocation;
    readonly assets: StagingXcmVersionedMultiAssets;
    readonly feeAssetItem: u32;
    readonly weightLimit: StagingXcmV3WeightLimit;
  } & Struct;
  readonly isLimitedTeleportAssets: boolean;
  readonly asLimitedTeleportAssets: {
    readonly dest: StagingXcmVersionedMultiLocation;
    readonly beneficiary: StagingXcmVersionedMultiLocation;
    readonly assets: StagingXcmVersionedMultiAssets;
    readonly feeAssetItem: u32;
    readonly weightLimit: StagingXcmV3WeightLimit;
  } & Struct;
  readonly isForceSuspension: boolean;
  readonly asForceSuspension: {
    readonly suspended: bool;
  } & Struct;
  readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension';
}

/** @name PalletXcmError */
export interface PalletXcmError extends Enum {
  readonly isUnreachable: boolean;
  readonly isSendFailure: boolean;
  readonly isFiltered: boolean;
  readonly isUnweighableMessage: boolean;
  readonly isDestinationNotInvertible: boolean;
  readonly isEmpty: boolean;
  readonly isCannotReanchor: boolean;
  readonly isTooManyAssets: boolean;
  readonly isInvalidOrigin: boolean;
  readonly isBadVersion: boolean;
  readonly isBadLocation: boolean;
  readonly isNoSubscription: boolean;
  readonly isAlreadySubscribed: boolean;
  readonly isInvalidAsset: boolean;
  readonly isLowBalance: boolean;
  readonly isTooManyLocks: boolean;
  readonly isAccountNotSovereign: boolean;
  readonly isFeesNotMet: boolean;
  readonly isLockNotFound: boolean;
  readonly isInUse: boolean;
  readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
}

/** @name PalletXcmEvent */
export interface PalletXcmEvent extends Enum {
  readonly isAttempted: boolean;
  readonly asAttempted: {
    readonly outcome: StagingXcmV3TraitsOutcome;
  } & Struct;
  readonly isSent: boolean;
  readonly asSent: {
    readonly origin: StagingXcmV3MultiLocation;
    readonly destination: StagingXcmV3MultiLocation;
    readonly message: StagingXcmV3Xcm;
    readonly messageId: U8aFixed;
  } & Struct;
  readonly isUnexpectedResponse: boolean;
  readonly asUnexpectedResponse: {
    readonly origin: StagingXcmV3MultiLocation;
    readonly queryId: u64;
  } & Struct;
  readonly isResponseReady: boolean;
  readonly asResponseReady: {
    readonly queryId: u64;
    readonly response: StagingXcmV3Response;
  } & Struct;
  readonly isNotified: boolean;
  readonly asNotified: {
    readonly queryId: u64;
    readonly palletIndex: u8;
    readonly callIndex: u8;
  } & Struct;
  readonly isNotifyOverweight: boolean;
  readonly asNotifyOverweight: {
    readonly queryId: u64;
    readonly palletIndex: u8;
    readonly callIndex: u8;
    readonly actualWeight: SpWeightsWeightV2Weight;
    readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isNotifyDispatchError: boolean;
  readonly asNotifyDispatchError: {
    readonly queryId: u64;
    readonly palletIndex: u8;
    readonly callIndex: u8;
  } & Struct;
  readonly isNotifyDecodeFailed: boolean;
  readonly asNotifyDecodeFailed: {
    readonly queryId: u64;
    readonly palletIndex: u8;
    readonly callIndex: u8;
  } & Struct;
  readonly isInvalidResponder: boolean;
  readonly asInvalidResponder: {
    readonly origin: StagingXcmV3MultiLocation;
    readonly queryId: u64;
    readonly expectedLocation: Option<StagingXcmV3MultiLocation>;
  } & Struct;
  readonly isInvalidResponderVersion: boolean;
  readonly asInvalidResponderVersion: {
    readonly origin: StagingXcmV3MultiLocation;
    readonly queryId: u64;
  } & Struct;
  readonly isResponseTaken: boolean;
  readonly asResponseTaken: {
    readonly queryId: u64;
  } & Struct;
  readonly isAssetsTrapped: boolean;
  readonly asAssetsTrapped: {
    readonly hash_: H256;
    readonly origin: StagingXcmV3MultiLocation;
    readonly assets: StagingXcmVersionedMultiAssets;
  } & Struct;
  readonly isVersionChangeNotified: boolean;
  readonly asVersionChangeNotified: {
    readonly destination: StagingXcmV3MultiLocation;
    readonly result: u32;
    readonly cost: StagingXcmV3MultiassetMultiAssets;
    readonly messageId: U8aFixed;
  } & Struct;
  readonly isSupportedVersionChanged: boolean;
  readonly asSupportedVersionChanged: {
    readonly location: StagingXcmV3MultiLocation;
    readonly version: u32;
  } & Struct;
  readonly isNotifyTargetSendFail: boolean;
  readonly asNotifyTargetSendFail: {
    readonly location: StagingXcmV3MultiLocation;
    readonly queryId: u64;
    readonly error: StagingXcmV3TraitsError;
  } & Struct;
  readonly isNotifyTargetMigrationFail: boolean;
  readonly asNotifyTargetMigrationFail: {
    readonly location: StagingXcmVersionedMultiLocation;
    readonly queryId: u64;
  } & Struct;
  readonly isInvalidQuerierVersion: boolean;
  readonly asInvalidQuerierVersion: {
    readonly origin: StagingXcmV3MultiLocation;
    readonly queryId: u64;
  } & Struct;
  readonly isInvalidQuerier: boolean;
  readonly asInvalidQuerier: {
    readonly origin: StagingXcmV3MultiLocation;
    readonly queryId: u64;
    readonly expectedQuerier: StagingXcmV3MultiLocation;
    readonly maybeActualQuerier: Option<StagingXcmV3MultiLocation>;
  } & Struct;
  readonly isVersionNotifyStarted: boolean;
  readonly asVersionNotifyStarted: {
    readonly destination: StagingXcmV3MultiLocation;
    readonly cost: StagingXcmV3MultiassetMultiAssets;
    readonly messageId: U8aFixed;
  } & Struct;
  readonly isVersionNotifyRequested: boolean;
  readonly asVersionNotifyRequested: {
    readonly destination: StagingXcmV3MultiLocation;
    readonly cost: StagingXcmV3MultiassetMultiAssets;
    readonly messageId: U8aFixed;
  } & Struct;
  readonly isVersionNotifyUnrequested: boolean;
  readonly asVersionNotifyUnrequested: {
    readonly destination: StagingXcmV3MultiLocation;
    readonly cost: StagingXcmV3MultiassetMultiAssets;
    readonly messageId: U8aFixed;
  } & Struct;
  readonly isFeesPaid: boolean;
  readonly asFeesPaid: {
    readonly paying: StagingXcmV3MultiLocation;
    readonly fees: StagingXcmV3MultiassetMultiAssets;
  } & Struct;
  readonly isAssetsClaimed: boolean;
  readonly asAssetsClaimed: {
    readonly hash_: H256;
    readonly origin: StagingXcmV3MultiLocation;
    readonly assets: StagingXcmVersionedMultiAssets;
  } & Struct;
  readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
}

/** @name PalletXcmOrigin */
export interface PalletXcmOrigin extends Enum {
  readonly isXcm: boolean;
  readonly asXcm: StagingXcmV3MultiLocation;
  readonly isResponse: boolean;
  readonly asResponse: StagingXcmV3MultiLocation;
  readonly type: 'Xcm' | 'Response';
}

/** @name PalletXcmQueryStatus */
export interface PalletXcmQueryStatus extends Enum {
  readonly isPending: boolean;
  readonly asPending: {
    readonly responder: StagingXcmVersionedMultiLocation;
    readonly maybeMatchQuerier: Option<StagingXcmVersionedMultiLocation>;
    readonly maybeNotify: Option<ITuple<[u8, u8]>>;
    readonly timeout: u32;
  } & Struct;
  readonly isVersionNotifier: boolean;
  readonly asVersionNotifier: {
    readonly origin: StagingXcmVersionedMultiLocation;
    readonly isActive: bool;
  } & Struct;
  readonly isReady: boolean;
  readonly asReady: {
    readonly response: StagingXcmVersionedResponse;
    readonly at: u32;
  } & Struct;
  readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
}

/** @name PalletXcmRemoteLockedFungibleRecord */
export interface PalletXcmRemoteLockedFungibleRecord extends Struct {
  readonly amount: u128;
  readonly owner: StagingXcmVersionedMultiLocation;
  readonly locker: StagingXcmVersionedMultiLocation;
  readonly consumers: Vec<ITuple<[Null, u128]>>;
}

/** @name PalletXcmVersionMigrationStage */
export interface PalletXcmVersionMigrationStage extends Enum {
  readonly isMigrateSupportedVersion: boolean;
  readonly isMigrateVersionNotifiers: boolean;
  readonly isNotifyCurrentTargets: boolean;
  readonly asNotifyCurrentTargets: Option<Bytes>;
  readonly isMigrateAndNotifyOldTargets: boolean;
  readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
}

/** @name ParachainInfoCall */
export interface ParachainInfoCall extends Null {}

/** @name PhantomTypeUpDataStructs */
export interface PhantomTypeUpDataStructs extends Vec<ITuple<[UpDataStructsTokenData, UpDataStructsRpcCollection, UpPovEstimateRpcPovInfo]>> {}

/** @name PolkadotCorePrimitivesInboundDownwardMessage */
export interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
  readonly sentAt: u32;
  readonly msg: Bytes;
}

/** @name PolkadotCorePrimitivesInboundHrmpMessage */
export interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
  readonly sentAt: u32;
  readonly data: Bytes;
}

/** @name PolkadotCorePrimitivesOutboundHrmpMessage */
export interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
  readonly recipient: u32;
  readonly data: Bytes;
}

/** @name PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat */
export interface PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat extends Enum {
  readonly isConcatenatedVersionedXcm: boolean;
  readonly isConcatenatedEncodedBlob: boolean;
  readonly isSignals: boolean;
  readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
}

/** @name PolkadotPrimitivesV5AbridgedHostConfiguration */
export interface PolkadotPrimitivesV5AbridgedHostConfiguration extends Struct {
  readonly maxCodeSize: u32;
  readonly maxHeadDataSize: u32;
  readonly maxUpwardQueueCount: u32;
  readonly maxUpwardQueueSize: u32;
  readonly maxUpwardMessageSize: u32;
  readonly maxUpwardMessageNumPerCandidate: u32;
  readonly hrmpMaxMessageNumPerCandidate: u32;
  readonly validationUpgradeCooldown: u32;
  readonly validationUpgradeDelay: u32;
  readonly asyncBackingParams: PolkadotPrimitivesVstagingAsyncBackingParams;
}

/** @name PolkadotPrimitivesV5AbridgedHrmpChannel */
export interface PolkadotPrimitivesV5AbridgedHrmpChannel extends Struct {
  readonly maxCapacity: u32;
  readonly maxTotalSize: u32;
  readonly maxMessageSize: u32;
  readonly msgCount: u32;
  readonly totalSize: u32;
  readonly mqcHead: Option<H256>;
}

/** @name PolkadotPrimitivesV5PersistedValidationData */
export interface PolkadotPrimitivesV5PersistedValidationData extends Struct {
  readonly parentHead: Bytes;
  readonly relayParentNumber: u32;
  readonly relayParentStorageRoot: H256;
  readonly maxPovSize: u32;
}

/** @name PolkadotPrimitivesV5UpgradeGoAhead */
export interface PolkadotPrimitivesV5UpgradeGoAhead extends Enum {
  readonly isAbort: boolean;
  readonly isGoAhead: boolean;
  readonly type: 'Abort' | 'GoAhead';
}

/** @name PolkadotPrimitivesV5UpgradeRestriction */
export interface PolkadotPrimitivesV5UpgradeRestriction extends Enum {
  readonly isPresent: boolean;
  readonly type: 'Present';
}

/** @name PolkadotPrimitivesVstagingAsyncBackingParams */
export interface PolkadotPrimitivesVstagingAsyncBackingParams extends Struct {
  readonly maxCandidateDepth: u32;
  readonly allowedAncestryLen: u32;
}

/** @name SpArithmeticArithmeticError */
export interface SpArithmeticArithmeticError extends Enum {
  readonly isUnderflow: boolean;
  readonly isOverflow: boolean;
  readonly isDivisionByZero: boolean;
  readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
}

/** @name SpConsensusAuraSr25519AppSr25519Public */
export interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

/** @name SpCoreEcdsaSignature */
export interface SpCoreEcdsaSignature extends U8aFixed {}

/** @name SpCoreEd25519Signature */
export interface SpCoreEd25519Signature extends U8aFixed {}

/** @name SpCoreSr25519Public */
export interface SpCoreSr25519Public extends U8aFixed {}

/** @name SpCoreSr25519Signature */
export interface SpCoreSr25519Signature extends U8aFixed {}

/** @name SpCoreVoid */
export interface SpCoreVoid extends Null {}

/** @name SpRuntimeDigest */
export interface SpRuntimeDigest extends Struct {
  readonly logs: Vec<SpRuntimeDigestDigestItem>;
}

/** @name SpRuntimeDigestDigestItem */
export interface SpRuntimeDigestDigestItem extends Enum {
  readonly isOther: boolean;
  readonly asOther: Bytes;
  readonly isConsensus: boolean;
  readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
  readonly isSeal: boolean;
  readonly asSeal: ITuple<[U8aFixed, Bytes]>;
  readonly isPreRuntime: boolean;
  readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
  readonly isRuntimeEnvironmentUpdated: boolean;
  readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
}

/** @name SpRuntimeDispatchError */
export interface SpRuntimeDispatchError extends Enum {
  readonly isOther: boolean;
  readonly isCannotLookup: boolean;
  readonly isBadOrigin: boolean;
  readonly isModule: boolean;
  readonly asModule: SpRuntimeModuleError;
  readonly isConsumerRemaining: boolean;
  readonly isNoProviders: boolean;
  readonly isTooManyConsumers: boolean;
  readonly isToken: boolean;
  readonly asToken: SpRuntimeTokenError;
  readonly isArithmetic: boolean;
  readonly asArithmetic: SpArithmeticArithmeticError;
  readonly isTransactional: boolean;
  readonly asTransactional: SpRuntimeTransactionalError;
  readonly isExhausted: boolean;
  readonly isCorruption: boolean;
  readonly isUnavailable: boolean;
  readonly isRootNotAllowed: boolean;
  readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
}

/** @name SpRuntimeModuleError */
export interface SpRuntimeModuleError extends Struct {
  readonly index: u8;
  readonly error: U8aFixed;
}

/** @name SpRuntimeMultiSignature */
export interface SpRuntimeMultiSignature extends Enum {
  readonly isEd25519: boolean;
  readonly asEd25519: SpCoreEd25519Signature;
  readonly isSr25519: boolean;
  readonly asSr25519: SpCoreSr25519Signature;
  readonly isEcdsa: boolean;
  readonly asEcdsa: SpCoreEcdsaSignature;
  readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
}

/** @name SpRuntimeTokenError */
export interface SpRuntimeTokenError extends Enum {
  readonly isFundsUnavailable: boolean;
  readonly isOnlyProvider: boolean;
  readonly isBelowMinimum: boolean;
  readonly isCannotCreate: boolean;
  readonly isUnknownAsset: boolean;
  readonly isFrozen: boolean;
  readonly isUnsupported: boolean;
  readonly isCannotCreateHold: boolean;
  readonly isNotExpendable: boolean;
  readonly isBlocked: boolean;
  readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
}

/** @name SpRuntimeTransactionalError */
export interface SpRuntimeTransactionalError extends Enum {
  readonly isLimitReached: boolean;
  readonly isNoLayer: boolean;
  readonly type: 'LimitReached' | 'NoLayer';
}

/** @name SpRuntimeTransactionValidityInvalidTransaction */
export interface SpRuntimeTransactionValidityInvalidTransaction extends Enum {
  readonly isCall: boolean;
  readonly isPayment: boolean;
  readonly isFuture: boolean;
  readonly isStale: boolean;
  readonly isBadProof: boolean;
  readonly isAncientBirthBlock: boolean;
  readonly isExhaustsResources: boolean;
  readonly isCustom: boolean;
  readonly asCustom: u8;
  readonly isBadMandatory: boolean;
  readonly isMandatoryValidation: boolean;
  readonly isBadSigner: boolean;
  readonly type: 'Call' | 'Payment' | 'Future' | 'Stale' | 'BadProof' | 'AncientBirthBlock' | 'ExhaustsResources' | 'Custom' | 'BadMandatory' | 'MandatoryValidation' | 'BadSigner';
}

/** @name SpRuntimeTransactionValidityTransactionValidityError */
export interface SpRuntimeTransactionValidityTransactionValidityError extends Enum {
  readonly isInvalid: boolean;
  readonly asInvalid: SpRuntimeTransactionValidityInvalidTransaction;
  readonly isUnknown: boolean;
  readonly asUnknown: SpRuntimeTransactionValidityUnknownTransaction;
  readonly type: 'Invalid' | 'Unknown';
}

/** @name SpRuntimeTransactionValidityUnknownTransaction */
export interface SpRuntimeTransactionValidityUnknownTransaction extends Enum {
  readonly isCannotLookup: boolean;
  readonly isNoUnsignedValidator: boolean;
  readonly isCustom: boolean;
  readonly asCustom: u8;
  readonly type: 'CannotLookup' | 'NoUnsignedValidator' | 'Custom';
}

/** @name SpTrieStorageProof */
export interface SpTrieStorageProof extends Struct {
  readonly trieNodes: BTreeSet<Bytes>;
}

/** @name SpVersionRuntimeVersion */
export interface SpVersionRuntimeVersion extends Struct {
  readonly specName: Text;
  readonly implName: Text;
  readonly authoringVersion: u32;
  readonly specVersion: u32;
  readonly implVersion: u32;
  readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
  readonly transactionVersion: u32;
  readonly stateVersion: u8;
}

/** @name SpWeightsRuntimeDbWeight */
export interface SpWeightsRuntimeDbWeight extends Struct {
  readonly read: u64;
  readonly write: u64;
}

/** @name SpWeightsWeightV2Weight */
export interface SpWeightsWeightV2Weight extends Struct {
  readonly refTime: Compact<u64>;
  readonly proofSize: Compact<u64>;
}

/** @name StagingXcmDoubleEncoded */
export interface StagingXcmDoubleEncoded extends Struct {
  readonly encoded: Bytes;
}

/** @name StagingXcmV2BodyId */
export interface StagingXcmV2BodyId extends Enum {
  readonly isUnit: boolean;
  readonly isNamed: boolean;
  readonly asNamed: Bytes;
  readonly isIndex: boolean;
  readonly asIndex: Compact<u32>;
  readonly isExecutive: boolean;
  readonly isTechnical: boolean;
  readonly isLegislative: boolean;
  readonly isJudicial: boolean;
  readonly isDefense: boolean;
  readonly isAdministration: boolean;
  readonly isTreasury: boolean;
  readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
}

/** @name StagingXcmV2BodyPart */
export interface StagingXcmV2BodyPart extends Enum {
  readonly isVoice: boolean;
  readonly isMembers: boolean;
  readonly asMembers: {
    readonly count: Compact<u32>;
  } & Struct;
  readonly isFraction: boolean;
  readonly asFraction: {
    readonly nom: Compact<u32>;
    readonly denom: Compact<u32>;
  } & Struct;
  readonly isAtLeastProportion: boolean;
  readonly asAtLeastProportion: {
    readonly nom: Compact<u32>;
    readonly denom: Compact<u32>;
  } & Struct;
  readonly isMoreThanProportion: boolean;
  readonly asMoreThanProportion: {
    readonly nom: Compact<u32>;
    readonly denom: Compact<u32>;
  } & Struct;
  readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
}

/** @name StagingXcmV2Instruction */
export interface StagingXcmV2Instruction extends Enum {
  readonly isWithdrawAsset: boolean;
  readonly asWithdrawAsset: StagingXcmV2MultiassetMultiAssets;
  readonly isReserveAssetDeposited: boolean;
  readonly asReserveAssetDeposited: StagingXcmV2MultiassetMultiAssets;
  readonly isReceiveTeleportedAsset: boolean;
  readonly asReceiveTeleportedAsset: StagingXcmV2MultiassetMultiAssets;
  readonly isQueryResponse: boolean;
  readonly asQueryResponse: {
    readonly queryId: Compact<u64>;
    readonly response: StagingXcmV2Response;
    readonly maxWeight: Compact<u64>;
  } & Struct;
  readonly isTransferAsset: boolean;
  readonly asTransferAsset: {
    readonly assets: StagingXcmV2MultiassetMultiAssets;
    readonly beneficiary: StagingXcmV2MultiLocation;
  } & Struct;
  readonly isTransferReserveAsset: boolean;
  readonly asTransferReserveAsset: {
    readonly assets: StagingXcmV2MultiassetMultiAssets;
    readonly dest: StagingXcmV2MultiLocation;
    readonly xcm: StagingXcmV2Xcm;
  } & Struct;
  readonly isTransact: boolean;
  readonly asTransact: {
    readonly originType: StagingXcmV2OriginKind;
    readonly requireWeightAtMost: Compact<u64>;
    readonly call: StagingXcmDoubleEncoded;
  } & Struct;
  readonly isHrmpNewChannelOpenRequest: boolean;
  readonly asHrmpNewChannelOpenRequest: {
    readonly sender: Compact<u32>;
    readonly maxMessageSize: Compact<u32>;
    readonly maxCapacity: Compact<u32>;
  } & Struct;
  readonly isHrmpChannelAccepted: boolean;
  readonly asHrmpChannelAccepted: {
    readonly recipient: Compact<u32>;
  } & Struct;
  readonly isHrmpChannelClosing: boolean;
  readonly asHrmpChannelClosing: {
    readonly initiator: Compact<u32>;
    readonly sender: Compact<u32>;
    readonly recipient: Compact<u32>;
  } & Struct;
  readonly isClearOrigin: boolean;
  readonly isDescendOrigin: boolean;
  readonly asDescendOrigin: StagingXcmV2MultilocationJunctions;
  readonly isReportError: boolean;
  readonly asReportError: {
    readonly queryId: Compact<u64>;
    readonly dest: StagingXcmV2MultiLocation;
    readonly maxResponseWeight: Compact<u64>;
  } & Struct;
  readonly isDepositAsset: boolean;
  readonly asDepositAsset: {
    readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
    readonly maxAssets: Compact<u32>;
    readonly beneficiary: StagingXcmV2MultiLocation;
  } & Struct;
  readonly isDepositReserveAsset: boolean;
  readonly asDepositReserveAsset: {
    readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
    readonly maxAssets: Compact<u32>;
    readonly dest: StagingXcmV2MultiLocation;
    readonly xcm: StagingXcmV2Xcm;
  } & Struct;
  readonly isExchangeAsset: boolean;
  readonly asExchangeAsset: {
    readonly give: StagingXcmV2MultiassetMultiAssetFilter;
    readonly receive: StagingXcmV2MultiassetMultiAssets;
  } & Struct;
  readonly isInitiateReserveWithdraw: boolean;
  readonly asInitiateReserveWithdraw: {
    readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
    readonly reserve: StagingXcmV2MultiLocation;
    readonly xcm: StagingXcmV2Xcm;
  } & Struct;
  readonly isInitiateTeleport: boolean;
  readonly asInitiateTeleport: {
    readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
    readonly dest: StagingXcmV2MultiLocation;
    readonly xcm: StagingXcmV2Xcm;
  } & Struct;
  readonly isQueryHolding: boolean;
  readonly asQueryHolding: {
    readonly queryId: Compact<u64>;
    readonly dest: StagingXcmV2MultiLocation;
    readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
    readonly maxResponseWeight: Compact<u64>;
  } & Struct;
  readonly isBuyExecution: boolean;
  readonly asBuyExecution: {
    readonly fees: StagingXcmV2MultiAsset;
    readonly weightLimit: StagingXcmV2WeightLimit;
  } & Struct;
  readonly isRefundSurplus: boolean;
  readonly isSetErrorHandler: boolean;
  readonly asSetErrorHandler: StagingXcmV2Xcm;
  readonly isSetAppendix: boolean;
  readonly asSetAppendix: StagingXcmV2Xcm;
  readonly isClearError: boolean;
  readonly isClaimAsset: boolean;
  readonly asClaimAsset: {
    readonly assets: StagingXcmV2MultiassetMultiAssets;
    readonly ticket: StagingXcmV2MultiLocation;
  } & Struct;
  readonly isTrap: boolean;
  readonly asTrap: Compact<u64>;
  readonly isSubscribeVersion: boolean;
  readonly asSubscribeVersion: {
    readonly queryId: Compact<u64>;
    readonly maxResponseWeight: Compact<u64>;
  } & Struct;
  readonly isUnsubscribeVersion: boolean;
  readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
}

/** @name StagingXcmV2Junction */
export interface StagingXcmV2Junction extends Enum {
  readonly isParachain: boolean;
  readonly asParachain: Compact<u32>;
  readonly isAccountId32: boolean;
  readonly asAccountId32: {
    readonly network: StagingXcmV2NetworkId;
    readonly id: U8aFixed;
  } & Struct;
  readonly isAccountIndex64: boolean;
  readonly asAccountIndex64: {
    readonly network: StagingXcmV2NetworkId;
    readonly index: Compact<u64>;
  } & Struct;
  readonly isAccountKey20: boolean;
  readonly asAccountKey20: {
    readonly network: StagingXcmV2NetworkId;
    readonly key: U8aFixed;
  } & Struct;
  readonly isPalletInstance: boolean;
  readonly asPalletInstance: u8;
  readonly isGeneralIndex: boolean;
  readonly asGeneralIndex: Compact<u128>;
  readonly isGeneralKey: boolean;
  readonly asGeneralKey: Bytes;
  readonly isOnlyChild: boolean;
  readonly isPlurality: boolean;
  readonly asPlurality: {
    readonly id: StagingXcmV2BodyId;
    readonly part: StagingXcmV2BodyPart;
  } & Struct;
  readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
}

/** @name StagingXcmV2MultiAsset */
export interface StagingXcmV2MultiAsset extends Struct {
  readonly id: StagingXcmV2MultiassetAssetId;
  readonly fun: StagingXcmV2MultiassetFungibility;
}

/** @name StagingXcmV2MultiassetAssetId */
export interface StagingXcmV2MultiassetAssetId extends Enum {
  readonly isConcrete: boolean;
  readonly asConcrete: StagingXcmV2MultiLocation;
  readonly isAbstract: boolean;
  readonly asAbstract: Bytes;
  readonly type: 'Concrete' | 'Abstract';
}

/** @name StagingXcmV2MultiassetAssetInstance */
export interface StagingXcmV2MultiassetAssetInstance extends Enum {
  readonly isUndefined: boolean;
  readonly isIndex: boolean;
  readonly asIndex: Compact<u128>;
  readonly isArray4: boolean;
  readonly asArray4: U8aFixed;
  readonly isArray8: boolean;
  readonly asArray8: U8aFixed;
  readonly isArray16: boolean;
  readonly asArray16: U8aFixed;
  readonly isArray32: boolean;
  readonly asArray32: U8aFixed;
  readonly isBlob: boolean;
  readonly asBlob: Bytes;
  readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
}

/** @name StagingXcmV2MultiassetFungibility */
export interface StagingXcmV2MultiassetFungibility extends Enum {
  readonly isFungible: boolean;
  readonly asFungible: Compact<u128>;
  readonly isNonFungible: boolean;
  readonly asNonFungible: StagingXcmV2MultiassetAssetInstance;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name StagingXcmV2MultiassetMultiAssetFilter */
export interface StagingXcmV2MultiassetMultiAssetFilter extends Enum {
  readonly isDefinite: boolean;
  readonly asDefinite: StagingXcmV2MultiassetMultiAssets;
  readonly isWild: boolean;
  readonly asWild: StagingXcmV2MultiassetWildMultiAsset;
  readonly type: 'Definite' | 'Wild';
}

/** @name StagingXcmV2MultiassetMultiAssets */
export interface StagingXcmV2MultiassetMultiAssets extends Vec<StagingXcmV2MultiAsset> {}

/** @name StagingXcmV2MultiassetWildFungibility */
export interface StagingXcmV2MultiassetWildFungibility extends Enum {
  readonly isFungible: boolean;
  readonly isNonFungible: boolean;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name StagingXcmV2MultiassetWildMultiAsset */
export interface StagingXcmV2MultiassetWildMultiAsset extends Enum {
  readonly isAll: boolean;
  readonly isAllOf: boolean;
  readonly asAllOf: {
    readonly id: StagingXcmV2MultiassetAssetId;
    readonly fun: StagingXcmV2MultiassetWildFungibility;
  } & Struct;
  readonly type: 'All' | 'AllOf';
}

/** @name StagingXcmV2MultiLocation */
export interface StagingXcmV2MultiLocation extends Struct {
  readonly parents: u8;
  readonly interior: StagingXcmV2MultilocationJunctions;
}

/** @name StagingXcmV2MultilocationJunctions */
export interface StagingXcmV2MultilocationJunctions extends Enum {
  readonly isHere: boolean;
  readonly isX1: boolean;
  readonly asX1: StagingXcmV2Junction;
  readonly isX2: boolean;
  readonly asX2: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction]>;
  readonly isX3: boolean;
  readonly asX3: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
  readonly isX4: boolean;
  readonly asX4: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
  readonly isX5: boolean;
  readonly asX5: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
  readonly isX6: boolean;
  readonly asX6: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
  readonly isX7: boolean;
  readonly asX7: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
  readonly isX8: boolean;
  readonly asX8: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
  readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
}

/** @name StagingXcmV2NetworkId */
export interface StagingXcmV2NetworkId extends Enum {
  readonly isAny: boolean;
  readonly isNamed: boolean;
  readonly asNamed: Bytes;
  readonly isPolkadot: boolean;
  readonly isKusama: boolean;
  readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
}

/** @name StagingXcmV2OriginKind */
export interface StagingXcmV2OriginKind extends Enum {
  readonly isNative: boolean;
  readonly isSovereignAccount: boolean;
  readonly isSuperuser: boolean;
  readonly isXcm: boolean;
  readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
}

/** @name StagingXcmV2Response */
export interface StagingXcmV2Response extends Enum {
  readonly isNull: boolean;
  readonly isAssets: boolean;
  readonly asAssets: StagingXcmV2MultiassetMultiAssets;
  readonly isExecutionResult: boolean;
  readonly asExecutionResult: Option<ITuple<[u32, StagingXcmV2TraitsError]>>;
  readonly isVersion: boolean;
  readonly asVersion: u32;
  readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
}

/** @name StagingXcmV2TraitsError */
export interface StagingXcmV2TraitsError extends Enum {
  readonly isOverflow: boolean;
  readonly isUnimplemented: boolean;
  readonly isUntrustedReserveLocation: boolean;
  readonly isUntrustedTeleportLocation: boolean;
  readonly isMultiLocationFull: boolean;
  readonly isMultiLocationNotInvertible: boolean;
  readonly isBadOrigin: boolean;
  readonly isInvalidLocation: boolean;
  readonly isAssetNotFound: boolean;
  readonly isFailedToTransactAsset: boolean;
  readonly isNotWithdrawable: boolean;
  readonly isLocationCannotHold: boolean;
  readonly isExceedsMaxMessageSize: boolean;
  readonly isDestinationUnsupported: boolean;
  readonly isTransport: boolean;
  readonly isUnroutable: boolean;
  readonly isUnknownClaim: boolean;
  readonly isFailedToDecode: boolean;
  readonly isMaxWeightInvalid: boolean;
  readonly isNotHoldingFees: boolean;
  readonly isTooExpensive: boolean;
  readonly isTrap: boolean;
  readonly asTrap: u64;
  readonly isUnhandledXcmVersion: boolean;
  readonly isWeightLimitReached: boolean;
  readonly asWeightLimitReached: u64;
  readonly isBarrier: boolean;
  readonly isWeightNotComputable: boolean;
  readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
}

/** @name StagingXcmV2WeightLimit */
export interface StagingXcmV2WeightLimit extends Enum {
  readonly isUnlimited: boolean;
  readonly isLimited: boolean;
  readonly asLimited: Compact<u64>;
  readonly type: 'Unlimited' | 'Limited';
}

/** @name StagingXcmV2Xcm */
export interface StagingXcmV2Xcm extends Vec<StagingXcmV2Instruction> {}

/** @name StagingXcmV3Instruction */
export interface StagingXcmV3Instruction extends Enum {
  readonly isWithdrawAsset: boolean;
  readonly asWithdrawAsset: StagingXcmV3MultiassetMultiAssets;
  readonly isReserveAssetDeposited: boolean;
  readonly asReserveAssetDeposited: StagingXcmV3MultiassetMultiAssets;
  readonly isReceiveTeleportedAsset: boolean;
  readonly asReceiveTeleportedAsset: StagingXcmV3MultiassetMultiAssets;
  readonly isQueryResponse: boolean;
  readonly asQueryResponse: {
    readonly queryId: Compact<u64>;
    readonly response: StagingXcmV3Response;
    readonly maxWeight: SpWeightsWeightV2Weight;
    readonly querier: Option<StagingXcmV3MultiLocation>;
  } & Struct;
  readonly isTransferAsset: boolean;
  readonly asTransferAsset: {
    readonly assets: StagingXcmV3MultiassetMultiAssets;
    readonly beneficiary: StagingXcmV3MultiLocation;
  } & Struct;
  readonly isTransferReserveAsset: boolean;
  readonly asTransferReserveAsset: {
    readonly assets: StagingXcmV3MultiassetMultiAssets;
    readonly dest: StagingXcmV3MultiLocation;
    readonly xcm: StagingXcmV3Xcm;
  } & Struct;
  readonly isTransact: boolean;
  readonly asTransact: {
    readonly originKind: StagingXcmV2OriginKind;
    readonly requireWeightAtMost: SpWeightsWeightV2Weight;
    readonly call: StagingXcmDoubleEncoded;
  } & Struct;
  readonly isHrmpNewChannelOpenRequest: boolean;
  readonly asHrmpNewChannelOpenRequest: {
    readonly sender: Compact<u32>;
    readonly maxMessageSize: Compact<u32>;
    readonly maxCapacity: Compact<u32>;
  } & Struct;
  readonly isHrmpChannelAccepted: boolean;
  readonly asHrmpChannelAccepted: {
    readonly recipient: Compact<u32>;
  } & Struct;
  readonly isHrmpChannelClosing: boolean;
  readonly asHrmpChannelClosing: {
    readonly initiator: Compact<u32>;
    readonly sender: Compact<u32>;
    readonly recipient: Compact<u32>;
  } & Struct;
  readonly isClearOrigin: boolean;
  readonly isDescendOrigin: boolean;
  readonly asDescendOrigin: StagingXcmV3Junctions;
  readonly isReportError: boolean;
  readonly asReportError: StagingXcmV3QueryResponseInfo;
  readonly isDepositAsset: boolean;
  readonly asDepositAsset: {
    readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
    readonly beneficiary: StagingXcmV3MultiLocation;
  } & Struct;
  readonly isDepositReserveAsset: boolean;
  readonly asDepositReserveAsset: {
    readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
    readonly dest: StagingXcmV3MultiLocation;
    readonly xcm: StagingXcmV3Xcm;
  } & Struct;
  readonly isExchangeAsset: boolean;
  readonly asExchangeAsset: {
    readonly give: StagingXcmV3MultiassetMultiAssetFilter;
    readonly want: StagingXcmV3MultiassetMultiAssets;
    readonly maximal: bool;
  } & Struct;
  readonly isInitiateReserveWithdraw: boolean;
  readonly asInitiateReserveWithdraw: {
    readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
    readonly reserve: StagingXcmV3MultiLocation;
    readonly xcm: StagingXcmV3Xcm;
  } & Struct;
  readonly isInitiateTeleport: boolean;
  readonly asInitiateTeleport: {
    readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
    readonly dest: StagingXcmV3MultiLocation;
    readonly xcm: StagingXcmV3Xcm;
  } & Struct;
  readonly isReportHolding: boolean;
  readonly asReportHolding: {
    readonly responseInfo: StagingXcmV3QueryResponseInfo;
    readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
  } & Struct;
  readonly isBuyExecution: boolean;
  readonly asBuyExecution: {
    readonly fees: StagingXcmV3MultiAsset;
    readonly weightLimit: StagingXcmV3WeightLimit;
  } & Struct;
  readonly isRefundSurplus: boolean;
  readonly isSetErrorHandler: boolean;
  readonly asSetErrorHandler: StagingXcmV3Xcm;
  readonly isSetAppendix: boolean;
  readonly asSetAppendix: StagingXcmV3Xcm;
  readonly isClearError: boolean;
  readonly isClaimAsset: boolean;
  readonly asClaimAsset: {
    readonly assets: StagingXcmV3MultiassetMultiAssets;
    readonly ticket: StagingXcmV3MultiLocation;
  } & Struct;
  readonly isTrap: boolean;
  readonly asTrap: Compact<u64>;
  readonly isSubscribeVersion: boolean;
  readonly asSubscribeVersion: {
    readonly queryId: Compact<u64>;
    readonly maxResponseWeight: SpWeightsWeightV2Weight;
  } & Struct;
  readonly isUnsubscribeVersion: boolean;
  readonly isBurnAsset: boolean;
  readonly asBurnAsset: StagingXcmV3MultiassetMultiAssets;
  readonly isExpectAsset: boolean;
  readonly asExpectAsset: StagingXcmV3MultiassetMultiAssets;
  readonly isExpectOrigin: boolean;
  readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
  readonly isExpectError: boolean;
  readonly asExpectError: Option<ITuple<[u32, StagingXcmV3TraitsError]>>;
  readonly isExpectTransactStatus: boolean;
  readonly asExpectTransactStatus: StagingXcmV3MaybeErrorCode;
  readonly isQueryPallet: boolean;
  readonly asQueryPallet: {
    readonly moduleName: Bytes;
    readonly responseInfo: StagingXcmV3QueryResponseInfo;
  } & Struct;
  readonly isExpectPallet: boolean;
  readonly asExpectPallet: {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly crateMajor: Compact<u32>;
    readonly minCrateMinor: Compact<u32>;
  } & Struct;
  readonly isReportTransactStatus: boolean;
  readonly asReportTransactStatus: StagingXcmV3QueryResponseInfo;
  readonly isClearTransactStatus: boolean;
  readonly isUniversalOrigin: boolean;
  readonly asUniversalOrigin: StagingXcmV3Junction;
  readonly isExportMessage: boolean;
  readonly asExportMessage: {
    readonly network: StagingXcmV3JunctionNetworkId;
    readonly destination: StagingXcmV3Junctions;
    readonly xcm: StagingXcmV3Xcm;
  } & Struct;
  readonly isLockAsset: boolean;
  readonly asLockAsset: {
    readonly asset: StagingXcmV3MultiAsset;
    readonly unlocker: StagingXcmV3MultiLocation;
  } & Struct;
  readonly isUnlockAsset: boolean;
  readonly asUnlockAsset: {
    readonly asset: StagingXcmV3MultiAsset;
    readonly target: StagingXcmV3MultiLocation;
  } & Struct;
  readonly isNoteUnlockable: boolean;
  readonly asNoteUnlockable: {
    readonly asset: StagingXcmV3MultiAsset;
    readonly owner: StagingXcmV3MultiLocation;
  } & Struct;
  readonly isRequestUnlock: boolean;
  readonly asRequestUnlock: {
    readonly asset: StagingXcmV3MultiAsset;
    readonly locker: StagingXcmV3MultiLocation;
  } & Struct;
  readonly isSetFeesMode: boolean;
  readonly asSetFeesMode: {
    readonly jitWithdraw: bool;
  } & Struct;
  readonly isSetTopic: boolean;
  readonly asSetTopic: U8aFixed;
  readonly isClearTopic: boolean;
  readonly isAliasOrigin: boolean;
  readonly asAliasOrigin: StagingXcmV3MultiLocation;
  readonly isUnpaidExecution: boolean;
  readonly asUnpaidExecution: {
    readonly weightLimit: StagingXcmV3WeightLimit;
    readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
  } & Struct;
  readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
}

/** @name StagingXcmV3Junction */
export interface StagingXcmV3Junction extends Enum {
  readonly isParachain: boolean;
  readonly asParachain: Compact<u32>;
  readonly isAccountId32: boolean;
  readonly asAccountId32: {
    readonly network: Option<StagingXcmV3JunctionNetworkId>;
    readonly id: U8aFixed;
  } & Struct;
  readonly isAccountIndex64: boolean;
  readonly asAccountIndex64: {
    readonly network: Option<StagingXcmV3JunctionNetworkId>;
    readonly index: Compact<u64>;
  } & Struct;
  readonly isAccountKey20: boolean;
  readonly asAccountKey20: {
    readonly network: Option<StagingXcmV3JunctionNetworkId>;
    readonly key: U8aFixed;
  } & Struct;
  readonly isPalletInstance: boolean;
  readonly asPalletInstance: u8;
  readonly isGeneralIndex: boolean;
  readonly asGeneralIndex: Compact<u128>;
  readonly isGeneralKey: boolean;
  readonly asGeneralKey: {
    readonly length: u8;
    readonly data: U8aFixed;
  } & Struct;
  readonly isOnlyChild: boolean;
  readonly isPlurality: boolean;
  readonly asPlurality: {
    readonly id: StagingXcmV3JunctionBodyId;
    readonly part: StagingXcmV3JunctionBodyPart;
  } & Struct;
  readonly isGlobalConsensus: boolean;
  readonly asGlobalConsensus: StagingXcmV3JunctionNetworkId;
  readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
}

/** @name StagingXcmV3JunctionBodyId */
export interface StagingXcmV3JunctionBodyId extends Enum {
  readonly isUnit: boolean;
  readonly isMoniker: boolean;
  readonly asMoniker: U8aFixed;
  readonly isIndex: boolean;
  readonly asIndex: Compact<u32>;
  readonly isExecutive: boolean;
  readonly isTechnical: boolean;
  readonly isLegislative: boolean;
  readonly isJudicial: boolean;
  readonly isDefense: boolean;
  readonly isAdministration: boolean;
  readonly isTreasury: boolean;
  readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
}

/** @name StagingXcmV3JunctionBodyPart */
export interface StagingXcmV3JunctionBodyPart extends Enum {
  readonly isVoice: boolean;
  readonly isMembers: boolean;
  readonly asMembers: {
    readonly count: Compact<u32>;
  } & Struct;
  readonly isFraction: boolean;
  readonly asFraction: {
    readonly nom: Compact<u32>;
    readonly denom: Compact<u32>;
  } & Struct;
  readonly isAtLeastProportion: boolean;
  readonly asAtLeastProportion: {
    readonly nom: Compact<u32>;
    readonly denom: Compact<u32>;
  } & Struct;
  readonly isMoreThanProportion: boolean;
  readonly asMoreThanProportion: {
    readonly nom: Compact<u32>;
    readonly denom: Compact<u32>;
  } & Struct;
  readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
}

/** @name StagingXcmV3JunctionNetworkId */
export interface StagingXcmV3JunctionNetworkId extends Enum {
  readonly isByGenesis: boolean;
  readonly asByGenesis: U8aFixed;
  readonly isByFork: boolean;
  readonly asByFork: {
    readonly blockNumber: u64;
    readonly blockHash: U8aFixed;
  } & Struct;
  readonly isPolkadot: boolean;
  readonly isKusama: boolean;
  readonly isWestend: boolean;
  readonly isRococo: boolean;
  readonly isWococo: boolean;
  readonly isEthereum: boolean;
  readonly asEthereum: {
    readonly chainId: Compact<u64>;
  } & Struct;
  readonly isBitcoinCore: boolean;
  readonly isBitcoinCash: boolean;
  readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
}

/** @name StagingXcmV3Junctions */
export interface StagingXcmV3Junctions extends Enum {
  readonly isHere: boolean;
  readonly isX1: boolean;
  readonly asX1: StagingXcmV3Junction;
  readonly isX2: boolean;
  readonly asX2: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction]>;
  readonly isX3: boolean;
  readonly asX3: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
  readonly isX4: boolean;
  readonly asX4: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
  readonly isX5: boolean;
  readonly asX5: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
  readonly isX6: boolean;
  readonly asX6: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
  readonly isX7: boolean;
  readonly asX7: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
  readonly isX8: boolean;
  readonly asX8: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
  readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
}

/** @name StagingXcmV3MaybeErrorCode */
export interface StagingXcmV3MaybeErrorCode extends Enum {
  readonly isSuccess: boolean;
  readonly isError: boolean;
  readonly asError: Bytes;
  readonly isTruncatedError: boolean;
  readonly asTruncatedError: Bytes;
  readonly type: 'Success' | 'Error' | 'TruncatedError';
}

/** @name StagingXcmV3MultiAsset */
export interface StagingXcmV3MultiAsset extends Struct {
  readonly id: StagingXcmV3MultiassetAssetId;
  readonly fun: StagingXcmV3MultiassetFungibility;
}

/** @name StagingXcmV3MultiassetAssetId */
export interface StagingXcmV3MultiassetAssetId extends Enum {
  readonly isConcrete: boolean;
  readonly asConcrete: StagingXcmV3MultiLocation;
  readonly isAbstract: boolean;
  readonly asAbstract: U8aFixed;
  readonly type: 'Concrete' | 'Abstract';
}

/** @name StagingXcmV3MultiassetAssetInstance */
export interface StagingXcmV3MultiassetAssetInstance extends Enum {
  readonly isUndefined: boolean;
  readonly isIndex: boolean;
  readonly asIndex: Compact<u128>;
  readonly isArray4: boolean;
  readonly asArray4: U8aFixed;
  readonly isArray8: boolean;
  readonly asArray8: U8aFixed;
  readonly isArray16: boolean;
  readonly asArray16: U8aFixed;
  readonly isArray32: boolean;
  readonly asArray32: U8aFixed;
  readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
}

/** @name StagingXcmV3MultiassetFungibility */
export interface StagingXcmV3MultiassetFungibility extends Enum {
  readonly isFungible: boolean;
  readonly asFungible: Compact<u128>;
  readonly isNonFungible: boolean;
  readonly asNonFungible: StagingXcmV3MultiassetAssetInstance;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name StagingXcmV3MultiassetMultiAssetFilter */
export interface StagingXcmV3MultiassetMultiAssetFilter extends Enum {
  readonly isDefinite: boolean;
  readonly asDefinite: StagingXcmV3MultiassetMultiAssets;
  readonly isWild: boolean;
  readonly asWild: StagingXcmV3MultiassetWildMultiAsset;
  readonly type: 'Definite' | 'Wild';
}

/** @name StagingXcmV3MultiassetMultiAssets */
export interface StagingXcmV3MultiassetMultiAssets extends Vec<StagingXcmV3MultiAsset> {}

/** @name StagingXcmV3MultiassetWildFungibility */
export interface StagingXcmV3MultiassetWildFungibility extends Enum {
  readonly isFungible: boolean;
  readonly isNonFungible: boolean;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name StagingXcmV3MultiassetWildMultiAsset */
export interface StagingXcmV3MultiassetWildMultiAsset extends Enum {
  readonly isAll: boolean;
  readonly isAllOf: boolean;
  readonly asAllOf: {
    readonly id: StagingXcmV3MultiassetAssetId;
    readonly fun: StagingXcmV3MultiassetWildFungibility;
  } & Struct;
  readonly isAllCounted: boolean;
  readonly asAllCounted: Compact<u32>;
  readonly isAllOfCounted: boolean;
  readonly asAllOfCounted: {
    readonly id: StagingXcmV3MultiassetAssetId;
    readonly fun: StagingXcmV3MultiassetWildFungibility;
    readonly count: Compact<u32>;
  } & Struct;
  readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
}

/** @name StagingXcmV3MultiLocation */
export interface StagingXcmV3MultiLocation extends Struct {
  readonly parents: u8;
  readonly interior: StagingXcmV3Junctions;
}

/** @name StagingXcmV3PalletInfo */
export interface StagingXcmV3PalletInfo extends Struct {
  readonly index: Compact<u32>;
  readonly name: Bytes;
  readonly moduleName: Bytes;
  readonly major: Compact<u32>;
  readonly minor: Compact<u32>;
  readonly patch: Compact<u32>;
}

/** @name StagingXcmV3QueryResponseInfo */
export interface StagingXcmV3QueryResponseInfo extends Struct {
  readonly destination: StagingXcmV3MultiLocation;
  readonly queryId: Compact<u64>;
  readonly maxWeight: SpWeightsWeightV2Weight;
}

/** @name StagingXcmV3Response */
export interface StagingXcmV3Response extends Enum {
  readonly isNull: boolean;
  readonly isAssets: boolean;
  readonly asAssets: StagingXcmV3MultiassetMultiAssets;
  readonly isExecutionResult: boolean;
  readonly asExecutionResult: Option<ITuple<[u32, StagingXcmV3TraitsError]>>;
  readonly isVersion: boolean;
  readonly asVersion: u32;
  readonly isPalletsInfo: boolean;
  readonly asPalletsInfo: Vec<StagingXcmV3PalletInfo>;
  readonly isDispatchResult: boolean;
  readonly asDispatchResult: StagingXcmV3MaybeErrorCode;
  readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
}

/** @name StagingXcmV3TraitsError */
export interface StagingXcmV3TraitsError extends Enum {
  readonly isOverflow: boolean;
  readonly isUnimplemented: boolean;
  readonly isUntrustedReserveLocation: boolean;
  readonly isUntrustedTeleportLocation: boolean;
  readonly isLocationFull: boolean;
  readonly isLocationNotInvertible: boolean;
  readonly isBadOrigin: boolean;
  readonly isInvalidLocation: boolean;
  readonly isAssetNotFound: boolean;
  readonly isFailedToTransactAsset: boolean;
  readonly isNotWithdrawable: boolean;
  readonly isLocationCannotHold: boolean;
  readonly isExceedsMaxMessageSize: boolean;
  readonly isDestinationUnsupported: boolean;
  readonly isTransport: boolean;
  readonly isUnroutable: boolean;
  readonly isUnknownClaim: boolean;
  readonly isFailedToDecode: boolean;
  readonly isMaxWeightInvalid: boolean;
  readonly isNotHoldingFees: boolean;
  readonly isTooExpensive: boolean;
  readonly isTrap: boolean;
  readonly asTrap: u64;
  readonly isExpectationFalse: boolean;
  readonly isPalletNotFound: boolean;
  readonly isNameMismatch: boolean;
  readonly isVersionIncompatible: boolean;
  readonly isHoldingWouldOverflow: boolean;
  readonly isExportError: boolean;
  readonly isReanchorFailed: boolean;
  readonly isNoDeal: boolean;
  readonly isFeesNotMet: boolean;
  readonly isLockError: boolean;
  readonly isNoPermission: boolean;
  readonly isUnanchored: boolean;
  readonly isNotDepositable: boolean;
  readonly isUnhandledXcmVersion: boolean;
  readonly isWeightLimitReached: boolean;
  readonly asWeightLimitReached: SpWeightsWeightV2Weight;
  readonly isBarrier: boolean;
  readonly isWeightNotComputable: boolean;
  readonly isExceedsStackLimit: boolean;
  readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
}

/** @name StagingXcmV3TraitsOutcome */
export interface StagingXcmV3TraitsOutcome extends Enum {
  readonly isComplete: boolean;
  readonly asComplete: SpWeightsWeightV2Weight;
  readonly isIncomplete: boolean;
  readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, StagingXcmV3TraitsError]>;
  readonly isError: boolean;
  readonly asError: StagingXcmV3TraitsError;
  readonly type: 'Complete' | 'Incomplete' | 'Error';
}

/** @name StagingXcmV3WeightLimit */
export interface StagingXcmV3WeightLimit extends Enum {
  readonly isUnlimited: boolean;
  readonly isLimited: boolean;
  readonly asLimited: SpWeightsWeightV2Weight;
  readonly type: 'Unlimited' | 'Limited';
}

/** @name StagingXcmV3Xcm */
export interface StagingXcmV3Xcm extends Vec<StagingXcmV3Instruction> {}

/** @name StagingXcmVersionedAssetId */
export interface StagingXcmVersionedAssetId extends Enum {
  readonly isV3: boolean;
  readonly asV3: StagingXcmV3MultiassetAssetId;
  readonly type: 'V3';
}

/** @name StagingXcmVersionedMultiAsset */
export interface StagingXcmVersionedMultiAsset extends Enum {
  readonly isV2: boolean;
  readonly asV2: StagingXcmV2MultiAsset;
  readonly isV3: boolean;
  readonly asV3: StagingXcmV3MultiAsset;
  readonly type: 'V2' | 'V3';
}

/** @name StagingXcmVersionedMultiAssets */
export interface StagingXcmVersionedMultiAssets extends Enum {
  readonly isV2: boolean;
  readonly asV2: StagingXcmV2MultiassetMultiAssets;
  readonly isV3: boolean;
  readonly asV3: StagingXcmV3MultiassetMultiAssets;
  readonly type: 'V2' | 'V3';
}

/** @name StagingXcmVersionedMultiLocation */
export interface StagingXcmVersionedMultiLocation extends Enum {
  readonly isV2: boolean;
  readonly asV2: StagingXcmV2MultiLocation;
  readonly isV3: boolean;
  readonly asV3: StagingXcmV3MultiLocation;
  readonly type: 'V2' | 'V3';
}

/** @name StagingXcmVersionedResponse */
export interface StagingXcmVersionedResponse extends Enum {
  readonly isV2: boolean;
  readonly asV2: StagingXcmV2Response;
  readonly isV3: boolean;
  readonly asV3: StagingXcmV3Response;
  readonly type: 'V2' | 'V3';
}

/** @name StagingXcmVersionedXcm */
export interface StagingXcmVersionedXcm extends Enum {
  readonly isV2: boolean;
  readonly asV2: StagingXcmV2Xcm;
  readonly isV3: boolean;
  readonly asV3: StagingXcmV3Xcm;
  readonly type: 'V2' | 'V3';
}

/** @name UniqueRuntimeOriginCaller */
export interface UniqueRuntimeOriginCaller extends Enum {
  readonly isSystem: boolean;
  readonly asSystem: FrameSupportDispatchRawOrigin;
  readonly isVoid: boolean;
  readonly asVoid: SpCoreVoid;
  readonly isPolkadotXcm: boolean;
  readonly asPolkadotXcm: PalletXcmOrigin;
  readonly isCumulusXcm: boolean;
  readonly asCumulusXcm: CumulusPalletXcmOrigin;
  readonly isEthereum: boolean;
  readonly asEthereum: PalletEthereumRawOrigin;
  readonly type: 'System' | 'Void' | 'PolkadotXcm' | 'CumulusXcm' | 'Ethereum';
}

/** @name UniqueRuntimeRuntime */
export interface UniqueRuntimeRuntime extends Null {}

/** @name UniqueRuntimeRuntimeCommonIdentityDisableIdentityCalls */
export interface UniqueRuntimeRuntimeCommonIdentityDisableIdentityCalls extends Null {}

/** @name UniqueRuntimeRuntimeCommonMaintenanceCheckMaintenance */
export interface UniqueRuntimeRuntimeCommonMaintenanceCheckMaintenance extends Null {}

/** @name UniqueRuntimeRuntimeHoldReason */
export interface UniqueRuntimeRuntimeHoldReason extends Enum {
  readonly isCollatorSelection: boolean;
  readonly asCollatorSelection: PalletCollatorSelectionHoldReason;
  readonly type: 'CollatorSelection';
}

/** @name UpDataStructsAccessMode */
export interface UpDataStructsAccessMode extends Enum {
  readonly isNormal: boolean;
  readonly isAllowList: boolean;
  readonly type: 'Normal' | 'AllowList';
}

/** @name UpDataStructsCollection */
export interface UpDataStructsCollection extends Struct {
  readonly owner: AccountId32;
  readonly mode: UpDataStructsCollectionMode;
  readonly name: Vec<u16>;
  readonly description: Vec<u16>;
  readonly tokenPrefix: Bytes;
  readonly sponsorship: UpDataStructsSponsorshipStateAccountId32;
  readonly limits: UpDataStructsCollectionLimits;
  readonly permissions: UpDataStructsCollectionPermissions;
  readonly flags: U8aFixed;
}

/** @name UpDataStructsCollectionLimits */
export interface UpDataStructsCollectionLimits extends Struct {
  readonly accountTokenOwnershipLimit: Option<u32>;
  readonly sponsoredDataSize: Option<u32>;
  readonly sponsoredDataRateLimit: Option<UpDataStructsSponsoringRateLimit>;
  readonly tokenLimit: Option<u32>;
  readonly sponsorTransferTimeout: Option<u32>;
  readonly sponsorApproveTimeout: Option<u32>;
  readonly ownerCanTransfer: Option<bool>;
  readonly ownerCanDestroy: Option<bool>;
  readonly transfersEnabled: Option<bool>;
}

/** @name UpDataStructsCollectionMode */
export interface UpDataStructsCollectionMode extends Enum {
  readonly isNft: boolean;
  readonly isFungible: boolean;
  readonly asFungible: u8;
  readonly isReFungible: boolean;
  readonly type: 'Nft' | 'Fungible' | 'ReFungible';
}

/** @name UpDataStructsCollectionPermissions */
export interface UpDataStructsCollectionPermissions extends Struct {
  readonly access: Option<UpDataStructsAccessMode>;
  readonly mintMode: Option<bool>;
  readonly nesting: Option<UpDataStructsNestingPermissions>;
}

/** @name UpDataStructsCollectionStats */
export interface UpDataStructsCollectionStats extends Struct {
  readonly created: u32;
  readonly destroyed: u32;
  readonly alive: u32;
}

/** @name UpDataStructsCreateCollectionData */
export interface UpDataStructsCreateCollectionData extends Struct {
  readonly mode: UpDataStructsCollectionMode;
  readonly access: Option<UpDataStructsAccessMode>;
  readonly name: Vec<u16>;
  readonly description: Vec<u16>;
  readonly tokenPrefix: Bytes;
  readonly limits: Option<UpDataStructsCollectionLimits>;
  readonly permissions: Option<UpDataStructsCollectionPermissions>;
  readonly tokenPropertyPermissions: Vec<UpDataStructsPropertyKeyPermission>;
  readonly properties: Vec<UpDataStructsProperty>;
  readonly adminList: Vec<PalletEvmAccountBasicCrossAccountIdRepr>;
  readonly pendingSponsor: Option<PalletEvmAccountBasicCrossAccountIdRepr>;
  readonly flags: U8aFixed;
}

/** @name UpDataStructsCreateFungibleData */
export interface UpDataStructsCreateFungibleData extends Struct {
  readonly value: u128;
}

/** @name UpDataStructsCreateItemData */
export interface UpDataStructsCreateItemData extends Enum {
  readonly isNft: boolean;
  readonly asNft: UpDataStructsCreateNftData;
  readonly isFungible: boolean;
  readonly asFungible: UpDataStructsCreateFungibleData;
  readonly isReFungible: boolean;
  readonly asReFungible: UpDataStructsCreateReFungibleData;
  readonly type: 'Nft' | 'Fungible' | 'ReFungible';
}

/** @name UpDataStructsCreateItemExData */
export interface UpDataStructsCreateItemExData extends Enum {
  readonly isNft: boolean;
  readonly asNft: Vec<UpDataStructsCreateNftExData>;
  readonly isFungible: boolean;
  readonly asFungible: BTreeMap<PalletEvmAccountBasicCrossAccountIdRepr,u128>;
  readonly isRefungibleMultipleItems: boolean;
  readonly asRefungibleMultipleItems: Vec<UpDataStructsCreateRefungibleExSingleOwner>;
  readonly isRefungibleMultipleOwners: boolean;
  readonly asRefungibleMultipleOwners: UpDataStructsCreateRefungibleExMultipleOwners;
  readonly type: 'Nft' | 'Fungible' | 'RefungibleMultipleItems' | 'RefungibleMultipleOwners';
}

/** @name UpDataStructsCreateNftData */
export interface UpDataStructsCreateNftData extends Struct {
  readonly properties: Vec<UpDataStructsProperty>;
}

/** @name UpDataStructsCreateNftExData */
export interface UpDataStructsCreateNftExData extends Struct {
  readonly properties: Vec<UpDataStructsProperty>;
  readonly owner: PalletEvmAccountBasicCrossAccountIdRepr;
}

/** @name UpDataStructsCreateReFungibleData */
export interface UpDataStructsCreateReFungibleData extends Struct {
  readonly pieces: u128;
  readonly properties: Vec<UpDataStructsProperty>;
}

/** @name UpDataStructsCreateRefungibleExMultipleOwners */
export interface UpDataStructsCreateRefungibleExMultipleOwners extends Struct {
  readonly users: BTreeMap<PalletEvmAccountBasicCrossAccountIdRepr, u128>;
  readonly properties: Vec<UpDataStructsProperty>;
}

/** @name UpDataStructsCreateRefungibleExSingleOwner */
export interface UpDataStructsCreateRefungibleExSingleOwner extends Struct {
  readonly user: PalletEvmAccountBasicCrossAccountIdRepr;
  readonly pieces: u128;
  readonly properties: Vec<UpDataStructsProperty>;
}

/** @name UpDataStructsNestingPermissions */
export interface UpDataStructsNestingPermissions extends Struct {
  readonly tokenOwner: bool;
  readonly collectionAdmin: bool;
  readonly restricted: Option<UpDataStructsOwnerRestrictedSet>;
}

/** @name UpDataStructsOwnerRestrictedSet */
export interface UpDataStructsOwnerRestrictedSet extends BTreeSet<u32> {}

/** @name UpDataStructsProperties */
export interface UpDataStructsProperties extends Struct {
  readonly map: UpDataStructsPropertiesMapBoundedVec;
  readonly consumedSpace: u32;
  readonly reserved: u32;
}

/** @name UpDataStructsPropertiesMapBoundedVec */
export interface UpDataStructsPropertiesMapBoundedVec extends BTreeMap<Bytes, Bytes> {}

/** @name UpDataStructsPropertiesMapPropertyPermission */
export interface UpDataStructsPropertiesMapPropertyPermission extends BTreeMap<Bytes, UpDataStructsPropertyPermission> {}

/** @name UpDataStructsProperty */
export interface UpDataStructsProperty extends Struct {
  readonly key: Bytes;
  readonly value: Bytes;
}

/** @name UpDataStructsPropertyKeyPermission */
export interface UpDataStructsPropertyKeyPermission extends Struct {
  readonly key: Bytes;
  readonly permission: UpDataStructsPropertyPermission;
}

/** @name UpDataStructsPropertyPermission */
export interface UpDataStructsPropertyPermission extends Struct {
  readonly mutable: bool;
  readonly collectionAdmin: bool;
  readonly tokenOwner: bool;
}

/** @name UpDataStructsPropertyScope */
export interface UpDataStructsPropertyScope extends Enum {
  readonly isNone: boolean;
  readonly isRmrk: boolean;
  readonly type: 'None' | 'Rmrk';
}

/** @name UpDataStructsRpcCollection */
export interface UpDataStructsRpcCollection extends Struct {
  readonly owner: AccountId32;
  readonly mode: UpDataStructsCollectionMode;
  readonly name: Vec<u16>;
  readonly description: Vec<u16>;
  readonly tokenPrefix: Bytes;
  readonly sponsorship: UpDataStructsSponsorshipStateAccountId32;
  readonly limits: UpDataStructsCollectionLimits;
  readonly permissions: UpDataStructsCollectionPermissions;
  readonly tokenPropertyPermissions: Vec<UpDataStructsPropertyKeyPermission>;
  readonly properties: Vec<UpDataStructsProperty>;
  readonly readOnly: bool;
  readonly flags: UpDataStructsRpcCollectionFlags;
}

/** @name UpDataStructsRpcCollectionFlags */
export interface UpDataStructsRpcCollectionFlags extends Struct {
  readonly foreign: bool;
  readonly erc721metadata: bool;
}

/** @name UpDataStructsSponsoringRateLimit */
export interface UpDataStructsSponsoringRateLimit extends Enum {
  readonly isSponsoringDisabled: boolean;
  readonly isBlocks: boolean;
  readonly asBlocks: u32;
  readonly type: 'SponsoringDisabled' | 'Blocks';
}

/** @name UpDataStructsSponsorshipStateAccountId32 */
export interface UpDataStructsSponsorshipStateAccountId32 extends Enum {
  readonly isDisabled: boolean;
  readonly isUnconfirmed: boolean;
  readonly asUnconfirmed: AccountId32;
  readonly isConfirmed: boolean;
  readonly asConfirmed: AccountId32;
  readonly type: 'Disabled' | 'Unconfirmed' | 'Confirmed';
}

/** @name UpDataStructsSponsorshipStateBasicCrossAccountIdRepr */
export interface UpDataStructsSponsorshipStateBasicCrossAccountIdRepr extends Enum {
  readonly isDisabled: boolean;
  readonly isUnconfirmed: boolean;
  readonly asUnconfirmed: PalletEvmAccountBasicCrossAccountIdRepr;
  readonly isConfirmed: boolean;
  readonly asConfirmed: PalletEvmAccountBasicCrossAccountIdRepr;
  readonly type: 'Disabled' | 'Unconfirmed' | 'Confirmed';
}

/** @name UpDataStructsTokenChild */
export interface UpDataStructsTokenChild extends Struct {
  readonly token: u32;
  readonly collection: u32;
}

/** @name UpDataStructsTokenData */
export interface UpDataStructsTokenData extends Struct {
  readonly properties: Vec<UpDataStructsProperty>;
  readonly owner: Option<PalletEvmAccountBasicCrossAccountIdRepr>;
  readonly pieces: u128;
}

/** @name UpPovEstimateRpcPovInfo */
export interface UpPovEstimateRpcPovInfo extends Struct {
  readonly proofSize: u64;
  readonly compactProofSize: u64;
  readonly compressedProofSize: u64;
  readonly results: Vec<Result<Result<Null, SpRuntimeDispatchError>, SpRuntimeTransactionValidityTransactionValidityError>>;
  readonly keyValues: Vec<UpPovEstimateRpcTrieKeyValue>;
}

/** @name UpPovEstimateRpcTrieKeyValue */
export interface UpPovEstimateRpcTrieKeyValue extends Struct {
  readonly key: Bytes;
  readonly value: Bytes;
}

export type PHANTOM_DEFAULT = 'default';
