import DashHeader from "@components/Dashboard/DashHeader";
import { render } from "@testing-library/react";

describe("DashBoardHeader", () => {
  const renderDate = () => {
    return render(<DashHeader />);
  };
  it("DashBoardHeader가 렌더링 된다.", () => {
    const { container } = renderDate();
    expect(container).toHaveTextContent("대시보드");
  });
});
