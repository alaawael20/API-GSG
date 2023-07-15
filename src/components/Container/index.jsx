import './style.css';

export const Container = ({ children, noSpaces }) => {
  return (
    <div
      className={`main__container ${
        noSpaces ? '' : 'main__container--padding'
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
