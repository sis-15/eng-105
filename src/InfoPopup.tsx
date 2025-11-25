import type { FC } from 'react';
import type { MenuItem } from './InfiniteMenu';
import ReactMarkdown from "react-markdown";

interface InfoPopupProps {
  item: MenuItem;
  onClose: () => void;
}

const InfoPopup: FC<InfoPopupProps> = ({ item, onClose }) => {
  return (
    <div className="info-popup">
      <button onClick={onClose}>Close</button>
      <h2>{item.title}</h2>
      <img src={item.image} width="100%" alt={item.title} />
      <p>Artist: {item.author}</p>
      <p>Medium: {item.medium} in {item.size}</p>
      <p>Date: {item.date}</p>
      {item.description.split('\n').map((line, i) => (
      <ReactMarkdown key={i}>{line}</ReactMarkdown>
      ))}
    </div>
  );
};

export default InfoPopup;