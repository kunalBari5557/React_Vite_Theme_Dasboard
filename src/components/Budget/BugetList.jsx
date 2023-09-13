import { useDispatch, useSelector } from "react-redux";
import ContentTop from "../ContentTop/ContentTop";
import { fetchUsers } from "../../redux/features/Budget";
import { useEffect } from "react";

function BudgetList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.usersState.users);
  console.log("data", data);

  useEffect(() => {
    dispatch(fetchUsers()); // Dispatch the fetch action when the component mounts
  }, [dispatch]);
  return (
    <div className="main-content">
      <ContentTop />
      <span style={{ color: "white" }}>Hellooo</span>
    </div>
  );
}

export default BudgetList;
