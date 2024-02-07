import { useSelector } from "react-redux";
import { RootState } from "../store";

const useCurrentUser = () => {
  const currentUser = useSelector((state: RootState) => state.user.user);
  return currentUser;
};
export default useCurrentUser;
