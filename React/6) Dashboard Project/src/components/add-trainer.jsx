import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../firebase";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";

function AddTrainer() {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };
  const addTrainerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .min(10, "Invalid Phone Number")
      .required("Phone Number is Required"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: addTrainerSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const collectionRef = collection(db, "add-trainer");
        const data = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          timestamp: serverTimestamp(),
        };
        const docRef = await addDoc(collectionRef, data);
        if (docRef) {
          formik.resetForm();
          toast("Trainer record has been added!");
        }
      } catch (error) {
        toast(error?.message);
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add Trainer</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Trainer Profile</DialogTitle>
            <DialogDescription>
              Please insert trainer details below
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            {formik.errors.name && formik.touched.name && (
              <span className="text-red-500 text-[12px]">
                {formik.errors.name}
              </span>
            )}
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter your Email"
              />
            </div>
            {formik.errors.email && formik.touched.email && (
              <span className="text-red-500 text-[12px]">
                {formik.errors.email}
              </span>
            )}
            <div className="grid gap-3">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="telephone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                placeholder="Phone Number"
              />
            </div>
            {formik.errors.phone && formik.touched.phone && (
              <span className="text-red-500 text-[12px]">
                {formik.errors.phone}
              </span>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={() => {
                formik.submitForm();
              }}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
export default AddTrainer;
