export interface ButtonProps {
  children: React.ReactNode;
  style: "primary" | "secondary";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface UserValues {
  Name?: string;
  LastName?: string;
  email?: string;
  Number?: string;
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
}
interface User {
  Name: string;
  LastName: string;
  email: string;
  phone: string;
}
export interface UserInfoProps {
  userInfo: User;
}
