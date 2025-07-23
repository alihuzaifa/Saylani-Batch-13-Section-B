import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase";
import { useState } from "react";
import { toast } from "sonner";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import useAppStore from "../store";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserId } = useAppStore();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const checkUser = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        if (checkUser) {
          // const { user: { emailVerified } } = checkUser;
          if (checkUser?.user?.emailVerified) {
            toast("Login Successfully");
            setUserId(checkUser?.user?.uid);
            navigate("/add-student");
          } else {
            await sendEmailVerification(auth.currentUser);
            toast("Please verified your email to proceed further");
          }
        } else {
          toast("Please create an account to proceed");
        }
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
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <span className="text-red-500 text-[12px]">
                  {formik.errors.email}
                </span>
              )}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password"
                  required
                />
              </div>
              {formik.errors.password && formik.touched.password && (
                <span className="text-red-500 text-[12px]">
                  {formik.errors.password}
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
            disabled={loading}
            className="w-full"
          >
            {loading ? "Logging..." : "Log In"}
          </Button>
          <p className="text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="underline cursor-pointer">
              Create New Account
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
