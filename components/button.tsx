import Image from "next/image";

interface ButtonProps {
  label: string;
  callBack: () => void;
  icon?: string;
  variant: "btn_dark_green";
}

const Button = ({ label, callBack, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flex gap-3 rounded-full border cursor-pointer ${variant}`}
      onClick={callBack}
    >
      {icon && <Image src={icon} alt={label} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap ">{label}</label>
    </button>
  );
};

export default Button;
