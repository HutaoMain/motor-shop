export interface LoginInterface {
  email: string;
  password: string;
}

export interface RegistrationInterface {
  fullname: string;
  email: string;
  password: string;
}

export interface UserInterface {
  id: string;
  email: string;
  userRole: string;
}

export interface ProductInterface {
  id: string;
  productName: string;
  productImage: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
}

// reusable transition effect only
import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import { Slide } from "@mui/material";

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
