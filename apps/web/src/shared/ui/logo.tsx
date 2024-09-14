import logo from "@shared/assets/logo.png";

export const Logo: React.FC = () => {
	return (
		<img src={logo} alt="Логотип" className="w-14 h-auto rounded-full" />
	);
};
