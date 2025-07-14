import AddTrainer from "../components/add-trainer";
import Layout from "../components/layout/layout";
import TrainerList from "../components/trainer-list";

const AddTrainerPage = () => {
  return (
    <Layout>
      <div className="flex justify-end items-center p-2">
        <AddTrainer />
      </div>
      <div className="p-2">
        <TrainerList />
      </div>
    </Layout>
  );
};

export default AddTrainerPage;
