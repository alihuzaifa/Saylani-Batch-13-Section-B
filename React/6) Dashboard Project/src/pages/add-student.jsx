import AddStudent from "../components/add-student";
import StudentList from "../components/student-list";
import Layout from "../components/layout/layout";

export default function AddStudentComp() {
  return (
    <>
      <Layout>
        <div className="flex justify-end items-center p-2">
          <AddStudent />
        </div>
        <div className="p-2">
          <StudentList />
        </div>
      </Layout>
    </>
  );
}
