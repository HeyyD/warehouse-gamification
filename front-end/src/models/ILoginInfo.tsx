import IQuest from "./IQuest";

export default interface ILoginInfo {
  username: string;
  password: string;
  level: number;
  xp: number;
  quests: [IQuest];
}
