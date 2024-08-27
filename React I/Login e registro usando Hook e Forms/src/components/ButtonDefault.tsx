interface ButtonDefaultProps {
  label: string;
  action?: 'submit';
}

function ButtonDefault({ action, label }: ButtonDefaultProps) {
  return <button type={action}>{label}</button>;
}

export default ButtonDefault;
