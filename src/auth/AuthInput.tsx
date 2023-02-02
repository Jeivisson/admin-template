interface InputAuthProps {
  label: string;
  value: any;
  ChangeValue: (newValue: any) => void;
  type?: 'text' | 'email' | 'password';
  requiered?: boolean;
  DoNotRender?: boolean;
}
export default function AuthInput(props: InputAuthProps) {
  return props.DoNotRender ? null : (
    <div className={`flex flex-col mt-4`}>
      <label htmlFor="">{props.label}</label>
      <input
        className={`px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white`}
        type={props.type ?? 'text'}
        value={props.value}
        onChange={(e) => props.ChangeValue?.(e.target.value)}
        required={props.requiered}
      />
    </div>
  );
}
