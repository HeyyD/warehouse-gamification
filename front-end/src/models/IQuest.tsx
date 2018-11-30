export default interface IQuest {
  title: string;
  description: string;
  isComplete: boolean;
  // dueDate: Date;
  rewardExp: number;
  currentAmount: number;
  requiredAmount: number;
}
