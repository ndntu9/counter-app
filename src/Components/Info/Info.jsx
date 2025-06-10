import clsx from "clsx";
import styles from "./Info.module.css";

function Info({ onShowChange }) {
    return (
        <section
            className={clsx(styles.info)}
            onClick={() => {
                onShowChange("info");
            }}
        >
            <div className={clsx(styles["info__wrapper"])}>
                <button className={clsx(styles["info__btn-close"])}>
                    <i
                        className={clsx(
                            styles["info__btn-close-icon"],
                            "fa-solid fa-xmark"
                        )}
                    ></i>
                </button>
                <h1 className={clsx(styles["info__title"])}>Simple Counter</h1>
                <p className={clsx(styles["info__content"])}>
                    A simple tool for counting things and keeping track of
                    numbers.{" "}
                    <a href="/" className={clsx(styles["info__url"])}>
                        Learn more
                    </a>
                </p>
                <button
                    className={clsx(styles["info__btn-donate"])}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    Buy me a coffee{" "}
                    <i
                        className={clsx(
                            styles["info__btn-donate-icon"],
                            "fa-solid fa-heart"
                        )}
                    ></i>
                </button>
                <p>
                    By{" "}
                    <a href="/" className={clsx(styles["info__url"])}>
                        ndntu9
                    </a>{" "}
                    😍
                </p>
            </div>
        </section>
    );
}

export default Info;
