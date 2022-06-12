import useFilterByCategory from "@hooks/useFilterByCategory";
import { renderHook } from "@testing-library/react-hooks";

const DAILYMOCKS = [
  {
    click: 559,
    conv: 37,
    convValue: 3668610,
    cost: 371790,
    cpa: 10048.38,
    cpc: 665.1,
    ctr: 1.09,
    cvr: 6.62,
    date: "2022-02-01",
    imp: 51479,
    roas: 986.74,
  },
  {
    click: 693,
    conv: 53,
    convValue: 3065225,
    cost: 407050,
    cpa: 7680.19,
    cpc: 587.37,
    ctr: 0.97,
    cvr: 7.65,
    date: "2022-02-03",
    imp: 71403,
    roas: 753.03,
  },
];

const CATEGORYCOST = "cost";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("useFilterByCategory", () => {
  it("Chart render test", () => {
    const { result } = renderHook(() =>
      useFilterByCategory({
        daily: DAILYMOCKS,
        category: CATEGORYCOST,
      })
    );

    const cost = result.current[0].y;
    expect(cost).toBe(DAILYMOCKS[0].cost);

    const date = result.current[0].x;
    expect(date).toBe(DAILYMOCKS[0].date);
  });
});
