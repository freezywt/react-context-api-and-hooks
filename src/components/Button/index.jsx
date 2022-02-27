import P from 'prop-types';

export const Button = ({ children, onButtonClick, disabled }) => {
  return (
    <button disabled={disabled} style={{ fontSize: '30px' }} onClick={onButtonClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
  disabled: P.bool,
};
