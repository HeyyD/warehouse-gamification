import IEquipment from "./IEquipment";
import IAvailableEquipment from "./IAvailableEquipment";

export default interface IUser {
  name: string;
  title: string;
  xp: number;
  lvl: number;
  boxesPicked: number;
  questsCompleted: number;
  equipment: IEquipment;
  availableEquipment: IAvailableEquipment;
}
