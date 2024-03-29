// Copyright 2019-2022 Unique Network (Gibraltar) Ltd.
// This file is part of Unique Network.

// Unique Network is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Unique Network is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Unique Network. If not, see <http://www.gnu.org/licenses/>.

type RpcParam = {
  name: string;
  type: string;
  isOptional?: true;
};

const CROSS_ACCOUNT_ID_TYPE = 'PalletEvmAccountBasicCrossAccountIdRepr';

const crossAccountParam = (name = 'account') => ({name, type: CROSS_ACCOUNT_ID_TYPE});
const atParam = {name: 'at', type: 'Hash', isOptional: true};

const fun = (description: string, params: RpcParam[], type: string) => ({
  description,
  params: [...params, atParam],
  type,
});

export default {
  types: {},
  rpc: {
    totalStaked: fun(
      'Returns the total amount of staked tokens',
      [{name: 'staker', type: CROSS_ACCOUNT_ID_TYPE, isOptional: true}],
      'u128',
    ),
    totalStakedPerBlock: fun(
      'Returns the total amount of staked tokens per block when staked',
      [crossAccountParam('staker')],
      'Vec<(u32, u128)>',
    ),
    pendingUnstake: fun(
      'Returns the total amount of unstaked tokens',
      [{name: 'staker', type: CROSS_ACCOUNT_ID_TYPE, isOptional: true}],
      'u128',
    ),
    pendingUnstakePerBlock: fun(
      'Returns the total amount of unstaked tokens per block',
      [crossAccountParam('staker')],
      'Vec<(u32, u128)>',
    ),
  },
};
