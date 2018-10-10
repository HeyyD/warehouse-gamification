declare module "rc-progress" {
  export interface ILineProps {
    strokeWidth?: number;
    strokeColor?: string;
    trailWidth?: number;
    trailColor?: string;
    className?: string;
    percent?: number;

  }
  export class Circle extends React.Component<ILineProps, {}> {
  }
}
