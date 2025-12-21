import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Store/userSlice";
import { signOutButton } from "../Store/loginslice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SignOutBrowse = useSelector((store) => store.login.signOutBrowse);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
        dispatch(signOutButton());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute top-0 left-0 w-full h-30 bg-linear-to-b from-black/80 flex justify-between p-4">
      <img
        className="w-60 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {SignOutBrowse && (
        <div className="flex justify-between  gap-6">
          <img
            className="w-16 h-16    my-auto"
            src="https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
          />
          <button
            onClick={handleSignOut}
            className="h-12 w-26 text-white my-auto bg-red-500 text-xl rounded-lg cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
