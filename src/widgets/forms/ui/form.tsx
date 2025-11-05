// Set this component as a client component
"use client";
// Form Requirements
import { FormEvent } from "react";
import { useForm } from "../model";
// Form Props
interface Props {
  readonly id: string;
  readonly onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  readonly children: React.ReactNode;
  readonly className?: string;
}
// Form Main Function
function Form({ id, onSubmit, children, className }: Props) {
  // Form Main Hooks
  const { reference } = useForm(id);
  // Returns Form Component
  return (
    <form ref={reference} id={id} onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}

export default Form;
