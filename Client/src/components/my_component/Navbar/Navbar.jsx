import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../../../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "flowbite-react";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate("/SignIn");
    } else {
      dispatch(loadUser());
    }
  }, [dispatch, token, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/SignIn");
  };

  return (
    <div>
      <nav className="mr-40 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
              bordered
              className="h-10 w-10 rounded-full border border-white shadow-2xl"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mr-48 rounded-md bg-blue-600 p-3 shadow-2xl">
            <div>
              <h1 className="text-xl font-semibold text-white/80">
                {user?.name}
              </h1>
              <h5 className="text-base text-white/70">{user?.email}</h5>
              <p className="text-base text-white/70">{user?.role}</p>
            </div>
            <DropdownMenuItem></DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-none">
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  );
}

export default Navbar;
