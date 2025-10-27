import "./TodoBtn.css";
const ToDoBtN = ({ text, onClick }) => {
  return <button onClick={onClick} className="todoBtn">{text}</button>;
};
export default ToDoBtN;
