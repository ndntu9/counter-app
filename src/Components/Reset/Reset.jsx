import clsx from "clsx";
import styles from "./Reset.module.css";

function Reset({ onShowChange }) {
    return (
        <section
            className={clsx(styles.reset)}
            onClick={() => {
                onShowChange("reset");
            }}
        >
            <div className={clsx(styles["reset__wrapper"])}>
                <button className={clsx(styles["reset__btn-close"])}>
                    <i
                        className={clsx(
                            styles["reset__btn-close-icon"],
                            "fa-solid fa-xmark"
                        )}
                    ></i>
                </button>

                <h1 className={clsx(styles["reset__title"])}>Reset counter?</h1>
                <button className={clsx(styles["reset__btn"])}>Yes</button>
                <button className={clsx(styles["reset__btn"])}>Cancel</button>
            </div>
        </section>
    );
}

export default Reset;
