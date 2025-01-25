export interface ButtonProps {
  children: React.ReactNode;
  style: "primary" | "secondary" ;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
