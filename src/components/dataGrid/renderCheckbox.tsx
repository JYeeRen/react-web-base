import { Checkbox, CheckboxProps } from "antd";
import { RenderCheckboxProps } from "react-data-grid";

export function renderCheckbox({ onChange, ...props }: RenderCheckboxProps) {
  const handleChange: CheckboxProps["onChange"] = (e) => {
    onChange(e.target.checked, e.nativeEvent.shiftKey);
  };

  return <Checkbox {...props} onChange={handleChange} />;
}
