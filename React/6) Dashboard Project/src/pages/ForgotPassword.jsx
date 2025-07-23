import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const initialValues = {
    email: "",
  };
  const forgetSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: forgetSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await sendPasswordResetEmail(auth, values.email);
        toast("Reset Email has been send to your email.");
        formik.resetForm();
        navigate("/login");
      } catch (error) {
        toast(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>
            Enter your email address and we'll send you a link to reset your
            password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <span className="text-red-500 text-[12px]">
                  {formik.errors.email}
                </span>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            onClick={() => {
              formik.submitForm();
            }}
            className="w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
          <p className="text-sm text-center">
            Remember your password?{" "}
            <Link to={"/login"} className="underline">
              Back to login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ForgotPassword;
