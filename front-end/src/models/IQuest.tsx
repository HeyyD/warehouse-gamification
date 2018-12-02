export default interface IQuest {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
  dueDate: string;
  rewardExp: number;
  currentAmount: number;
  requiredAmount: number;
}
