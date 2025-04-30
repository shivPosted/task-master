function Button({ handleClick = () => {}, children, className }) {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
export default Button;
