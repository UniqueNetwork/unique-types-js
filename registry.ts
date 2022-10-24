//@ts-nocheck
// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmCall, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, EthbloomBloom, EthereumBlock, EthereumHeader, EthereumLog, EthereumReceiptEip658ReceiptData, EthereumReceiptReceiptV3, EthereumTransactionAccessListItem, EthereumTransactionEip1559Transaction, EthereumTransactionEip2930Transaction, EthereumTransactionLegacyTransaction, EthereumTransactionTransactionAction, EthereumTransactionTransactionSignature, EthereumTransactionTransactionV2, EthereumTypesHashH64, EvmCoreErrorExitError, EvmCoreErrorExitFatal, EvmCoreErrorExitReason, EvmCoreErrorExitRevert, EvmCoreErrorExitSucceed, FpRpcTransactionStatus, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportPalletId, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleCall, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, OrmlVestingModuleCall, OrmlVestingModuleError, OrmlVestingModuleEvent, OrmlVestingVestingSchedule, OrmlXtokensModuleCall, OrmlXtokensModuleError, OrmlXtokensModuleEvent, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReleases, PalletBalancesReserveData, PalletCommonError, PalletCommonEvent, PalletConfigurationCall, PalletEthereumCall, PalletEthereumError, PalletEthereumEvent, PalletEthereumFakeTransactionFinalizer, PalletEvmAccountBasicCrossAccountIdRepr, PalletEvmCall, PalletEvmCoderSubstrateError, PalletEvmContractHelpersError, PalletEvmContractHelpersEvent, PalletEvmContractHelpersSponsoringModeT, PalletEvmError, PalletEvmEvent, PalletEvmMigrationCall, PalletEvmMigrationError, PalletForeignAssetsAssetIds, PalletForeignAssetsNativeCurrency, PalletFungibleError, PalletInflationCall, PalletNonfungibleError, PalletNonfungibleItemData, PalletStructureCall, PalletStructureError, PalletStructureEvent, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTemplateTransactionPaymentCall, PalletTemplateTransactionPaymentChargeTransactionPayment, PalletTimestampCall, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUniqueCall, PalletUniqueError, PalletUniqueRawEvent, PalletXcmCall, PalletXcmError, PalletXcmEvent, PhantomTypeUpDataStructs, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2AbridgedHrmpChannel, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, RmrkTraitsBaseBaseInfo, RmrkTraitsCollectionCollectionInfo, RmrkTraitsNftAccountIdOrCollectionNftTuple, RmrkTraitsNftNftChild, RmrkTraitsNftNftInfo, RmrkTraitsNftRoyaltyInfo, RmrkTraitsPartEquippableList, RmrkTraitsPartFixedPart, RmrkTraitsPartPartType, RmrkTraitsPartSlotPart, RmrkTraitsPropertyPropertyInfo, RmrkTraitsResourceBasicResource, RmrkTraitsResourceComposableResource, RmrkTraitsResourceResourceInfo, RmrkTraitsResourceResourceTypes, RmrkTraitsResourceSlotResource, RmrkTraitsTheme, RmrkTraitsThemeThemeProperty, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSr25519Signature, SpRuntimeArithmeticError, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, UniqueRuntimeRuntime, UpDataStructsAccessMode, UpDataStructsCollection, UpDataStructsCollectionLimits, UpDataStructsCollectionMode, UpDataStructsCollectionPermissions, UpDataStructsCollectionStats, UpDataStructsCreateCollectionData, UpDataStructsCreateFungibleData, UpDataStructsCreateItemData, UpDataStructsCreateItemExData, UpDataStructsCreateNftData, UpDataStructsCreateNftExData, UpDataStructsCreateReFungibleData, UpDataStructsCreateRefungibleExMultipleOwners, UpDataStructsCreateRefungibleExSingleOwner, UpDataStructsNestingPermissions, UpDataStructsOwnerRestrictedSet, UpDataStructsProperties, UpDataStructsPropertiesMapBoundedVec, UpDataStructsPropertiesMapPropertyPermission, UpDataStructsProperty, UpDataStructsPropertyKeyPermission, UpDataStructsPropertyPermission, UpDataStructsPropertyScope, UpDataStructsRpcCollection, UpDataStructsRpcCollectionFlags, UpDataStructsSponsoringRateLimit, UpDataStructsSponsorshipStateAccountId32, UpDataStructsSponsorshipStateBasicCrossAccountIdRepr, UpDataStructsTokenChild, UpDataStructsTokenData, XcmDoubleEncoded, XcmV0Junction, XcmV0JunctionBodyId, XcmV0JunctionBodyPart, XcmV0JunctionNetworkId, XcmV0MultiAsset, XcmV0MultiLocation, XcmV0Order, XcmV0OriginKind, XcmV0Response, XcmV0Xcm, XcmV1Junction, XcmV1MultiAsset, XcmV1MultiLocation, XcmV1MultiassetAssetId, XcmV1MultiassetAssetInstance, XcmV1MultiassetFungibility, XcmV1MultiassetMultiAssetFilter, XcmV1MultiassetMultiAssets, XcmV1MultiassetWildFungibility, XcmV1MultiassetWildMultiAsset, XcmV1MultilocationJunctions, XcmV1Order, XcmV1Response, XcmV1Xcm, XcmV2Instruction, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2WeightLimit, XcmV2Xcm, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    CumulusPalletDmpQueueCall: CumulusPalletDmpQueueCall;
    CumulusPalletDmpQueueConfigData: CumulusPalletDmpQueueConfigData;
    CumulusPalletDmpQueueError: CumulusPalletDmpQueueError;
    CumulusPalletDmpQueueEvent: CumulusPalletDmpQueueEvent;
    CumulusPalletDmpQueuePageIndexData: CumulusPalletDmpQueuePageIndexData;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletXcmCall: CumulusPalletXcmCall;
    CumulusPalletXcmError: CumulusPalletXcmError;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmpQueueCall: CumulusPalletXcmpQueueCall;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueInboundChannelDetails: CumulusPalletXcmpQueueInboundChannelDetails;
    CumulusPalletXcmpQueueInboundState: CumulusPalletXcmpQueueInboundState;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    EthbloomBloom: EthbloomBloom;
    EthereumBlock: EthereumBlock;
    EthereumHeader: EthereumHeader;
    EthereumLog: EthereumLog;
    EthereumReceiptEip658ReceiptData: EthereumReceiptEip658ReceiptData;
    EthereumReceiptReceiptV3: EthereumReceiptReceiptV3;
    EthereumTransactionAccessListItem: EthereumTransactionAccessListItem;
    EthereumTransactionEip1559Transaction: EthereumTransactionEip1559Transaction;
    EthereumTransactionEip2930Transaction: EthereumTransactionEip2930Transaction;
    EthereumTransactionLegacyTransaction: EthereumTransactionLegacyTransaction;
    EthereumTransactionTransactionAction: EthereumTransactionTransactionAction;
    EthereumTransactionTransactionSignature: EthereumTransactionTransactionSignature;
    EthereumTransactionTransactionV2: EthereumTransactionTransactionV2;
    EthereumTypesHashH64: EthereumTypesHashH64;
    EvmCoreErrorExitError: EvmCoreErrorExitError;
    EvmCoreErrorExitFatal: EvmCoreErrorExitFatal;
    EvmCoreErrorExitReason: EvmCoreErrorExitReason;
    EvmCoreErrorExitRevert: EvmCoreErrorExitRevert;
    EvmCoreErrorExitSucceed: EvmCoreErrorExitSucceed;
    FpRpcTransactionStatus: FpRpcTransactionStatus;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleCall: OrmlTokensModuleCall;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlTokensReserveData: OrmlTokensReserveData;
    OrmlVestingModuleCall: OrmlVestingModuleCall;
    OrmlVestingModuleError: OrmlVestingModuleError;
    OrmlVestingModuleEvent: OrmlVestingModuleEvent;
    OrmlVestingVestingSchedule: OrmlVestingVestingSchedule;
    OrmlXtokensModuleCall: OrmlXtokensModuleCall;
    OrmlXtokensModuleError: OrmlXtokensModuleError;
    OrmlXtokensModuleEvent: OrmlXtokensModuleEvent;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReleases: PalletBalancesReleases;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletCommonError: PalletCommonError;
    PalletCommonEvent: PalletCommonEvent;
    PalletConfigurationCall: PalletConfigurationCall;
    PalletEthereumCall: PalletEthereumCall;
    PalletEthereumError: PalletEthereumError;
    PalletEthereumEvent: PalletEthereumEvent;
    PalletEthereumFakeTransactionFinalizer: PalletEthereumFakeTransactionFinalizer;
    PalletEvmAccountBasicCrossAccountIdRepr: PalletEvmAccountBasicCrossAccountIdRepr;
    PalletEvmCall: PalletEvmCall;
    PalletEvmCoderSubstrateError: PalletEvmCoderSubstrateError;
    PalletEvmContractHelpersError: PalletEvmContractHelpersError;
    PalletEvmContractHelpersEvent: PalletEvmContractHelpersEvent;
    PalletEvmContractHelpersSponsoringModeT: PalletEvmContractHelpersSponsoringModeT;
    PalletEvmError: PalletEvmError;
    PalletEvmEvent: PalletEvmEvent;
    PalletEvmMigrationCall: PalletEvmMigrationCall;
    PalletEvmMigrationError: PalletEvmMigrationError;
    PalletForeignAssetsAssetIds: PalletForeignAssetsAssetIds;
    PalletForeignAssetsNativeCurrency: PalletForeignAssetsNativeCurrency;
    PalletFungibleError: PalletFungibleError;
    PalletInflationCall: PalletInflationCall;
    PalletNonfungibleError: PalletNonfungibleError;
    PalletNonfungibleItemData: PalletNonfungibleItemData;
    PalletStructureCall: PalletStructureCall;
    PalletStructureError: PalletStructureError;
    PalletStructureEvent: PalletStructureEvent;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletTemplateTransactionPaymentCall: PalletTemplateTransactionPaymentCall;
    PalletTemplateTransactionPaymentChargeTransactionPayment: PalletTemplateTransactionPaymentChargeTransactionPayment;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUniqueCall: PalletUniqueCall;
    PalletUniqueError: PalletUniqueError;
    PalletUniqueRawEvent: PalletUniqueRawEvent;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PhantomTypeUpDataStructs: PhantomTypeUpDataStructs;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesXcmpMessageFormat: PolkadotParachainPrimitivesXcmpMessageFormat;
    PolkadotPrimitivesV2AbridgedHostConfiguration: PolkadotPrimitivesV2AbridgedHostConfiguration;
    PolkadotPrimitivesV2AbridgedHrmpChannel: PolkadotPrimitivesV2AbridgedHrmpChannel;
    PolkadotPrimitivesV2PersistedValidationData: PolkadotPrimitivesV2PersistedValidationData;
    PolkadotPrimitivesV2UpgradeRestriction: PolkadotPrimitivesV2UpgradeRestriction;
    RmrkTraitsBaseBaseInfo: RmrkTraitsBaseBaseInfo;
    RmrkTraitsCollectionCollectionInfo: RmrkTraitsCollectionCollectionInfo;
    RmrkTraitsNftAccountIdOrCollectionNftTuple: RmrkTraitsNftAccountIdOrCollectionNftTuple;
    RmrkTraitsNftNftChild: RmrkTraitsNftNftChild;
    RmrkTraitsNftNftInfo: RmrkTraitsNftNftInfo;
    RmrkTraitsNftRoyaltyInfo: RmrkTraitsNftRoyaltyInfo;
    RmrkTraitsPartEquippableList: RmrkTraitsPartEquippableList;
    RmrkTraitsPartFixedPart: RmrkTraitsPartFixedPart;
    RmrkTraitsPartPartType: RmrkTraitsPartPartType;
    RmrkTraitsPartSlotPart: RmrkTraitsPartSlotPart;
    RmrkTraitsPropertyPropertyInfo: RmrkTraitsPropertyPropertyInfo;
    RmrkTraitsResourceBasicResource: RmrkTraitsResourceBasicResource;
    RmrkTraitsResourceComposableResource: RmrkTraitsResourceComposableResource;
    RmrkTraitsResourceResourceInfo: RmrkTraitsResourceResourceInfo;
    RmrkTraitsResourceResourceTypes: RmrkTraitsResourceResourceTypes;
    RmrkTraitsResourceSlotResource: RmrkTraitsResourceSlotResource;
    RmrkTraitsTheme: RmrkTraitsTheme;
    RmrkTraitsThemeThemeProperty: RmrkTraitsThemeThemeProperty;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpRuntimeArithmeticError: SpRuntimeArithmeticError;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    UniqueRuntimeRuntime: UniqueRuntimeRuntime;
    UpDataStructsAccessMode: UpDataStructsAccessMode;
    UpDataStructsCollection: UpDataStructsCollection;
    UpDataStructsCollectionLimits: UpDataStructsCollectionLimits;
    UpDataStructsCollectionMode: UpDataStructsCollectionMode;
    UpDataStructsCollectionPermissions: UpDataStructsCollectionPermissions;
    UpDataStructsCollectionStats: UpDataStructsCollectionStats;
    UpDataStructsCreateCollectionData: UpDataStructsCreateCollectionData;
    UpDataStructsCreateFungibleData: UpDataStructsCreateFungibleData;
    UpDataStructsCreateItemData: UpDataStructsCreateItemData;
    UpDataStructsCreateItemExData: UpDataStructsCreateItemExData;
    UpDataStructsCreateNftData: UpDataStructsCreateNftData;
    UpDataStructsCreateNftExData: UpDataStructsCreateNftExData;
    UpDataStructsCreateReFungibleData: UpDataStructsCreateReFungibleData;
    UpDataStructsCreateRefungibleExMultipleOwners: UpDataStructsCreateRefungibleExMultipleOwners;
    UpDataStructsCreateRefungibleExSingleOwner: UpDataStructsCreateRefungibleExSingleOwner;
    UpDataStructsNestingPermissions: UpDataStructsNestingPermissions;
    UpDataStructsOwnerRestrictedSet: UpDataStructsOwnerRestrictedSet;
    UpDataStructsProperties: UpDataStructsProperties;
    UpDataStructsPropertiesMapBoundedVec: UpDataStructsPropertiesMapBoundedVec;
    UpDataStructsPropertiesMapPropertyPermission: UpDataStructsPropertiesMapPropertyPermission;
    UpDataStructsProperty: UpDataStructsProperty;
    UpDataStructsPropertyKeyPermission: UpDataStructsPropertyKeyPermission;
    UpDataStructsPropertyPermission: UpDataStructsPropertyPermission;
    UpDataStructsPropertyScope: UpDataStructsPropertyScope;
    UpDataStructsRpcCollection: UpDataStructsRpcCollection;
    UpDataStructsRpcCollectionFlags: UpDataStructsRpcCollectionFlags;
    UpDataStructsSponsoringRateLimit: UpDataStructsSponsoringRateLimit;
    UpDataStructsSponsorshipStateAccountId32: UpDataStructsSponsorshipStateAccountId32;
    UpDataStructsSponsorshipStateBasicCrossAccountIdRepr: UpDataStructsSponsorshipStateBasicCrossAccountIdRepr;
    UpDataStructsTokenChild: UpDataStructsTokenChild;
    UpDataStructsTokenData: UpDataStructsTokenData;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV0Junction: XcmV0Junction;
    XcmV0JunctionBodyId: XcmV0JunctionBodyId;
    XcmV0JunctionBodyPart: XcmV0JunctionBodyPart;
    XcmV0JunctionNetworkId: XcmV0JunctionNetworkId;
    XcmV0MultiAsset: XcmV0MultiAsset;
    XcmV0MultiLocation: XcmV0MultiLocation;
    XcmV0Order: XcmV0Order;
    XcmV0OriginKind: XcmV0OriginKind;
    XcmV0Response: XcmV0Response;
    XcmV0Xcm: XcmV0Xcm;
    XcmV1Junction: XcmV1Junction;
    XcmV1MultiAsset: XcmV1MultiAsset;
    XcmV1MultiLocation: XcmV1MultiLocation;
    XcmV1MultiassetAssetId: XcmV1MultiassetAssetId;
    XcmV1MultiassetAssetInstance: XcmV1MultiassetAssetInstance;
    XcmV1MultiassetFungibility: XcmV1MultiassetFungibility;
    XcmV1MultiassetMultiAssetFilter: XcmV1MultiassetMultiAssetFilter;
    XcmV1MultiassetMultiAssets: XcmV1MultiassetMultiAssets;
    XcmV1MultiassetWildFungibility: XcmV1MultiassetWildFungibility;
    XcmV1MultiassetWildMultiAsset: XcmV1MultiassetWildMultiAsset;
    XcmV1MultilocationJunctions: XcmV1MultilocationJunctions;
    XcmV1Order: XcmV1Order;
    XcmV1Response: XcmV1Response;
    XcmV1Xcm: XcmV1Xcm;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2TraitsOutcome: XcmV2TraitsOutcome;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmVersionedMultiAsset: XcmVersionedMultiAsset;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
