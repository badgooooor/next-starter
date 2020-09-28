export type TestButtonProps = {
  text: string;
};

const TestButton = ({ text }: TestButtonProps) => (
  <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
    {text}
  </button>
);

export default TestButton;
