import globe from "../assets/globe.svg";

export default function Header() {
  return (
    <header>
      <div className="header-content-wrapper">
        <img src={globe} alt="A Globe" />
        <p>
          <strong>My Travel Journal</strong>
        </p>
      </div>
    </header>
  );
}
