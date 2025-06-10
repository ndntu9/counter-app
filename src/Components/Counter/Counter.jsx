import { useState } from "react";
import clsx from "clsx";
import styles from "./Counter.module.css";
import Info from "../Info";
import Setting from "../Setting";
import Reset from "../Reset";

function Counter() {
    const [show, setShow] = useState({
        info: false,
        setting: false,
        reset: false
    });
    const [count, setCount] = useState(0);
    const [isLimitOn, setIsLimitOn] = useState(false);
    const [maximumValue, setMaximumValue] = useState();

    function handleCountIncrement() {
        if (!isLimitOn) {
            setCount(count + 1);
        } else {
            if (count < maximumValue) {
                setCount(count + 1);
            }
        }
    }

    function handleCountDecrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function handleSetCount(e) {
        setCount(parseInt(e.target.value));
    }

    function handleShowChange(element) {
        setShow({ ...show, [element]: !show[element] });
    }

    function handleLimitChange() {
        setIsLimitOn(!isLimitOn);
        setMaximumValue(0);
    }

    function handleMaximumValueChange(e) {
        setMaximumValue(e.target.value);
    }

    function handleResetClicked(e) {
        e.stopPropagation();

        setCount(0);
        setShow({ ...show, reset: false });
    }

    return (
        <div className={clsx(styles.main)}>
            <div className={clsx(styles.topbar)}>
                <button
                    className={clsx(styles["topbar__btn"])}
                    onClick={() => {
                        handleShowChange("info");
                    }}
                >
                    <i
                        className={clsx(
                            "fa-solid fa-circle-info",
                            styles["topbar__btn-icon"]
                        )}
                    ></i>
                </button>
                <button
                    className={clsx(styles["topbar__btn"])}
                    onClick={() => {
                        handleShowChange("setting");
                    }}
                >
                    <i
                        className={clsx(
                            "fa-solid fa-gear",
                            styles["topbar__btn-icon"]
                        )}
                    ></i>
                </button>
                <button
                    className={clsx(styles["topbar__btn"])}
                    onClick={() => {
                        handleShowChange("reset");
                    }}
                >
                    <i
                        className={clsx(
                            "fa-solid fa-rotate-right",
                            styles["topbar__btn-icon"]
                        )}
                    ></i>
                </button>
            </div>

            <div className={clsx(styles.screen)}>
                <button
                    className={clsx(
                        styles["screen__btn"],
                        count === 0 && styles["screen__btn-hidden"]
                    )}
                    onClick={handleCountDecrement}
                >
                    <i
                        className={clsx(
                            styles["screen__btn-icon"],
                            "fa-solid fa-minus"
                        )}
                    ></i>
                </button>
                <h2 className={clsx(styles["screen__count"])}>{count}</h2>
                <button
                    className={clsx(styles["screen__btn"])}
                    onClick={handleCountIncrement}
                >
                    <i
                        className={clsx(
                            styles["screen__btn-icon"],
                            "fa-solid fa-plus"
                        )}
                    ></i>
                </button>
            </div>

            {isLimitOn && (
                <div className={clsx(styles.limit)}>
                    <p className={clsx(styles["limit__number"])}>
                        {maximumValue - count}
                    </p>
                    <p className={clsx(styles["limit__title"])}>
                        {maximumValue == count ? "limit reach" : "available"}
                    </p>
                </div>
            )}

            {show.info && <Info onShowChange={handleShowChange} />}

            {show.setting && (
                <Setting
                    count={count}
                    onSetCount={handleSetCount}
                    isLimitOn={isLimitOn}
                    maximumValue={maximumValue}
                    onLimitChange={handleLimitChange}
                    onShowChange={handleShowChange}
                    onMaximumValueChange={handleMaximumValueChange}
                />
            )}

            {show.reset && (
                <Reset
                    onShowChange={handleShowChange}
                    onResetClicked={handleResetClicked}
                />
            )}
        </div>
    );
}

export default Counter;
