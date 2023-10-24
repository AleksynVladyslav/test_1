import css from './Buttons.module.css';
export const Buttons = ({ buttons, onBgColorChange }) => {
  return (
    <ul className={css.list}>
      {buttons.map(button => {
        return (
          <li className={css.item} key={button}>
            <button
              className={css.button}
              type="button"
              onClick={onBgColorChange}
            >
              {button}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
