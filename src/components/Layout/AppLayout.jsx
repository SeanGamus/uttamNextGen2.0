import { Headers } from "../UI/Headers";
import { Footers } from "../UI/Footers";
import { Outlet } from "react-router-dom";
import { BubbleCursor } from "../UI/bubblecursor";
import { BubblesBackground } from "../UI/bubblesBackground";

export const AppLayout = () => {
    return (
        <>
            <Headers />
            <BubbleCursor />
            <BubblesBackground />
            <Outlet />
            <Footers />
        </>
    );
};