import HomeIcon from "@mui/icons-material/Home";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {vi} from "vitest";
import NavigationItem from "./NavigationItem";


const onClick = vi.fn()

const TEST_PROPS = {
    title: "test title",
    path: "test/path",
    Icon: HomeIcon,
    onClick,
};
describe("NavigationItem", () => {
    it.skip("should render correctly",  () => {
        render(<NavigationItem {...TEST_PROPS}/>);
        const navItem = screen.getByText("test title");
        // expect(navItem).toHaveTextContent("test title");
        userEvent.click(navItem)
        expect(onClick).toHaveBeenCalledTimes(1)
    });
});
