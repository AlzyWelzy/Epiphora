// import tailwindStyles from "../styles/styles";
import Logo from "../assets/logo.svg";

interface HeaderProps {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ showForm, setShowForm }: HeaderProps) {
  const appTitle = "Today I Learned";

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>{appTitle}</h1>
      </div>
      <button
        className={"btn btn-large btn-open"}
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a Fact"}
      </button>
    </header>
  );
}
