// Set this component as a client component
"use client";
// Form Requirements
import React from "react";
import { useAlert, useForm } from "../model";
import Alert from "./alert";
import { OnSubmitType } from "../config/form";
// Form Props
interface Props {
  readonly id: string;
  readonly onSubmit: OnSubmitType;
  readonly children: React.ReactNode;
  readonly successAlertMessage: string;
  readonly className?: string;
}
// Form Main Function
function Form({ id, onSubmit, children, className, successAlertMessage }: Props) {
  // Form Main Hooks
  const { isOpen, type, title, message, onClick, UpdateSettings } = useAlert();
  const { reference, onSubmitComplete } = useForm(
    id,
    onSubmit,
    UpdateSettings,
    successAlertMessage,
  );
  // Returns Form Component
  return (
    <>
      <form ref={reference} id={id} onSubmit={onSubmitComplete} className={className}>
        {children}
      </form>
      {isOpen && <Alert type={type} title={title} message={message} onClick={onClick} />}
    </>
  );
}

export default Form;
