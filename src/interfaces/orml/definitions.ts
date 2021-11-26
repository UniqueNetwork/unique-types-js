function mkDummy(name: string) {
  return {
    ['dummy' + name]: 'u32',
  };
}

export default {
  types: {
    OrmlVestingVestingSchedule: mkDummy('VestingSchedule'),
  },
};
