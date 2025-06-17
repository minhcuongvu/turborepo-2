import HeaderComponent from "@/components/layout/header";
import MainComponent from "@/components/layout/main";
import FooterComponent from "@/components/layout/footer";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <>
    <HeaderComponent />
    <MainComponent>
      Blog {id}
    </MainComponent>
    <FooterComponent />
  </>;
};
