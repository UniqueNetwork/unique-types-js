//@ts-nocheck
// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmCall, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, EthbloomBloom, EthereumBlock, EthereumHeader, EthereumLog, EthereumReceiptEip658ReceiptData, EthereumReceiptReceiptV3, EthereumTransactionAccessListItem, EthereumTransactionEip1559Transaction, EthereumTransactionEip2930Transaction, EthereumTransactionLegacyTransaction, EthereumTransactionTransactionAction, EthereumTransactionTransactionSignature, EthereumTransactionTransactionV2, EthereumTypesHashH64, EvmCoreErrorExitError, EvmCoreErrorExitFatal, EvmCoreErrorExitReason, EvmCoreErrorExitRevert, EvmCoreErrorExitSucceed, FpRpcTransactionStatus, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportPalletId, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, OpalRuntimeRuntime, OpalRuntimeRuntimeCommonIdentityDisableIdentityCalls, OpalRuntimeRuntimeCommonMaintenanceCheckMaintenance, OpalRuntimeRuntimeCommonSessionKeys, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleCall, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, OrmlVestingModuleCall, OrmlVestingModuleError, OrmlVestingModuleEvent, OrmlVestingVestingSchedule, OrmlXtokensModuleCall, OrmlXtokensModuleError, OrmlXtokensModuleEvent, PalletAppPromotionCall, PalletAppPromotionError, PalletAppPromotionEvent, PalletAuthorshipCall, PalletAuthorshipError, PalletAuthorshipUncleEntryItem, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReserveData, PalletCollatorSelectionCall, PalletCollatorSelectionError, PalletCollatorSelectionEvent, PalletCommonError, PalletCommonEvent, PalletConfigurationAppPromotionConfiguration, PalletConfigurationCall, PalletConfigurationError, PalletConfigurationEvent, PalletEthereumCall, PalletEthereumError, PalletEthereumEvent, PalletEthereumFakeTransactionFinalizer, PalletEvmAccountBasicCrossAccountIdRepr, PalletEvmCall, PalletEvmCoderSubstrateError, PalletEvmContractHelpersError, PalletEvmContractHelpersEvent, PalletEvmContractHelpersSponsoringModeT, PalletEvmError, PalletEvmEvent, PalletEvmMigrationCall, PalletEvmMigrationError, PalletEvmMigrationEvent, PalletForeignAssetsAssetIds, PalletForeignAssetsModuleAssetMetadata, PalletForeignAssetsModuleCall, PalletForeignAssetsModuleError, PalletForeignAssetsModuleEvent, PalletForeignAssetsNativeCurrency, PalletFungibleError, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletInflationCall, PalletMaintenanceCall, PalletMaintenanceError, PalletMaintenanceEvent, PalletNonfungibleError, PalletNonfungibleItemData, PalletPreimageCall, PalletPreimageError, PalletPreimageEvent, PalletPreimageRequestStatus, PalletRefungibleError, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletStructureCall, PalletStructureError, PalletStructureEvent, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTemplateTransactionPaymentCall, PalletTemplateTransactionPaymentChargeTransactionPayment, PalletTestUtilsCall, PalletTestUtilsError, PalletTestUtilsEvent, PalletTimestampCall, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUniqueCall, PalletUniqueError, PalletXcmCall, PalletXcmError, PalletXcmEvent, PhantomTypeUpDataStructs, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2AbridgedHrmpChannel, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, SpArithmeticArithmeticError, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpRuntimeBlakeTwo256, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeHeader, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionValidityInvalidTransaction, SpRuntimeTransactionValidityTransactionValidityError, SpRuntimeTransactionValidityUnknownTransaction, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, UpDataStructsAccessMode, UpDataStructsCollection, UpDataStructsCollectionLimits, UpDataStructsCollectionMode, UpDataStructsCollectionPermissions, UpDataStructsCollectionStats, UpDataStructsCreateCollectionData, UpDataStructsCreateFungibleData, UpDataStructsCreateItemData, UpDataStructsCreateItemExData, UpDataStructsCreateNftData, UpDataStructsCreateNftExData, UpDataStructsCreateReFungibleData, UpDataStructsCreateRefungibleExMultipleOwners, UpDataStructsCreateRefungibleExSingleOwner, UpDataStructsNestingPermissions, UpDataStructsOwnerRestrictedSet, UpDataStructsProperties, UpDataStructsPropertiesMapBoundedVec, UpDataStructsPropertiesMapPropertyPermission, UpDataStructsProperty, UpDataStructsPropertyKeyPermission, UpDataStructsPropertyPermission, UpDataStructsPropertyScope, UpDataStructsRpcCollection, UpDataStructsRpcCollectionFlags, UpDataStructsSponsoringRateLimit, UpDataStructsSponsorshipStateAccountId32, UpDataStructsSponsorshipStateBasicCrossAccountIdRepr, UpDataStructsTokenChild, UpDataStructsTokenData, UpPovEstimateRpcPovInfo, UpPovEstimateRpcTrieKeyValue, XcmDoubleEncoded, XcmV0Junction, XcmV0JunctionBodyId, XcmV0JunctionBodyPart, XcmV0JunctionNetworkId, XcmV0MultiAsset, XcmV0MultiLocation, XcmV0Order, XcmV0OriginKind, XcmV0Response, XcmV0Xcm, XcmV1Junction, XcmV1MultiAsset, XcmV1MultiLocation, XcmV1MultiassetAssetId, XcmV1MultiassetAssetInstance, XcmV1MultiassetFungibility, XcmV1MultiassetMultiAssetFilter, XcmV1MultiassetMultiAssets, XcmV1MultiassetWildFungibility, XcmV1MultiassetWildMultiAsset, XcmV1MultilocationJunctions, XcmV1Order, XcmV1Response, XcmV1Xcm, XcmV2Instruction, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2WeightLimit, XcmV2Xcm, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm } from '@polkadot/types/lookup';

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
    OpalRuntimeRuntime: OpalRuntimeRuntime;
    OpalRuntimeRuntimeCommonIdentityDisableIdentityCalls: OpalRuntimeRuntimeCommonIdentityDisableIdentityCalls;
    OpalRuntimeRuntimeCommonMaintenanceCheckMaintenance: OpalRuntimeRuntimeCommonMaintenanceCheckMaintenance;
    OpalRuntimeRuntimeCommonSessionKeys: OpalRuntimeRuntimeCommonSessionKeys;
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
    PalletAppPromotionCall: PalletAppPromotionCall;
    PalletAppPromotionError: PalletAppPromotionError;
    PalletAppPromotionEvent: PalletAppPromotionEvent;
    PalletAuthorshipCall: PalletAuthorshipCall;
    PalletAuthorshipError: PalletAuthorshipError;
    PalletAuthorshipUncleEntryItem: PalletAuthorshipUncleEntryItem;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletCollatorSelectionCall: PalletCollatorSelectionCall;
    PalletCollatorSelectionError: PalletCollatorSelectionError;
    PalletCollatorSelectionEvent: PalletCollatorSelectionEvent;
    PalletCommonError: PalletCommonError;
    PalletCommonEvent: PalletCommonEvent;
    PalletConfigurationAppPromotionConfiguration: PalletConfigurationAppPromotionConfiguration;
    PalletConfigurationCall: PalletConfigurationCall;
    PalletConfigurationError: PalletConfigurationError;
    PalletConfigurationEvent: PalletConfigurationEvent;
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
    PalletEvmMigrationEvent: PalletEvmMigrationEvent;
    PalletForeignAssetsAssetIds: PalletForeignAssetsAssetIds;
    PalletForeignAssetsModuleAssetMetadata: PalletForeignAssetsModuleAssetMetadata;
    PalletForeignAssetsModuleCall: PalletForeignAssetsModuleCall;
    PalletForeignAssetsModuleError: PalletForeignAssetsModuleError;
    PalletForeignAssetsModuleEvent: PalletForeignAssetsModuleEvent;
    PalletForeignAssetsNativeCurrency: PalletForeignAssetsNativeCurrency;
    PalletFungibleError: PalletFungibleError;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletInflationCall: PalletInflationCall;
    PalletMaintenanceCall: PalletMaintenanceCall;
    PalletMaintenanceError: PalletMaintenanceError;
    PalletMaintenanceEvent: PalletMaintenanceEvent;
    PalletNonfungibleError: PalletNonfungibleError;
    PalletNonfungibleItemData: PalletNonfungibleItemData;
    PalletPreimageCall: PalletPreimageCall;
    PalletPreimageError: PalletPreimageError;
    PalletPreimageEvent: PalletPreimageEvent;
    PalletPreimageRequestStatus: PalletPreimageRequestStatus;
    PalletRefungibleError: PalletRefungibleError;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletStructureCall: PalletStructureCall;
    PalletStructureError: PalletStructureError;
    PalletStructureEvent: PalletStructureEvent;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletTemplateTransactionPaymentCall: PalletTemplateTransactionPaymentCall;
    PalletTemplateTransactionPaymentChargeTransactionPayment: PalletTemplateTransactionPaymentChargeTransactionPayment;
    PalletTestUtilsCall: PalletTestUtilsCall;
    PalletTestUtilsError: PalletTestUtilsError;
    PalletTestUtilsEvent: PalletTestUtilsEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUniqueCall: PalletUniqueCall;
    PalletUniqueError: PalletUniqueError;
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
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpRuntimeBlakeTwo256: SpRuntimeBlakeTwo256;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeHeader: SpRuntimeHeader;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionValidityInvalidTransaction: SpRuntimeTransactionValidityInvalidTransaction;
    SpRuntimeTransactionValidityTransactionValidityError: SpRuntimeTransactionValidityTransactionValidityError;
    SpRuntimeTransactionValidityUnknownTransaction: SpRuntimeTransactionValidityUnknownTransaction;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
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
    UpPovEstimateRpcPovInfo: UpPovEstimateRpcPovInfo;
    UpPovEstimateRpcTrieKeyValue: UpPovEstimateRpcTrieKeyValue;
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
