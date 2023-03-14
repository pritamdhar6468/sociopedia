import { useState } from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from "@mui/material";
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close
} from "@mui/icons-material";
import { useDispatch,useSelector } from "react-redux";
import { setMode,setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/flexbetween";

const Navbar =()=>{
    const [isMobileMenuToggled, setisMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = userSelector((state)=> state.user);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark =theme.palette.neutral.dark;
    const background =theme.palette.background.default;
    const alt =theme.palette.background.alt;

    const fullName = `${user.firstName} ${user.lastName}`


};

export default Navbar;