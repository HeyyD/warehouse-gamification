import IEquipment from "./IEquipment";

export default interface IUser {
  name: string;
  title: string;
  xp: number;
  lvl: number;
  boxesPicked: number;
  questsCompleted: number;
  equipment: IEquipment;
}
