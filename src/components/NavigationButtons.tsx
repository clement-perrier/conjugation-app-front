import { Link } from "react-router-dom";

export default function NavigationButtons({ buttons }) {
  const buttonsElements = buttons.map((button, index) => (
    <div
      key={index}
      className="flex flex-col gap-5 w-full items-center text-center"
    >
      <Link to={button.link} className="w-full">
        <button className="w-1/3">{button.title}</button>
      </Link>
      <p className="w-3/4">{button.description}</p>
    </div>
  ));

  return (
    <div className="flex flex-col gap-16 h-full justify-center">
      {buttonsElements}
    </div>
  );
}
