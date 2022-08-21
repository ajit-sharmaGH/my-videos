import "./chips.css";
import { useVideo } from "../../context/videosContext";
const ChipComponent = () => {
  const { state, dispatch } = useVideo();
  return (
    <div className="chips-container flex-row bg-theme-changer">
      <div
        className={`category-chips cursor ${
          state.currentCategory === "All" && "chip-default"
        }`}
        onClick={() =>
          dispatch({
            type: "SET_CURRENT_CATEGORY",
            payload: "All",
          })
        }
      >
        All
      </div>
      
        {state.categoryList.map((item) => {
          return (
            <div
              className={`category-chips flex cursor ${
                state.currentCategory === item.categoryName && "chip-default"
              }`}
              key={item._id}
              onClick={() => {
                dispatch({
                  type: "SET_CURRENT_CATEGORY",
                  payload: item.categoryName,
                });
              }}
            >
              {item.categoryName}
            </div>
          );
            })}
      </div>
   
  );
};
export { ChipComponent };
