import { DevicesToAdd } from "../Data/DevicesToAdd";

export const GetSpecificIcon = (identifierName) => {
  const icon = DevicesToAdd.filter((item) => item.name == identifierName);

  return icon;
};
