import InvoiceList from "@/containers/InvoiceList";
import BaseLayout from "@/layouts/BaseLayout";

const Home = () => {
  console.log("Home");
  return (
    <BaseLayout>
      <InvoiceList />
    </BaseLayout>
  );
};

export default Home;
