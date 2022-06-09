import DashHeader from "@components/Dashboard/DashHeader";
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";

describe("DashBoardHeader", () => {
  const renderDate = () => {
    return render(
      <RecoilRoot>
        <DashHeader />
      </RecoilRoot>
    );
  };
  it("DashBoardHeader가 렌더링 된다.", () => {
    const { container } = renderDate();
    expect(container).toHaveTextContent("대시보드");
  });
});
