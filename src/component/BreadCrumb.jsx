import { Link } from "react-router-dom";
export default function Breadcrumb({ list }) {
  return (
    <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
      {list.map((e, i) => (
        <li className="breadcrumb-item" key={i}>
          {i === list.length - 1 ? (
            <span className="text-gray-400">{e.title}</span>
          ) : (
            <Link className="text-gray-400" to={e.link}>
              {e.title}
            </Link>
          )}
        </li>
      ))}
    </ol>
  );
}
