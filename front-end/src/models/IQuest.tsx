export default interface IQuest {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
  // dueDate: Date;
  rewardExp: number;
  currentAmount: number;
  requiredAmount: number;
}
