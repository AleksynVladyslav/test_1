import css from './Reset.module.css';

export const Reset = ({ onColorReset, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={css.reset}
      type="button"
      onClick={onColorReset}
    >
      Reset
    </button>
  );
};
