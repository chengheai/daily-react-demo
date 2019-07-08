import { Calendar } from 'antd';
function onPanelChange(value, mode) {
  console.log(value, mode);
}
export default function() {
  return <Calendar onPanelChange={onPanelChange} />;
}
