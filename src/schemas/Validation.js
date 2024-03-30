import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().min(2).max(30).required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  message: Yup.string().min(5).max(100).required("please enter your message"),
});
