export interface ReviewButtonProps {
  label: string;
  isActive?: boolean;

  onClick?: () => void;
}

export interface ReviewFilterProps {
  buttons: ReviewButtonProps[];
}
