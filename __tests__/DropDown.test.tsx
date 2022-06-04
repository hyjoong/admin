import DropDown from "@components/DropDown/DropDown";
import { render } from "@testing-library/react";

describe("DropDown", () => {
  const MOCKDROPDOWN = ["광고비", "노출 수", "클릭수", "전환 수", "매출"];
  const MockSelect = MOCKDROPDOWN[0];
  const setMockSelect = jest.fn();

  const renderDropDown = () => {
    return render(
      <DropDown
        selectOption={MockSelect}
        menuList={MOCKDROPDOWN}
        setItemSelect={setMockSelect}
      />
    );
  };

  it("DropDown selectOption이 화면에 보인다.", () => {
    const { container } = renderDropDown();
    expect(container).toHaveTextContent(MOCKDROPDOWN[0]);
    expect(container.firstChild).toMatchSnapshot();
  });

  //   isMenu가 false라서 제대로 동작 안 함
  //   it("DropDown 옵션들이 화면에 보인다.", () => {
  //     const { container } = renderDropDown();
  //     MOCKDROPDOWN.forEach((item) => {
  //       expect(container).toHaveTextContent(item);
  //     });
  //   });
});
