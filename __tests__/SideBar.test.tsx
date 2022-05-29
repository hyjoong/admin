import SideBar from "@components/SideBar/SideBar";
import { render } from "@testing-library/react";

describe("SideBar", () => {
  const renderDate = () => {
    return render(<SideBar />);
  };
  it("SideBar가 렌더링 된다.", () => {
    const { container } = renderDate();
    expect(container).toHaveTextContent("서비스");
  });
});
