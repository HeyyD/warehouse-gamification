import IEquipment from "./IEquipment";
import IAvailableEquipment from "./IAvailableEquipment";
import IQuest from "./IQuest";

export default interface IUser {
  name: string;
  title: string;
  xp: number;
  lvl: number;
  boxesPicked: number;
  questsCompleted: number;
  quests: [IQuest];
  equipment: IEquipment;
  availableEquipment: IAvailableEquipment;
  isManager: boolean;
}
