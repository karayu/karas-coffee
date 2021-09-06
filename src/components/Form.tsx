import React from 'react';
import cx from 'classnames';

export type DividerProps = {
  children: string;
};

export function Divider({ children }: DividerProps) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-gray-500">{children}</span>
      </div>
    </div>
  );
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
}

export function Input({ id, label, value, onChange, error, ...props }: InputProps) {
  return (
    <div>
      {!!label && <Label id={id}>{label}</Label>}
      <input
        {...props}
        id={id}
        name={id}
        value={value}
        className={cx('bg-white w-full px-2 py-1 border rounded focus:outline-none', {
          'focus:border-gray-500': !error,
          'border-red-500': !!error,
        })}
        onChange={onChange}
      />
      {!!error && <Error>{error}</Error>}
    </div>
  );
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  value: string | number;
  rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  error?: string;
}

export function TextArea({ id, label, value, onChange, error, ...props }: TextAreaProps) {
  return (
    <div>
      {!!label && <Label id={id}>{label}</Label>}
      <textarea
        {...props}
        id={id}
        name={id}
        value={value}
        className={cx('bg-white w-full px-2 py-1 border rounded focus:outline-none', {
          'focus:border-gray-500': !error,
          'border-red-500': !!error,
        })}
        onChange={onChange}
      />
      {!!error && <Error>{error}</Error>}
    </div>
  );
}

export function Label({ id, children }: { id: string; children: string }) {
  return (
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {children}
    </label>
  );
}

export function Error({ children }: { children: string }) {
  return <p className="mt-2 text-xs text-red-500">{children}</p>;
}
