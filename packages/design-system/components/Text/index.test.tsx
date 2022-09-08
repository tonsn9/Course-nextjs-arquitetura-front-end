import { Text } from "./index";
import { customRender } from "@alura/test-commons/react-testing-libary";

const render = customRender();

describe("<Text />", () => {
  it("renders h1 tag", () => {
    const { container } = render(<Text tag="h1">Sample Text</Text>);

    expext(containar).toMatchInlineSnapshot();
  });
});
