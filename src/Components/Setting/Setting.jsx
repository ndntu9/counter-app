import clsx from "clsx";
import styles from "./Setting.module.css";

function Setting({
    count,
    isLimitOn,
    maximumValue,
    onSetCount,
    onShowChange,
    onLimitChange,
    onMaximumValueChange
}) {
    return (
        <section
            className={clsx(styles.setting)}
            onClick={() => {
                onShowChange("setting");
            }}
        >
            <div className={clsx(styles["setting__wrapper"])}>
                <button className={clsx(styles["setting__btn-close"])}>
                    <i
                        className={clsx(
                            styles["setting__btn-close-icon"],
                            "fa-solid fa-xmark"
                        )}
                    ></i>
                </button>

                <div
                    className={clsx(styles["setting__group-wrapper"])}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className={clsx(styles["setting__group"])}>
                        <p className={clsx(styles["setting__group-title"])}>
                            Set count
                        </p>
                        <input
                            type="number"
                            value={count}
                            className={clsx(styles["setting__group-input"])}
                            onChange={onSetCount}
                        />
                    </div>
                </div>

                <div
                    className={clsx(styles["setting__group-wrapper"])}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className={clsx(styles["setting__group"])}>
                        <p className={clsx(styles["setting__group-title"])}>
                            Limits Off / On
                        </p>
                        <button
                            className={clsx(styles["setting__group-toggle"])}
                            limit-setting={isLimitOn ? "on" : "off"}
                            onClick={onLimitChange}
                        >
                            <span
                                className={clsx(
                                    styles["setting__group-slider"]
                                )}
                            ></span>
                        </button>
                    </div>
                    {isLimitOn && (
                        <div className={clsx(styles["setting__group"])}>
                            <p className={clsx(styles["setting__group-title"])}>
                                Maximum
                            </p>
                            <input
                                type="number"
                                className={clsx(styles["setting__group-input"])}
                                value={maximumValue}
                                onChange={onMaximumValueChange}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Setting;
